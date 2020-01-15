import React, { FC } from 'react';

interface ISubline {
  color?: 'white' | 'black';
}

const Subline: FC<ISubline> = ({ children, color = 'white' }) => {
  return (
    <div
      style={{ direction: 'ltr' }}
      className={`text-sm text-center ${color === 'black' ? 'text-foreText-heading' : 'text-foreText-white '}`}
    >
      {children}
    </div>
  );
};

export { Subline };
