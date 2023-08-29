import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div id="Home" className=" min-h-screen my-16">
      <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)]">
        <div
          className=" lg:block flex flex-col justify-center items-center w-[40vw]"
          data-aos="fade-right"
        >
          <Image
            className="rounded-full m-auto   select-none"
            src="/profile.png"
            width={284}
            height={284}
            alt="profile"
          />
          <div className="text-center mt-16">
            <div className="mt-8 font-mono font-bold text-2xl ">
              A Passionate FullStack Developer !!
            </div>
            <div className="w-full flex justify-around items-center mt-8 px-10">
              <a
                href="/sandeep's Resume.pdf"
                download
                className=" relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-bold text-indigo-500 transition-all duration-150 ease-in-out rounded-full hover:pl-10 hover:pr-6 bg-gray-800 group"
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
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
                <button className="relative  items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
                  <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                  <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                  <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                    Contact Me
                  </span>
                  <span className="absolute inset-0 border-2 border-white rounded-full"></span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="text-[6em] sm:text-[8em] font-bold leading-tight flex justify-center items-center">
          <div>
            <p data-aos="zoom-in-up">I&apos;m</p>
            <p data-aos="zoom-in-up">Sandeep</p>
            <p data-aos="zoom-in-up">Reddy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
