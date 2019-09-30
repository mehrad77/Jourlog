import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import { Layout, Wrapper, Button, Article } from '../components';
import PageProps from '../models/PageProps';
import Helmet from 'react-helmet';
import config from '../../config/SiteConfig';
import { media } from '../utils/media';
import rgba from 'polished/lib/color/rgba';
import darken from 'polished/lib/color/darken';
import lighten from 'polished/lib/color/lighten';
import Logo from '../components/Logo';

const Homepage = styled.main`
  display: flex;
  height: 100vh;
  flex-direction: row;
  @media ${media.tablet} {
    height: 100%;
    flex-direction: column;
  }
  @media ${media.phone} {
    height: 100%;
    flex-direction: column;
  }
`;

const GridRow: any = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props: any) =>
    props.background
      ? `linear-gradient(
      -185deg,
      ${rgba(darken(0.1, props.theme.colors.primary), 0.7)}, 
      ${rgba(lighten(0.1, props.theme.colors.grey.dark), 0.9)}), url(/assets/bg.jpg) no-repeat`
      : null};
  background-size: cover;
  padding: 2rem 4rem;
  color: ${(props: any) => (props.background ? props.theme.colors.white : null)};
  animation: background-silder 150s linear infinite;
  h1 {
    color: ${(props: any) => (props.background ? props.theme.colors.white : null)};
  }
  @media ${media.tablet} {
    padding: 3rem 3rem;
  }
  @media ${media.phone} {
    padding: 2rem 1.5rem;
  }

  @keyframes background-silder {
    0% {
      background-position: 0%;
    }
    50% {
      background-position: 100%;
    }
  }
`;

const HomepageContent: any = styled.div`
  max-width: 30rem;
  text-align: ${(props: any) => (props.center ? 'center' : 'left')};
