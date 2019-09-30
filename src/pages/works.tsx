import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import { Layout, Wrapper, Header, Button, Content, SectionTitle } from '../components';

import config from '../../config/SiteConfig';
import PageProps from '../models/PageProps';

export default class ContactPage extends React.Component<PageProps> {
  public render() {
    return (
      <Layout>
        <Helmet title={`Contact | ${config.siteTitle}`} />
        <Header>
          <Link to="/">{config.siteTitle}</Link>
          <SectionTitle uppercase={true}>Mehrad's Works</SectionTitle>
        </Header>
        <Wrapper>
          <Content>
            <p>Sometimes I do cool stuf, sometimes I co-oprate with others to make cool stuf, and sometimes I admire cool stufs.</p>
          </Content>
        </Wrapper>
      </Layout>
    );
  }
}
