import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import { Layout, Wrapper, Button, Article } from '../components';
import PageProps from '../models/PageProps';
import Helmet from 'react-helmet';
import config from '../../config/SiteConfig';
import { media } from '../utils/media';
import Logo from '../components/Logo';

const GridRow: any = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props: any) =>
    props.background ? `linear-gradient( -185deg, #1818184d, rgba(26,26,26,0.9)),url(/assets/bg.jpg) no-repeat` : null};
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
  max-width: ${(props: any) => (props.hasMaxWidth ? '30rem' : 'left')};
  text-align: ${(props: any) => (props.center ? 'center' : 'left')};
`;

export default class IndexPage extends React.Component<PageProps> {
  public render() {
    const { data } = this.props;
    const { edges } = data.allMarkdownRemark;
    return (
      <Layout>
        <Wrapper fullWidth>
          <Helmet title={`Homepage | ${config.siteTitle.en}`} />
          <div className="flex h-full flex-col">
            <GridRow background={true}>
              <HomepageContent center={true}>
                {/* <img src={config.siteLogo} /> */}
                <Logo />
                <p className="w-full md:w-2/4 mx-auto">
                  I'm Mehrad Rousta and I write about Life, Web Development, Podcasts, Music, Language, Inde Culture and other stuff.
                </p>

                <Link to="/en-blog">
                  <Button>English Blog</Button>
                </Link>
                <Link to="/works">
                  <Button>Works</Button>
                </Link>
                <Link to="/fa-blog">
                  <Button>Persin Blog</Button>
                </Link>
              </HomepageContent>
            </GridRow>
            <GridRow>
              <HomepageContent hasMaxWidth={false}>
                <h2 className="text-3xl text-foreText-heading text-center">Latest Blog | آخرین‌نوشته‌ها </h2>
                <hr />
                <div className="flex flex-col md:flex-row flex-wrap justify-center">
                  {edges.map(post => (
                    <Article
                      className=" md:w-4/12 ml-4 mr-4 "
                      removeWC
                      title={post.node.frontmatter.title}
                      date={post.node.frontmatter.date}
                      direction={post.node.frontmatter.dir}
                      excerpt={post.node.frontmatter.excerpt ? post.node.frontmatter.excerpt : post.node.excerpt}
                      timeToRead={post.node.timeToRead}
                      slug={post.node.fields.slug}
                      category={post.node.frontmatter.category}
                      banner={post.node.frontmatter.banner}
                      key={post.node.fields.slug}
                    />
                  ))}
                </div>
                <div className="flex flex-row justify-center">
                  <Link className="text-sm" to={'/en-blog'}>
                    <Button>English Blog</Button>
                  </Link>
                  <br />
                  <Link className="text-sm" to={'/fa-blog'}>
                    <Button>نوشته‌های فارسی</Button>
                  </Link>
                </div>
              </HomepageContent>
            </GridRow>
          </div>
        </Wrapper>
      </Layout>
    );
  }
}
export const IndexQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 4, filter: { fields: { draft: { eq: false } } }) {
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
            dir
            excerpt
          }
          timeToRead
        }
      }
    }
  }
`;
