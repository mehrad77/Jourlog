import React, { FC } from 'react';

interface IFooter {
  buildTime: string;
}

export const Footer: FC<IFooter> = ({ buildTime }) => {
  return (
    <footer className="footer p-4 text-center flex flex-wrap flex-col justify-center content-center">
      <div className="earth">
        <div className="mapWrapper">
          <img src="/assets/worldMapSimplified.svg" />
        </div>
        <div className="faceWrapper">
          <div className="eye left">
            <div className="whiteLeft" />
            <div className="whiteRight" />
          </div>
          <div className="eye right">
            <div className="whiteLeft" />
            <div className="whiteRight" />
          </div>
          <div className="blush left" />
          <div className="blush right" />
          <div className="mouth">
            <div className="tongue" />
          </div>
        </div>
        <div className="earthShadow" />
      </div>
      <div className="stars" />

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
          <img alt="Creative Commons License" src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png" />
        </a>
        <div>Last build: {buildTime}</div>
      </div>
    </footer>
  );
};
