import React, { FC } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button``;

const Button: FC = ({ children }) => {
  return (
    <StyledButton className=" bg-transparent hover:bg-blue-500 text-blue-200 font-semibold hover:text-white py-2 px-4 m-2 border border-blue-500 hover:border-transparent rounded">
      {children}
    </StyledButton>
  );
};

export { Button };
