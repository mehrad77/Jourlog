import React, { VFC } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const HomePageHero: VFC = () => {
  const data = useStaticQuery(graphql`
    query HomePageHerQuery {
      avatar: file(absolutePath: { regex: "/profile.jpg/" }) {
        childImageSharp {
          fixed(width: 300, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            name_fa
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `);
  const { author } = data.site.siteMetadata;

  const image = (<div className="w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden">
    <Image
      fixed={data.avatar.childImageSharp.fixed}
      alt={author.name}
      className="h-full w-full"
    />
  </div>);

  return (
    <div className="flex flex-col md:flex-row justify-between p-8 bg-gray-300">
      {/*  */}
      <div className="flex md:hidden items-center justify-center">
        {image}
      </div>
      {/*  */}
      <div className="flex flex-col w-full">
        <div className="flex flex-row px-4 justify-between text-gray-700 w-full">
          <h1 className="m-0 my-2">{author.name}</h1>
          <h1 className="m-0 my-2" style={{ direction: 'rtl' }}>{author.name_fa}</h1>
        </div>
        <p className="px-8">
          Yes, that's my name. But a name doesn't define anything. It is not even a unique identifier. It's something we carry with us through our life and we try to give meaning to it. (or do we?)
          <br /><br />
          I was born in Tehran. A Tehran ruled under Islamic Republic theocracy that many people try to escape from it to other countries for a better fortune and future.
          <br />
          I love music and podcasts (both listening and producing).  I'm interested in city planning, since-fiction novels, developing software and games, role-playing games (D&D and related games), indie culture, and helping people I love.
        </p>
      </div>
      {/*  */}
      <div className="hidden md:flex items-center justify-center">
        {image}
      </div>
    </div>
  )
}

export default HomePageHero;


