import React, { FC } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button``;

interface IButton {
  variant?: 'primary' | 'secondary';
}

const Button: FC<IButton> = ({ children, variant = 'primary' }) => {
  return <StyledButton className={`btn btn-${variant}`}>{children}</StyledButton>;
};

export { Button };
