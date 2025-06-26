import React from "react";
import Card from "./Card";
import { data } from "./projectsData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Projects',
  description: 'learn more about sandeep reddy personal projects.',
};

const Projects = () => {
  return (
    <div id="projects" className="w-screen mx-auto px-3  md:px-6   mb-16 py-20">
      <div className="text-3xl  lg:text-4xl  font-bold border-b-4 border-green-500 p-2 ml-4 inline">
        Personal Projects
      </div>{' '}
      <p className="text-secondary font-mono md:ml-10  my-6 w-full lg:w-[80%]">
        Note : {'  '}Regrettably, a few of my personal websites are currently
        inaccessible due to a combination of factors, including the expiration
        of the free tiers on Heroku, AWS S3 and other services, as well as my
        extensive use of beta/unstable features. However, I&apos;ve taken steps
        to ensure that each project remains accessible by providing GitHub
        repository links or pre-recorded videos. Almost always, my personal
        projects are unique and offer a very good learning curve.{' '}
        <span className="font-bold text-lg text-green-300">Decent-Bet </span> is my current best project.{' '}
      </p>
      <div className="grid mt-20 gap-11 xl:gap-20 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center sm:px-6 md:px-10">
        {data.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
            links={el.links}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
