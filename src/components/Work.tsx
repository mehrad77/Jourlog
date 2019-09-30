import React from 'react';
import styled from 'styled-components';

export const Card: any = styled.figure`
  border-width: 1px 1px 1px 1px;
  border-color: rgba(232, 232, 232, 1);
  border-radius: 3;
  border-style: solid;
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.25); /* hover styles */
  display: inline-block;
  background: #fff;
  border-radius: 2px;
  transform: rotate(-10deg);
  transition: transform 0.8s;

  img {
    margin-bottom: 0px;
    min-height: 250px;
    max-height: 300px;
  }

  figcaption {
    text-align: center;
    font-size: 30px;
  }

  :nth-child(2) {
    transform: rotate(23deg);
    transition: transform 0.2s;
  }

  :nth-child(3) {
    transform: rotate(-2deg);
    transition: transform 0.2s;
  }

  :hover {
    transform: rotate(0deg);
    transition: transform 0.2s;
  }
`;

const Work = ({ img, children, link }: { img?: string; children?: any; link?: string }) => {
  return (
    <Card>
      <img src={img ? img : 'http://placehold.it/250x250.jpg'} />
      <figcaption>{children ? children : 'A TV I saw once'}</figcaption>
    </Card>
  );
};

export default Work;
