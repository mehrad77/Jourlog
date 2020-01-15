import React, { FC, useState } from 'react';
import styled from 'styled-components';

const getRandomColorPalette = (): string[] => {
  const colors = [
    ['#752e22', '#8e3829', '#984a3c'],
    ['#69102d', '#801336', '#c72c41'],
    ['#9b7519', '#d5a021', '#dcb149'],
    ['#bc9572', '#e5b58b', '#e9c2a0'],
    ['#c4cbaa', '#eff7cf', '#f0f7d3'],
    ['#a18136', '#dcb149', '#e5c67a'],
    ['#83873c', '#999d46', '#afb351'],
    ['#516627', '#6f8c35', '#89a059'],
    ['#5b7953', '#67885e', '#729668'],
    ['#285238', '#138a36', '#289448'],
    ['#053225', '#1b4438', '#32574c'],
    ['#016683', '#01baef', '#18c0f0'],
    ['#0d3f60', '#0f4c75', '#245c81'],
    ['#444165', '#716da9', '#938fc5'],
    ['#53397c', '#654597', '#7355a0'],
    ['#2c0e37', '#3f2349', '#52395b'],
    ['#455358', '#506167', '#5b6f76'],
    ['#13151f', '#161925', '#2b2d38'],
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const StyledSVGLogo = styled.svg<{ randomColorPalette: string[] }>`
  width: 100%;
  path {
    animation: loading-spinner 5s cubic-bezier(0.79, 0.14, 0.15, 0.86) infinite;
    transform-origin: center;
    &.svgJDot {
      transform-origin: center;
      animation-delay: 0s;
    }
    &.svgJ {
      transform-origin: center;
      animation-delay: -3.4s;
    }
    &.svgO {
      transform-origin: center;
      animation-delay: -2.6s;
    }
    &.svgU {
      transform-origin: center;
      animation-delay: -9.1s;
    }
    &.svgR {
      transform-origin: center;
      animation-delay: -1.1s;
    }
    &.svgL {
      transform-origin: center;
      animation-delay: -5.9s;
    }
    &.svgO2 {
      transform-origin: center;
      animation-delay: -4.3s;
    }
    &.svgG {
      transform-origin: center;
      animation-delay: -2.8s;
    }
  }

  @keyframes loading-spinner {
    0% {
      transform: scale(1);
      fill: ${props => props.randomColorPalette[0]};
    }
    30% {
      fill: ${props => props.randomColorPalette[1]};
      transform: scale(1.05);
    }
    60% {
      fill: ${props => props.randomColorPalette[1]};
      transform: scale(1.1);
    }
    90% {
      fill: ${props => props.randomColorPalette[2]};
      transform: scale(1.02);
    }
    100% {
      fill: ${props => props.randomColorPalette[0]};
      transform: scale(1);
    }
  }
`;

const Logo: FC = () => {
  const [randomColorPalette, setRandomColorPalette] = useState(getRandomColorPalette());
  const clickHandler = () => {
    setRandomColorPalette(getRandomColorPalette());
  };
  return (
    <StyledSVGLogo
      xmlns="http://www.w3.org/2000/svg"
      width="800"
      height="160"
      viewBox="-30 -30 750 300"
      shape-rendering="geometricPrecision"
      text-rendering="geometricPrecision"
      image-rendering="optimizeQuality"
      fill-rule="evenodd"
      clip-rule="evenodd"
      randomColorPalette={randomColorPalette}
      onClick={clickHandler}
    >
      <g id="Layer_x0020_1">
        <path
          className="svgJDot"
          d="M115.61 0c-10.53,0 -21.05,0 -31.57,0 -4.34,0 -7.89,3.55 -7.89,7.89l0 6.91c13.15,0 26.3,0 39.46,0l0 -14.8z"
        />
        <path
          className="svgJ"
          d="M76.15 47.35l-37.49 0 0 -13.81c0,-3.25 2.66,-5.92 5.92,-5.92l71.03 0 0 82.91c0,5.9 -4.82,10.85 -10.86,10.85l-85.02 0 -19.73 0 0 -9.87c0,-10.85 8.88,-19.73 19.73,-19.73l56.42 0 0 -44.43z"
        />
        <path
          className="svgO"
          d="M129.93 27.62c17.75,0 35.51,0 53.27,0 16.28,0 29.6,13.32 29.6,29.6l0 19.76c0,2.71 -2.23,4.94 -4.94,4.94 -17.75,0 -35.51,0 -53.27,0 -16.27,0 -29.6,-13.32 -29.6,-29.6l0 -19.76c0,-2.72 2.22,-4.94 4.94,-4.94zm46.36 39.5l0 -24.7 -14.79 0 0 24.7 14.79 0z"
        />
        <path
          className="svgU"
          d="M227.12 27.62l34.52 0 0 39.5 14.8 0 0 -39.5 32.56 0 0 54.3c-22.36,0 -44.72,0 -67.09,0 -10.85,0 -19.73,-8.88 -19.73,-19.73l0 -29.63c0,-2.72 2.22,-4.94 4.94,-4.94z"
        />
        <path
          className="svgR"
          d="M406.19 50.92l-33.54 0 0 -8.5 -14.8 0 0 39.5 -39.46 0 0 -46.4c0,-4.35 3.55,-7.9 7.89,-7.9 26.63,0 53.27,0 79.91,0l0 23.3z"
        />
        <path
          className="svgL"
          d="M415.57 14.8l-29.59 0 0 -14.8c23.02,0 46.04,0 69.06,0 0,31.25 0,50.66 0,81.92l-39.47 0c0,-26.32 0,-40.8 0,-67.12z"
        />
        <path
          className="svgO2"
          d="M469.36 27.62c17.75,0 35.51,0 53.27,0 16.28,0 29.6,13.32 29.6,29.6l0 19.76c0,2.71 -2.23,4.94 -4.94,4.94 -17.75,0 -35.51,0 -53.27,0 -16.28,0 -29.6,-13.32 -29.6,-29.6l0 -19.76c0,-2.72 2.22,-4.94 4.94,-4.94zm46.36 39.5l0 -24.7 -14.79 0 0 24.7 14.79 0z"
        />
        <path
          className="svgG"
          d="M617.18 81.92c-18.52,0 -37.04,0 -55.57,0l0 -49.36c0,-2.72 2.22,-4.94 4.94,-4.94 34.96,0 69.93,0 104.89,0 0,31.25 0,62.51 0,93.76l-109.83 0 -19.73 0 0 -9.87c0,-10.85 8.88,-19.73 19.73,-19.73l70.37 0 0 -44.43 -30.9 0 0 14.84 16.1 0 0 19.73z"
        />
      </g>
    </StyledSVGLogo>
  );
};

export default Logo;
