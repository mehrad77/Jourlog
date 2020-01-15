import React, { FC } from 'react';

interface IWrapper {
  fullWidth?: boolean;
}

const Wrapper: FC<IWrapper> = ({ children, fullWidth }) => {
  return <div className={`flex flex-col my-0 mx-auto max ${fullWidth ? 'w-full p-0' : 'w-screen px-4 md:px-12 lg:px-24'}`}>{children}</div>;
};

export { Wrapper };
