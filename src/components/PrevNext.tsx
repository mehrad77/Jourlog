import React, { FC } from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import Post from '../models/Post';

interface IPrevNext {
  next: Post;
  prev: Post;
}

const PrevNext: FC<IPrevNext> = ({ prev, next }) => {
  return (
    <div style={{ direction: 'ltr' }} className="flex w-full mt-24 mb-4 mx-auto justify-center">
      {prev && (
        <div>
          <span className="uppercase text-sm text-gray-700 font-bold">Previous</span>
          <Link className="flex items-center text-primary-700" to={`/blog/${kebabCase(prev.frontmatter.title)}`}>
            {prev.frontmatter.title}
          </Link>
        </div>
      )}
      {next && (
        <div className="ml-auto text-right">
          <span className="uppercase text-sm text-gray-700 font-bold">Next</span>
          <Link className="flex items-center text-primary-700" to={`/blog/${kebabCase(next.frontmatter.title)}`}>
            {next.frontmatter.title}
          </Link>
        </div>
      )}
    </div>
  );
};

export { PrevNext };
