'use client';

import { Bot } from 'lucide-react';
import { useState } from 'react';
import ChatBox from './chatBox';

export default function ChatButton() {
  const [chatBoxOpen, setChatBoxOpen] = useState(false);

  return (
    <>
      <button
        className="z-20 text-white flex flex-col shrink-0 grow-0 justify-around 
                  fixed top-28 left-5 rounded-lg
                  mr-1 mb-5 lg:mr-5 lg:mb-5 xl:mr-10 xl:mb-10"
        onClick={() => setChatBoxOpen(true)}
      >
        <Bot size={36} />
        {/* <Link
          href="https://www.flaticon.com/free-animated-icons/robot"
          title="robot animated icons"
        >
          Robot animated icons created by Freepik - Flaticon
        </Link> */}
      </button>
      <ChatBox open={chatBoxOpen} onClose={() => setChatBoxOpen(false)} />
    </>
  );
}
