import React, { useState } from "react";
import Button from "../../reusable/button/button";
import FormField from "../../reusable/input-field/input-field";
import inputValues from "../../layout/form/inputData";
import styled from "styled-components";

const StyledForm = styled.form`
  background-color: var(--clr-light-normal);
  border-radius: var(--soft-curve);
  padding: 1rem;
`;

const Form = () => {
  // Set initial Form State values to empty string
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // Handles the onchange event when users type in values
  const handleUpdate = (field, { target }) => {
    setFormData({
      ...formData,
      [field]: target.value,
    });
  };

  // Handles the action when user clicks on the form button and resets the form
  const handleSubmitForm = (event) => {
    event.preventDefault();
    alert(`Form Submission Details:
            ${formData.firstName}
            ${formData.lastName}
            ${formData.email}
            ${formData.password}
            `);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
    console.log("form is reset");
  };

  const handleButton = () => {
    console.log("Button was clicked");
  };

  return (
    <React.Fragment>
      <Button onClick={() => handleButton()}>
        <span className="content__btn">Try it free 7 days</span> then $20/mo.
        thereafter
      </Button>
      <StyledForm action="/index.html" method="get" onSubmit={handleSubmitForm}>
        <fieldset>
          <div className="flex__container">
            {inputValues.map((inputValues) => (
              <FormField
                key={inputValues.formId}
                type={inputValues.type}
                name={inputValues.name}
                placeholder={inputValues.placeholder}
                value={formData[inputValues.value]}
                onChange={(e) => handleUpdate(inputValues.name, e)}
                label={inputValues.label}
                aria-label={inputValues.aria_label}
                id={inputValues.id}
              />
            ))}
            <Button form_btn>Claim your free trial</Button>
          </div>
        </fieldset>

        <p className="content__body">
          By clicking the button, you are agreeing to our
          <strong className="content__terms"> Terms and Services</strong>
        </p>
      </StyledForm>
    </React.Fragment>
  );
};
export default Form;
