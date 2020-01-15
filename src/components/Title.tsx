import React, { FC } from 'react';

const Title: FC = ({ children }) => {
  return <h3 className="relative mb-3">{children}</h3>;
};

export { Title };
