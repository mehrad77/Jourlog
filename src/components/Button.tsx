import React, { FC } from 'react';

interface IButton {
  variant?: 'primary' | 'secondary';
}

const Button: FC<IButton> = ({ children, variant = 'primary' }) => {
  return <button className={`btn btn-${variant}`}>{children}</button>;
};

export { Button };
