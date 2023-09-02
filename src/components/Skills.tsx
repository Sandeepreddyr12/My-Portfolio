import Image from 'next/image'; 
import { techs } from './skillsData';


const Experience = () => {
 

  return (
    <div id="skills" className="bg-gradient-to-b from-gray-800 to-black w-full pt-10 p-4 md:p-8 lg:p-16">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-green-500 p-2 inline">
            Specializations
          </p>
          <p className="py-6">
            These are the technologies I&apos;ve worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8  text-center py-8 md:px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              data-aos="zoom-in-up"
              className={`shadow-md min-w-max hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <Image
                src={src}
                alt=""
                width={80}
                height={80}
                className="w-20 mx-auto"
              />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
