import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from '../../config/Theme';
import { media } from '../utils/media';
import split from 'lodash/split';
import './layout.scss';

const GlobalStyle = createGlobalStyle`
  ::selection {
    color: ${theme.colors.bg};
    background: ${theme.colors.primary};
  }
  body {
    background: ${theme.colors.bg};
    color: ${theme.colors.grey.default};
    @media ${media.phone} {
      font-size: 14px;
    }
  }
  a {
    color: ${theme.colors.grey.dark};
    text-decoration: none;
    transition: all ${theme.transitions.normal};
  }
  a:hover {
    color: ${theme.colors.primary};
  }
  h1, h2, h3, h4 {
    color: ${theme.colors.grey.dark};
  }
  blockquote {
    font-style: italic;
    position: relative;
  }

  blockquote:before {
    content: "";
    position: absolute;
    background: ${theme.colors.primary};
    height: 100%;
    width: 6px;
    margin-left: -1.6rem;
  }
  label {
    margin-bottom: .5rem;
    color: ${theme.colors.grey.dark};
  }
  input, textarea {
    border-radius: .5rem;
    border: none;
    background: rgba(0, 0, 0, 0.05);
    padding: .25rem 1rem;
    &:focus {
      outline: none;
    }
  }
  .textRight {
    text-align:right;
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 1rem 0;
  span {
    font-size: 0.75rem;
  }
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  .item {
    flex: 0 0 auto;
    margin: 5px;
  }
`;

const CCImg = styled.img`
  margin: 0;
`;

export class Layout extends React.PureComponent<{}> {
  public render() {
    const { children } = this.props;

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
            <React.Fragment>
              <GlobalStyle />
              {children}
              <Footer>
                <div className="item">
                  <ul>
                    <li>
                      <a href="https://www.youtube.com/channel/UCvVVYLa5sDjX8W9OknMmxRQ">Youtube</a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/mehradrousta/">Instagram</a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/mehrad77/">Linkedin</a>
                    </li>
                    <li>
                      <a href="https://www.last.fm/user/mehrad77">Last.FM</a>
                    </li>
                    <li>
                      <a href="https://www.goodreads.com/mehrad77">Goodreads</a>
                    </li>
                    <li>
                      <a href="https://github.com/mehrad77">Github</a>
                    </li>
                    <li>
                      <a href="#">Medium</a>
                    </li>
                    <li>
                      <a href="https://virgool.io/@mehrad77">Virgool</a>
                    </li>
                    <li>
                      <a href="https://soundcloud.com/mehrad77">Soundcloud</a>
                    </li>
                    <li>
                      <a href="https://open.spotify.com/user/mehrad77?si=KVaWDYU_TNS6gxm6wGG4Sw">Spotify</a>
                    </li>
                    <li>
                      <a href="https://steamcommunity.com/id/mehrad77/">Steam</a>
                    </li>
                    {/* <li>
                      <a href="https://t.me/mehrad77/">
                        <i className="fab fa-telegram"></i> Telegram
                      </a>
                    </li> */}
                    {/* <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i> Twitter
                      </a>
                    </li> */}
                    <li>
                      <a href="mailto:mehrad77@gmail.com">Email</a>
                    </li>
                  </ul>
                </div>
                <div className="item">
                  <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">
                    <CCImg alt="Creative Commons License" src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png" />
                  </a>
                  <div>Last build: {data.site.buildTime}</div>
                </div>
              </Footer>
            </React.Fragment>
          </ThemeProvider>
        )}
      />
    );
  }
}
