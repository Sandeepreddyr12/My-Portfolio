'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [bgColor, setBgColor] = useState<boolean>(false);

  const [openNav, setOpenNav] = useState<boolean>(false);

  const [currentRoute, setCurrentRoute] = useState<string | null>(null);



  const navToggler = () => {
    setOpenNav(!openNav);
  };

  const changeBackground = () => {
    if (window.scrollY >= 60 || openNav) {
      setBgColor(true);
    } else {
      setBgColor(false);
    } 

   window && window.location.hash ? setCurrentRoute(
      window.location.hash 
    ) : null

    
  };



  useEffect(() => {
    // adding the event when scroll change background
    window.addEventListener('scroll', changeBackground);

    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);


  //  useEffect(() => {
  //   const handleClick = (event) => {

  //     console.log( window )

  //     console.log('scroll')
  //     // Traverse up the DOM tree to find the closest parent element with an ID
  //     let target = event.target;
  //     while (target && target !== document) {
  //       if (target.id) {
  //         console.log(`Closest Parent ID: ${target.id}`);
  //         // You can perform any action with the closest parent ID here
  //         break;
  //       }
  //       target = target.parentNode;
  //     }
  //   };

  //   // Attach click event listener to the window
  //   // window.addEventListener('wheel', handleClick);

  //   // Clean up event listener on unmount
  //   return () => {
  //     window.removeEventListener('wheel', handleClick);
  //   };
  // }, []);




useEffect(() => {
    const handleScroll = () => {
      // Get the scroll position
      const scrollY = window.scrollY;
      
      // Find the element closest to the scroll position with an ID
      
    
// acts as a throttle function , needs to have more checks for more accuracy
      if(scrollY % 10 === 0 ){
      const closestParentId =   findClosestParentId(scrollY);

      closestParentId !== 'navbar-default' ? setCurrentRoute(`#${closestParentId}`) : null

      }

      
    };

    const findClosestParentId = (scrollY: number) => {
      let closestParentId = null;
      let closestDistance = Number.MAX_SAFE_INTEGER;

      // Traverse all elements with IDs and find the closest one to the scroll position
      document.querySelectorAll('[id]').forEach((element) => {
        const distance = Math.abs((element as HTMLElement).offsetTop - scrollY);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestParentId = element.id;
        }
      });

      return closestParentId;
    };

    // Attach scroll event listener to the window
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <nav
      className={` fixed px-6 md:pt-2 top-0 right-0  left-0 z-10 border-gray-200       
${bgColor && 'backdrop-blur-[80px] '}`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto   md:px-12">
        <Link href="/">
          <Image
            className="hover:scale-110 cursor-pointer p-0"
            src="/sr-logo.png"
            width={60}
            height={60}
            alt="github link"
          />
        </Link>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={navToggler}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            !openNav ? 'hidden' : 'auto'
          } w-full md:block md:w-auto`}
          id="navbar-default"
          onClick={navToggler}
        >
          <ul className="font-medium text-center bg-black md:bg-transparent flex flex-col p-4 md:p-0  mt-4 border border-none rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            <li>
              <Link
                href="/"
                className={`block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent  md:p-0 dark:text-white hover:scale-105   ${
                  currentRoute == '#home' || null
                    ? 'bg-green-700  md:dark:text-green-500 md:text-green-700'
                    : ''
                }`}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#experience"
                className={`block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent  md:p-0 dark:text-white  hover:scale-105 ${
                  currentRoute === '#experience'
                    ? 'bg-green-700  md:dark:text-green-500 md:text-green-700'
                    : ''
                }`}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className={`block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent  md:p-0 dark:text-white  hover:scale-105 ${
                  currentRoute === '#projects'
                    ? 'bg-green-700  md:dark:text-green-500 md:text-green-700'
                    : ''
                }`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#skills"
                className={`block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent  md:p-0 dark:text-white hover:scale-105  ${
                  currentRoute === '#skills'
                    ? 'bg-green-700  md:dark:text-green-500 md:text-green-700'
                    : ''
                }`}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className={`block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent  md:p-0 dark:text-white  hover:scale-105 ${
                  currentRoute === '#contact'
                    ? 'bg-green-700  md:dark:text-green-500 md:text-green-700'
                    : ''
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
