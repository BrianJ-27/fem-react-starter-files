import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  margin-bottom: 1.3rem;
  border: 1px solid var(--clr-text-normal);
  border-radius: var(--soft-curve);
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  padding-left: 30px;
  &::placeholder {
    font-weight: var(--fp-f-weight-very-bold);
  }
  &:focus-visible {
    outline: 1px solid var(--clr-accent-text);
  }
`;

const StyledLabel = styled.label`
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
`;

const InputField = ({ label, id, ...otherProps }) => {
  return (
    <div className="field__group">
      <StyledInput id={id} required {...otherProps} />
      {label ? <StyledLabel htmlFor={id}>{label}</StyledLabel> : null}
    </div>
  );
};

export default InputField;
