import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  // <Container>
  <Container type="button" {...rest}>
    {children}
  </Container>
  // </Container>
);

export default Button;
