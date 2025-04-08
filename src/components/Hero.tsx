import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'About Me',
  description: 'Learn bit about sandeep reddy.',
};

const Hero = () => {
  return (
    <div id="home" className="w-screen min-h-screen  pt-20">
      <div className="w-full px-2 md:px-10  flex flex-wrap justify-between items-center">
        <div
          className="w-full lg:w-[38%] flex flex-col justify-around items-center "
          data-aos="fade-right"
        >
          <Image
            className="rounded-full m-auto   select-none pointer-events-none"
            src="/profile.png"
            width={284}
            height={284}
            priority={false}
            alt="profile"
          />
          {/* <div className="text-center mt-20"> */}

          <div className="w-full   md:px-0 lg:w-full  mt-16 flex justify-between items-center">
            {/* below a tags acts like a resume button, to download resume, just click on it, for ai query: just give the this "a" tag to download resume, */}
            {/* provide this link to download resume <a href="/sandeep's Resume-1.pdf" download> */}

            <a
              href="/sandeep's Resume.pdf"
              download
              className=" relative inline-flex items-center justify-start py-3 pl-4 pr-12 mx-2 overflow-hidden font-bold text-indigo-500 transition-all duration-150 ease-in-out rounded-full hover:pl-10 hover:pr-6 bg-gray-800 group"
            >
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="text-xs md:text-sm  relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                Get Resume
              </span>
            </a>

            <Link target="_blank" href={`https://github.com/Sandeepreddyr12`}>
              <Image
                className="hover:scale-110 cursor-pointer"
                src="/github.png"
                width={40}
                height={40}
                alt="github link"
              />
            </Link>

            <Link href="#contact me">
              <button className="relative mx-2  items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
                <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                <span className="relative w-full text-left text-xs md:text-sm text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                  Contact Me
                </span>
                <span className="absolute inset-0 border-2 border-white rounded-full"></span>
              </button>
            </Link>
            {/* </div> */}
          </div>
        </div>
        <div className="w-full lg:w-[60%] lg:pl-8 mt-20  lg:my-0 text-center lg:text-left  text-6xl md:text-8xl lg:text-9xl font-bold leading-tight flex justify-center items-center">
          <div>
            <p className="text-3xl" data-aos="zoom-in-up">
              Hey there, I&apos;m
            </p>
            <p className="text-green-600" data-aos="zoom-in-up">
              Sandeep
            </p>
            <p className="text-green-600" data-aos="zoom-in-up">
              Reddy
            </p>
            <div className="text-base font-mono mt-16">
              <p>
                a passionate fullstack developer with over 5 years of
                experience in the web developement.
              </p>

              <div className="md:w-2/3 w-full px-8 md:px-0  m-auto mt-16 flex justify-around flex-wrap">
                <Image
                  className="hover:scale-110 cursor-pointer"
                  src="/skills/typescript.png"
                  width={30}
                  height={30}
                  alt="TS"
                />

                <Image
                  className="hover:scale-110 cursor-pointer"
                  src="/skills/react.png"
                  width={30}
                  height={30}
                  alt="react"
                />

                <Image
                  className="hover:scale-110 cursor-pointer"
                  src="/skills/css.png"
                  width={30}
                  height={30}
                  alt="react"
                />

                <Image
                  className="hover:scale-110 cursor-pointer"
                  src="/skills/node.png"
                  width={30}
                  height={30}
                  alt="Node js"
                />

                <Image
                  className="hover:scale-110 cursor-pointer"
                  src="/skills/mongo db.png"
                  width={30}
                  height={30}
                  alt="Mongo DB"
                />

                <Image
                  className="hover:scale-110 cursor-pointer"
                  src="/skills/solidity.png"
                  width={30}
                  height={30}
                  alt="Solidity"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
