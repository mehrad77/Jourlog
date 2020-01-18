import React from 'react';
import { Link, graphql } from 'gatsby';
import { Layout, Article, Wrapper, SectionTitle, Header, Content, Pagination } from '../components';
import Helmet from 'react-helmet';
import config from '../../config/SiteConfig';
import Data from '../models/Data';
import { toFarsiNumber } from '../utils/persianUtils';

interface Props {
  data: Data;
  pageContext: {
    currentPage: number;
    totalPages: number;
  };
}

export default class EnBlogPage extends React.Component<Props> {
  public render() {
    const { currentPage, totalPages } = this.props.pageContext;

    const { data } = this.props;
    const { edges, totalCount } = data.allMarkdownRemark;

    return (
      <Layout>
        <Helmet title={`بلاگ | ${config.siteTitle.fa}`} />
        <Header direction="rtl">
          <Link to="/">{config.siteTitle.fa}</Link>
          <SectionTitle uppercase="uppercase">آخرین نوشته‌ها</SectionTitle>
          <span className="text-white">{toFarsiNumber(totalCount)} نوشته</span>
        </Header>
        <Wrapper>
          <Content>
            {edges.map(post => (
              <Article
                title={post.node.frontmatter.title}
                date={post.node.frontmatter.date}
                excerpt={post.node.frontmatter.excerpt ? post.node.frontmatter.excerpt : post.node.excerpt}
                timeToRead={post.node.timeToRead}
                slug={post.node.fields.slug}
                category={post.node.frontmatter.category}
                banner={post.node.frontmatter.banner}
                key={post.node.fields.slug}
                direction={'rtl'}
              />
            ))}
            <Pagination currentPage={currentPage} totalPages={totalPages} url={'fa-blog'} />
          </Content>
        </Wrapper>
      </Layout>
    );
  }
}
export const BlogQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      filter: { fields: { draft: { eq: false } }, frontmatter: { dir: { eq: "rtl" } } }
    ) {
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
            banner
            excerpt
          }
          excerpt(pruneLength: 200)
          timeToRead
        }
      }
    }
  }
`;
