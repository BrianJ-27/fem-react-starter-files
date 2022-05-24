import React from "react";
import styled, { css } from "styled-components";

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

const FormField = ({ label, id, ...otherProps }) => {
  return (
    <div className="group">
      {label ? <StyledLabel htmlFor={id}> {label} </StyledLabel> : null}
      <StyledInput required {...otherProps} />
    </div>
  );
};

export default FormField;
