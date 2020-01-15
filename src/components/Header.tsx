import React, { FC } from 'react';
import styled from 'styled-components';
import config from '../../config/SiteConfig';

const HeaderWrapper: FC = styled.header`
  background: linear-gradient(-185deg, rgba(23, 23, 23, 0.6), rgba(104, 104, 104, 0.8)), url(${(props: any) => props.banner}) no-repeat;
  background-size: cover;
  ::after {
    background: transparent url(/assets/mask.svg) no-repeat bottom left;
    background-size: 101%;
    bottom: -2px;
    content: '';
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    width: 100%;
  }
`;

interface IHeader {
  children: any;
  banner?: string;
}

const Header: FC<IHeader> = ({ children, banner }) => {
  return (
    <HeaderWrapper className="bg-cover text-center relative pt-16 pb-24 lg:max-w-8xl lg:mx-auto" banner={banner || config.defaultBg}>
      <div className="Content">{children}</div>
    </HeaderWrapper>
  );
};

export { Header };
