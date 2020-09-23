import React from 'react';
import { StyledField, StyledButton } from '../styled';

const Button = ({ children, ...props }) => {
  return (
    <StyledField>
      <StyledButton {...props}>{children}</StyledButton>
    </StyledField>
  );
};

export default Button;
