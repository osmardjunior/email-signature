import React from 'react';
import { StyledField, StyledButton } from '../styled';

const Button = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <StyledField>
      <StyledButton ref={ref} {...props}>{children}</StyledButton>
    </StyledField>
  );
});

export default Button;
