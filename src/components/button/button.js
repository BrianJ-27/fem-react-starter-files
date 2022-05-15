import React from "react";
import styled, { css } from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1rem;
  padding: 0.25rem 1rem;
  letter-spacing: 1.1px;
  font-weight: 500;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: palevioletred;
    color: white;
  }
  &:focus {
    outline: 1px dotted palevioletred;
  }

  ${(props) =>
    props.primary &&
    css`
      background: blue;
      color: white;
      &:hover {
        background-color: transparent;
        color: blue;
        border: 2px solid blue;
      }
    `};
`;

const CustomButton = () => {
  return <Button>This is my button</Button>;
};

export default CustomButton;