`;

export default class IndexPage extends React.Component<PageProps> {
  public render() {
    const { data } = this.props;
    const { edges, totalCount } = data.allMarkdownRemark;
    return (
      <Layout>
        <Wrapper fullWidth={true}>
          <Helmet title={`Homepage | ${config.siteTitle}`} />
          <Homepage>
            <GridRow background={true}>
              <HomepageContent center={true}>
                {/* <img src={config.siteLogo} /> */}
                <Logo />
                <p>I'm Mehrad Rousta and I write about Life, Web Development, Podcasts, Music, Language, Inde Culture and other stuff.</p>
                <Link to="/works">
                  <Button big={true}>
                    <svg height="512pt" viewBox="0 0 512.00034 512" width="512pt" xmlns="http://www.w3.org/2000/svg">
                      <path d="m74.742188 328.078125c-2.898438 5.78125-1.769532 12.769531 2.796874 17.339844l3.667969 3.667969c10.597657-12.558594 22.949219-26.1875 37.929688-41.164063 1.058593-1.058594 2.148437-1.570313 3.210937-2.546875l-23.597656-23.601562c-13.71875 24.8125-21.71875 41.765624-24.007812 46.304687zm0 0" />
                      <path d="m203.988281 392.773438c-15.015625 15.015624-28.609375 27.390624-41.097656 37.996093l4.96875 4.96875c4.609375 4.609375 11.664063 5.71875 17.464844 2.734375 7.769531-4.003906 19.988281-9.753906 45.925781-24.199218l-24.710938-24.710938c-.976562 1.066406-1.488281 2.152344-2.550781 3.210938zm0 0" />
                      <path d="m195.992188 315.9375c-10.839844-10.839844-41.324219-1.121094-55.644532 13.195312-47.90625 47.90625-69.542968 81.871094-79.257812 101.925782-2.785156 5.746094-1.625 12.625 2.890625 17.140625 4.523437 4.527343 11.414062 5.675781 17.164062 2.890625 19.605469-9.519532 53.15625-31.054688 101.632813-79.527344 15.746094-15.753906 23.515625-45.320312 13.226562-55.613281zm0 0" />
                      <path d="m46.820312 199.710938-42.425781 42.425781c-4.796875 4.796875-5.78125 12.222656-2.382812 18.105469 3.316406 5.804687 10.261719 8.761718 16.871093 6.992187 22.929688-6.148437 43.105469-8.746094 56.691407-5.261719 19.328125-34.363281 40.097656-65.996094 62.09375-94.730468-12.722657-8.15625-54.765625-3.613282-90.847657 32.46875zm0 0" />
                      <path d="m253.894531 510.390625c5.777344 2.921875 12.773438 1.792969 17.347657-2.785156l42.429687-42.425781c32.847656-32.855469 38.628906-75.246094 31.175781-88.6875-32.046875 24.152343-64.511718 44.546874-94.800781 61.621093 2.089844 11.800781.699219 23.25-4.242187 56.6875-.964844 6.472657 2.378906 12.734375 8.089843 15.589844zm0 0" />
                      <path d="m297.800781 150.46875c-17.542969 17.546875-17.542969 46.089844 0 63.636719 17.546875 17.546875 46.09375 17.546875 63.640625 0s17.546875-46.089844 0-63.636719-46.09375-17.546875-63.640625 0zm0 0" />
                      <path d="m511.117188 14.632812c-.539063-7.417968-6.445313-13.28125-13.839844-13.835937-36.839844-2.773437-73.535156 1.757813-109.503906 12.757813 2.707031 24.710937 15.488281 51.453124 37.308593 73.273437 22.082031 22.078125 49.550781 34.855469 74.703125 37.246094 9.6875-33.949219 14.28125-70.308594 11.332032-109.441407zm0 0" />
                      <path d="m403.871094 108.042969c-24.960938-24.960938-40.203125-54.898438-45.09375-84.046875-90.074219 36.941406-176.300782 117.613281-244.4375 230.941406l33.851562 33.851562c23.128906-9.390624 51.207032-11.871093 69.015625 5.933594 17.832031 17.835938 15.304688 45.902344 5.917969 69l34.964844 34.964844c87.195312-52.550781 188.710937-135.34375 231.878906-245.496094-29.859375-4.511718-60.730469-19.78125-86.097656-45.148437zm-21.21875 127.277343c-29.238282 29.238282-76.820313 29.238282-106.0625 0-29.242188-29.242187-29.242188-76.828124 0-106.066406 29.242187-29.238281 76.824218-29.238281 106.0625 0 29.242187 29.242188 29.242187 76.824219 0 106.066406zm0 0" />
                    </svg>
                    My Works
                  </Button>
                </Link>
                <Link to="/blog">
                  <Button big>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70" width="900" height="900">
                      <g id="Typewriter-2" data-name="Typewriter">
                        <rect x="41" y="48" width="14" height="4" />
                        <path d="M39,30a1,1,0,0,0-1,1v9.586l3.707,3.707A1,1,0,0,1,42,45v1H53V45a1,1,0,0,1,.143-.515L56,39.723V30a1,1,0,0,0-2,0v3a1,1,0,0,1-2,0V26a1,1,0,0,0-2,0v7a1,1,0,0,1-2,0V25a1,1,0,0,0-2,0v8a1,1,0,0,1-2,0V26a1,1,0,0,0-2,0V37a1,1,0,0,1-2,0V31A1,1,0,0,0,39,30Z" />
                        <path d="M54,60V54H42v6Zm-4-4h2v2H50Z" />
                        <path d="M60,31V13H4V31H6V30a3,3,0,0,1,4-2.829V26a3,3,0,0,1,4.472-2.614,3,3,0,0,1,5.056,0A3,3,0,0,1,24,26v1H40V26a3,3,0,0,1,4.472-2.614,3,3,0,0,1,5.056,0A3,3,0,0,1,54,26v1.171A3,3,0,0,1,58,30v1ZM11,21H9V19h2Zm0-4H9V15h2Zm4,4H13V19h2Zm0-4H13V15h2Zm4,4H17V19h2Zm0-4H17V15h2Zm4,4H21V19h2Zm0-4H21V15h2Zm4,8H25V23h2Zm0-4H25V19h2Zm0-4H25V15h2Zm4,8H29V23h2Zm0-4H29V19h2Zm0-4H29V15h2Zm4,8H33V23h2Zm0-4H33V19h2Zm0-4H33V15h2Zm4,8H37V23h2Zm0-4H37V19h2Zm0-4H37V15h2Zm4,4H41V19h2Zm0-4H41V15h2Zm4,4H45V19h2Zm0-4H45V15h2Zm4,4H49V19h2Zm0-4H49V15h2Zm4,4H53V19h2Zm0-4H53V15h2Z" />
                        <rect x="9" y="48" width="14" height="4" />
                        <path d="M22,60V54H10v6ZM12,56h2v2H12Z" />
                        <path d="M26,31a1,1,0,0,0-2,0v6a1,1,0,0,1-2,0V26a1,1,0,0,0-2,0v7a1,1,0,0,1-2,0V25a1,1,0,0,0-2,0v8a1,1,0,0,1-2,0V26a1,1,0,0,0-2,0v7a1,1,0,0,1-2,0V30a1,1,0,0,0-2,0v9.723l2.857,4.762A1,1,0,0,1,11,45v1H22V45a1,1,0,0,1,.293-.707L26,40.586Z" />
                        <path d="M36,31a2.981,2.981,0,0,1,.78-2H27.22A2.981,2.981,0,0,1,28,31Z" />
                      </g>
                    </svg>
                    Blog
                  </Button>
                </Link>
              </HomepageContent>
            </GridRow>
            <GridRow>
              <HomepageContent>
                <hr />
                <h2>Latest Blog</h2>
                {edges.map(post => (
                  <Article
                    title={post.node.frontmatter.title}
                    date={post.node.frontmatter.date}
                    excerpt={post.node.excerpt}
                    timeToRead={post.node.timeToRead}
                    slug={post.node.fields.slug}
                    category={post.node.frontmatter.category}
                    key={post.node.fields.slug}
                  />
                ))}
                <p className={'textRight'}>
                  <Link to={'/blog'}>All articles ({totalCount})</Link>
                </p>
              </HomepageContent>
            </GridRow>
          </Homepage>
        </Wrapper>
      </Layout>
    );
  }
}
export const IndexQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 3, filter: { fields: { draft: { eq: false } } }) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD.MM.YYYY")
            category
          }
          timeToRead
        }
      }
    }
  }
`;
