import React, { VFC } from 'react';
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import useSound from 'use-sound';
import { DarkIcon, LightIcon } from './Icons';

const ThemeSwitch: VFC = () => {
  const [playLight] = useSound('/sounds/switch-off.mp3', {
    volume: 0.5
  });
  const [playDark] = useSound('/sounds/switch-on.mp3', {
    volume: 0.5,
    playbackRate: 0.7
  });

  return (
    <ThemeToggler>
      {({ toggleTheme, theme }) => {
        if (theme == null) {
          return null;
        }
        const isDarkMode = theme === "dark";

        return (
          <button
            aria-label="theme-switch"
            className="leading-none p-1"
            onClick={() => {
              isDarkMode ? playLight() : playDark();
              toggleTheme(isDarkMode ? "light" : "dark");
            }}
          >
            {isDarkMode ? <DarkIcon /> : <LightIcon />}
          </button>
        )
      }}
    </ThemeToggler>

  )
}

export default ThemeSwitch;
