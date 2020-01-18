import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import { Layout, Wrapper, Header, Subline, Article, SectionTitle, Content } from '../components';
import config from '../../config/SiteConfig';
import kebabCase from 'lodash/kebabCase';
import PageProps from '../models/PageProps';

export default class Category extends React.PureComponent<PageProps> {
  public render() {
    const { posts, categoryName } = this.props.pathContext;
    const totalCount = posts ? posts.length : 0;
    const subline = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${categoryName}"`;

    return (
      <Layout>
        <Helmet title={`${categoryName} | ${config.siteTitle.en}`} />
        <Header>
          <Link to="/">{config.siteTitle.en}</Link>
          <SectionTitle>Category &ndash; {categoryName}</SectionTitle>
          <Subline>
            {subline} (See <Link to="/categories">all categories</Link>)
          </Subline>
        </Header>
        <Wrapper>
          <Content direction={kebabCase(categoryName) === 'farsi-posts' ? 'rtl' : 'ltr'}>
            {posts
              ? posts.map((post: any, index) => (
                  <Article
                    title={post.frontmatter.title}
                    date={post.frontmatter.date}
                    direction={post.frontmatter.dir}
                    excerpt={post.frontmatter.excerpt ? post.frontmatter.excerpt : post.excerpt}
                    slug={kebabCase(post.frontmatter.title)}
                    timeToRead={post.timeToRead}
                    category={post.frontmatter.category}
                    banner={post.frontmatter.banner}
                    key={index}
                  />
                ))
              : null}
          </Content>
        </Wrapper>
      </Layout>
    );
  }
}
