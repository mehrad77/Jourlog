import React from 'react';
import rehypeReact from 'rehype-react';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import kebabCase from 'lodash/kebabCase';
import { DiscussionEmbed } from 'disqus-react';
import { Layout, Wrapper, Header, Subline, SEO, PrevNext, SectionTitle, Content } from '../components';
import config from '../../config/SiteConfig';
import '../utils/prismjs-theme.css';
import PathContext from '../models/PathContext';
import Post from '../models/Post';
import Logo from '../components/Logo';

const PostContent = styled.div`
  margin-top: 4rem;
`;

interface Props {
  data: {
    markdownRemark: Post;
  };
  pathContext: PathContext;
}

export default class PostPage extends React.PureComponent<Props> {
  public render() {
    const renderAst = new rehypeReact({
      createElement: React.createElement,
      components: { logo: Logo },
    }).Compiler;

    const { prev, next } = this.props.pathContext;
    const post = this.props.data.markdownRemark;
    const slug = post.fields.slug;
    const title = post.frontmatter.title;
    let url = '';
    if (typeof window !== `undefined`) {
      url = window.location.href;
    }
    const disqusConfig = {
      shortname: config.disqus_name,
      config: {
        title,
        url,
        identifier: slug,
      },
    };
    return (
      <Layout>
        {post ? (
          <>
            <SEO postPath={slug} postNode={post} postSEO />
            <Helmet title={`${title} | ${post.frontmatter.dir === 'ltr' ? config.siteTitle.en : config.siteTitle.fa}`} />
            <Header banner={post.frontmatter.banner}>
              <Link to="/">{post.frontmatter.dir === 'ltr' ? config.siteTitle.en : config.siteTitle.fa}</Link>
              <SectionTitle direction={post.frontmatter.dir}>{title}</SectionTitle>
              <Subline>
                {post.frontmatter.date} &mdash; {post.timeToRead} Min Read &mdash; In{' '}
                <Link to={`/categories/${kebabCase(post.frontmatter.category)}`}>{post.frontmatter.category}</Link>
              </Subline>
            </Header>
            <Wrapper>
              <Content direction={post.frontmatter.dir}>
                <PostContent>{renderAst(post.htmlAst)}</PostContent>
                {post.frontmatter.tags ? (
                  <div>
                    Tags: &#160;
                    {post.frontmatter.tags.map((tag, i) => (
                      <Link key={i} to={`/tags/${kebabCase(tag)}`}>
                        <strong>{tag}</strong> {i < post.frontmatter.tags.length - 1 ? `, ` : ``}
                      </Link>
                    ))}
                  </div>
                ) : null}
                <PrevNext prev={prev} next={next} />
                <DiscussionEmbed {...disqusConfig} />
              </Content>
            </Wrapper>
          </>
        ) : null}
      </Layout>
    );
  }
}

export const postQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "DD.MM.YYYY")
        category
        tags
        dir
        banner
      }
      timeToRead
    }
  }
`;
