import React, { FC } from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import { Subline } from './Subline';

// const Initiale = styled.span`
//   transform: translate(-50%, -50%);
//   opacity: 0.08;
//   user-select: none;
//   z-index: -1;
// `;

interface IArticle {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  direction?: 'rtl' | 'ltr';
  timeToRead: number;
  category: string;
}

export const Article: FC<IArticle> = ({ title, date, excerpt, slug, timeToRead, category, direction }) => {
  // const firstChar = title.charAt(0);

  return (
    <article className="flex flex-col my-12 text-center" style={direction ? { direction } : {}} dir={direction}>
      <h2 className="mb-3 text-lg font-semibold rtl:text-right ltr:text-left">
        {/* <Initiale className="absolute text-6xl">{firstChar}</Initiale> */}
        <Link to={`/blog/${slug}`}>{title}</Link>
      </h2>
      <Subline color="black">
        {date} &mdash; {timeToRead} Min Read &mdash; In
        <Link to={`/categories/${kebabCase(category)}`}> {category}</Link>
      </Subline>
      <p className="my-4">{excerpt}</p>
    </article>
  );
};
