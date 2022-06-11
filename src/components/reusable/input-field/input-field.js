import React from "react";
import styled, { css } from "styled-components";

const StyledInput = styled.input`
  margin-bottom: 1.3rem;
  border: 1px solid var(--clr-text-color);
  border-radius: var(--curved-radius);
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  padding-left: 20px;
  &::placeholder {
    font-weight: var(--fp-weight-main);
  }
  &:focus-visible {
    outline: 1px solid var(--clr-text-color);
  }
`;

const StyledLabel = styled.label`
  padding: 8px;
  ${(props) =>
    props.sr_only &&
    css`
      /*Hide label but make it accessible for screen readers*/
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;
      @media only screen and (min-width: 768px) {
        padding: 2rem;
      }
    `};
`;

const InputField = ({ label, id, ...otherProps }) => {
  return (
    <div className="field__group">
      {label ? (
        <StyledLabel sr_only htmlFor={id}>
          {label}
        </StyledLabel>
      ) : null}
      <StyledInput id={id} required {...otherProps} />
    </div>
  );
};

export default InputField;
