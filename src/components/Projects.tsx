import React from "react";
import Heading from "./Heading";
import Card from "./Card";
import { data } from "./projectsData";



const Projects = () => {
  return (
    <div id="projects" className="w-screen mx-auto px-12  mb-16 py-16">
      <div className="text-4xl  font-bold border-b-4 border-gray-500 p-2 inline">
        Personal Projects
      </div>{' '}
      <div className="grid mt-20 gap-28 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
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
