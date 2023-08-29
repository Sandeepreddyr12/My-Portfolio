import React from "react";

interface propsType {
  title: string;
}

const Heading: React.FC<propsType> = ({ title }) => {
  return (
    <div className="text-center text-4xl  pb-8 mb-4">
      <p className="border-b-4 inline-block text-bold mb-6 pb-2">{title}</p>
    </div>
  );
};

export default Heading;
