import React, { FC } from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import { Subline } from './Subline';
import { getRandomColorPalette } from '../utils';

// const Initiale = styled.span`
//   transform: translate(-50%, -50%);
//   opacity: 0.08;
//   user-select: none;
//   z-index: -1;
// `;

interface IArticle {
  className?: string;
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  direction?: 'rtl' | 'ltr';
  timeToRead: number;
  category: string;
  banner?: string;
  removeWC?: boolean;
}

export const Article: FC<IArticle> = ({
  className = '',
  title,
  date,
  excerpt,
  slug,
  timeToRead,
  banner,
  category,
  direction,
  removeWC,
}) => {
  // const firstChar = title.charAt(0);

  return (
    <article
      className={`flex flex-col mx-auto my-6 p-4 text-center bg-backWhite-pure shadow ${removeWC ? '' : 'md:w-5/12'} ${className}`}
      style={{ direction }}
      dir={direction}
    >
      {banner && <img className="h-64 w-full object-cover object-center mb-4" src={banner} />}
      {!banner && (
        <div className="h-32 w-full relative overflow-hidden mb-4" style={{ backgroundColor: getRandomColorPalette()[1] }}>
          <svg className="absolute bottom-0 left-0" viewBox="0 0 375 283" fill="none" style={{ transform: 'scale(1.5)', opacity: '0.1' }}>
            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
          </svg>
        </div>
      )}
      <h2 className="text-xl font-bold tracking-wide rtl:text-right ltr:text-left">
        {/* <Initiale className="absolute text-6xl">{firstChar}</Initiale> */}
        <Link to={`/blog/${slug}`}>{title}</Link>
      </h2>
      <Subline color="black">
        {date} &mdash; {timeToRead} Min Read &mdash; In
        <Link to={`/categories/${kebabCase(category)}`}> {category}</Link>
      </Subline>
      <p className="my-4">{excerpt} </p>
      <Link to={`/blog/${slug}`}>
        <span className=" font-semibold">{direction === 'ltr' ? 'Read More' : 'ادامه‌ی نوشته'}</span>
      </Link>
    </article>
  );
};
