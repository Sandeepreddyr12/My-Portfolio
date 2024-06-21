import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
// Configure dotenv before other imports
import { DocumentInterface } from '@langchain/core/documents';
import { Redis } from '@upstash/redis';
import { DirectoryLoader } from 'langchain/document_loaders/fs/directory';
import { TextLoader } from 'langchain/document_loaders/fs/text';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { getEmbeddingsCollection, getVectorStore } from '../src/lib/astradb';
const fs = require('fs');



async function generateEmbeddings() {
  await Redis.fromEnv().flushdb();

  const vectorStore = await getVectorStore();

  (await getEmbeddingsCollection()).deleteAll();

  const loader = new DirectoryLoader(
    'src/components/',
    {
      '.tsx': (path) => new TextLoader(path),
    },
    true
  );

  const docs = (await loader.load())
    .filter(
      (doc) =>
        !(
          doc.metadata.source.endsWith('chatButton.tsx') ||
          doc.metadata.source.endsWith('Card.tsx') ||
          doc.metadata.source.endsWith('Navbar.tsx') ||
          doc.metadata.source.endsWith('spinners.tsx')
        )
    )
    .map((doc): DocumentInterface => {
      const modifiedSource = doc.metadata.source
        .replace(/\\/g, '/')
        .split('/src/components')[1]
        .split(/\.tsx$/)[0]
        .toLowerCase();

      let finalResult = modifiedSource.split('/').pop();

      if (finalResult === 'projectsdata') {
        finalResult = '/#projects';
      } else if (finalResult === 'skillsdata') {
        finalResult = '/#skills';
      } else if (finalResult === 'hero') {
        finalResult = '/';
      } else if (finalResult === 'footer') {
        finalResult = '/#contact';
      } else if (finalResult === 'chatbox') {
        finalResult = '/';
      } else {
        finalResult = `/#${finalResult}`;
      }

      const url = finalResult;

      const pageContentTrimmed = doc.pageContent
        .replace(/^import.*$/gm, '') // Remove all import statements
        .replace(
          / className=(["']).*?\1| className={.*?}|\bclassName\s*=\s*(\{[^}]+\})| className\s*=\s*([^;]+)/g,
          ''
        ) // Remove all className props
        .replace(/data-aos=(["']).*?\1/g, '') // Remove data-aos attributes
        .replace(/^\s*[\r]/gm, '') // remove empty lines
        .trim();

      return {
        pageContent: pageContentTrimmed,
        metadata: { url },
      };
    });
    
    const splitter = RecursiveCharacterTextSplitter.fromLanguage('html');
    
    const splitDocs = await splitter.splitDocuments(docs);


    fs.writeFile(
      `${__dirname}/DBdata1.json`,
      JSON.stringify(splitDocs, null, 2),
      (err: any) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log('Data written to file successfully');
      }
    );
    

  await vectorStore.addDocuments(splitDocs);
}

generateEmbeddings();
