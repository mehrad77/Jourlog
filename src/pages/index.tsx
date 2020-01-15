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
  max-width: 30rem;
  text-align: ${(props: any) => (props.center ? 'center' : 'left')};
`;

export default class IndexPage extends React.Component<PageProps> {
  public render() {
    const { data } = this.props;
    const { edges } = data.allMarkdownRemark;
    return (
      <Layout>
        <Wrapper fullWidth>
          <Helmet title={`Homepage | ${config.siteTitle}`} />
          <div className="flex h-full flex-col lg:flex-row">
            <GridRow background={true}>
              <HomepageContent center={true}>
                {/* <img src={config.siteLogo} /> */}
                <Logo />
                <p>I'm Mehrad Rousta and I write about Life, Web Development, Podcasts, Music, Language, Inde Culture and other stuff.</p>
                <Link to="/works">
                  <Button>My Works</Button>
                </Link>
                <Link to="/blog">
                  <Button>Blog</Button>
                </Link>
              </HomepageContent>
            </GridRow>
            <GridRow>
              <HomepageContent>
                <h2 className="text-3xl text-foreText-heading text-center">Latest Blog</h2>
                <hr />
                {edges.map(post => (
                  <Article
                    title={post.node.frontmatter.title}
                    date={post.node.frontmatter.date}
                    direction={post.node.frontmatter.dir}
                    excerpt={post.node.frontmatter.excerpt ? post.node.frontmatter.excerpt : post.node.excerpt}
                    timeToRead={post.node.timeToRead}
                    slug={post.node.fields.slug}
                    category={post.node.frontmatter.category}
                    key={post.node.fields.slug}
                  />
                ))}
                <div className="flex flex-row justify-center">
                  <Link className="text-sm" to={'/categories/english-posts'}>
                    <Button>English Posts</Button>
                  </Link>{' '}
                  <br />
                  <Link className="text-sm" to={'/categories/farsi-posts'}>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 2, filter: { fields: { draft: { eq: false } } }) {
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
