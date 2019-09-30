import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import { Layout, Wrapper, Header, Content, SectionTitle } from '../components';
import config from '../../config/SiteConfig';
import PageProps from '../models/PageProps';
import Work from '../components/Work';

const WorkWrapper = styled.div`
  text-align: center;
  padding-top: 15px;
`;

export default class ContactPage extends React.Component<PageProps> {
  public render() {
    return (
      <Layout>
        <Helmet title={`Contact | ${config.siteTitle}`} />
        <Header banner={'/assets/bg/1.jpg'}>
          <Link to="/">{config.siteTitle}</Link>
          <SectionTitle uppercase={true}>Mehrad's Works</SectionTitle>
        </Header>
        <Wrapper>
          <Content>
            <p>Sometimes I do cool stuf, sometimes I co-oprate with others to make cool stuf, and sometimes I admire cool stufs.</p>
            <WorkWrapper>
              <Work img="https://secureimg.stitcher.com/feedimagesplain328/210171.jpg">Jigsaw Podcast </Work>
              <Work img="https://sinatapodcast.com/photo.jpg">Sinata Podcast </Work>
            </WorkWrapper>
          </Content>
        </Wrapper>
      </Layout>
    );
  }
}
