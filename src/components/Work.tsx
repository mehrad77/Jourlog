import React, { FC } from 'react';

interface IWork {
  title: string;
  link: string;
  image?: string;
  description: string;
}

const Work: FC<IWork> = ({ image = 'http://placehold.it/250x250.jpg', link, title, description }) => {
  return (
    <div className="block flex flex-row w-full mb-8 bg-backWhite-opaque rounded-md overflow-hidden shadow-md">
      <img className="w-3/12 relative object-cover" src={image} />
      <figcaption className="w-9/12 py-2 px-4">
        <h3 className="text-2xl text-foreText-heading">{title}</h3>
        <p className="text-foreText-paragraph text-sm">{description}</p>
        <a
          href={link}
          className="px-4 py-2 align-baseline bg-primary-600 hover:text-white hover:shadow-md text-white font-bold float-right"
        >
          Visit
        </a>
      </figcaption>
    </div>
  );
};

export default Work;
