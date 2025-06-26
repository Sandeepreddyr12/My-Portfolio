import Image from "next/image";
import React from "react";
import Link from "next/link";

interface propsType {
  title: string;
  desc: string;
  img: string;
  tags: string[];
  links : {github :string, website : string, video : string};
}

const Card: React.FC<propsType> = ({ title, desc, img, tags, links }) => {
  return (
    <div
      className="border border-accent  rounded-xl "
      data-aos="zoom-in-up"
    >
      <div className="w-full aspect-video relative rounded-t-xl overflow-hidden">
        <Image
          src={img}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 640px) 100vw, 350px"
          className="rounded-t-xl"
        />
      </div>

      <div className="p-4 space-y-4">
        <div className="text-2xl font-bold text-center font-mono">{title}</div>
        <div className="font-mono">{desc}</div>
        <div className="bg-gray-900 p-2 flex justify-around">
          {
            <Link target="_blank" href={links.github}>
              <Image
                className="hover:scale-110 cursor-pointer"
                src="/github.png"
                width={20}
                height={20}
                alt={title}
              />
            </Link>
          }

          {links.website && (
            <Link target="_blank" href={links.website}>
              <Image
                className="hover:scale-110 cursor-pointer"
                src="/external-link.png"
                width={20}
                height={20}
                alt={title}
              />
            </Link>
          )}

          {links.video && (
            <Link target="_blank" href={links.video}>
              <Image
                className="hover:scale-110 cursor-pointer"
                src="/play-button.png"
                width={20}
                height={20}
                alt={title}
              />
            </Link>
          )}
        </div>
        <div>
          {tags.map((el) => (
            <div className="tags hover:scale-110" key={el}>
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
