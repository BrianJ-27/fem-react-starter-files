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
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: palevioletred;
    color: white;
  }
  &:focus,
  &:focus-visible {
    outline: 3px dotted black;
  }

  ${(props) =>
    props.primary &&
    css`
      background: blue;
      color: white;
      border: 2px solid blue;
      &:hover {
        background-color: transparent;
        color: blue;
        border: 2px solid blue;
      }
    `};
`;

const CustomButton = ({ children, handleButton }) => {
  return <Button onClick={() => handleButton()}> {children} </Button>;
};

export default CustomButton;
