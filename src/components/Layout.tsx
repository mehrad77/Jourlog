import React, { FC } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import theme from '../../config/Theme';
import { Footer } from './Footer';
import './layout.scss';
import '../css/tailwind.css';

export const Layout: FC = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            buildTime(formatString: "DD.MM.YYYY")
          }
        }
      `}
      render={data => (
        <ThemeProvider theme={theme}>
          {children}
          <Footer buildTime={data.site.buildTime} />
        </ThemeProvider>
      )}
    />
  );
};
