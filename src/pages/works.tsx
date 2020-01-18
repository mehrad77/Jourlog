import React, { FC } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import { Layout, Wrapper, Header, Content, SectionTitle } from '../components';
import config from '../../config/SiteConfig';
import PageProps from '../models/PageProps';
import Work from '../components/Work';

interface IWork {
  title: string;
  link: string;
  image: string;
  description: string;
}

const WorksPage: FC<PageProps> = () => {
  const data: IWork[] = require('../../static/works.json');
  return (
    <Layout>
      <Helmet title={`Contact | ${config.siteTitle.en}`} />
      <Header banner={'/assets/bg/1.jpg'}>
        <Link to="/">{config.siteTitle.en}</Link>
        <SectionTitle>Mehrad's Works</SectionTitle>
      </Header>
      <Wrapper>
        <Content>
          <p>Sometimes I do cool stuf, sometimes I co-oprate with others to make cool stuf, and sometimes I admire cool stufs.</p>
          <div className="flex flex-col my-4">
            {data.map(props => (
              <Work {...props} />
            ))}
          </div>
        </Content>
      </Wrapper>
    </Layout>
  );
};

export default WorksPage;
