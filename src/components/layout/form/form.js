import React, { useState } from "react";
import Button from "../../reusable/button/button";
import FormField from "../../reusable/form-field/form-field";
import styled from "styled-components";

const StyledForm = styled.form`
  --clr-bg-color: hsl(147, 88%, 65%);
  background-color: var(--clr-bg-color);
  border-radius: var(--soft-curve);
  padding: 1rem;
`;

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleUpdate = (field, { target }) => {
    setFormData({
      ...formData,
      [field]: target.value,
    });
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    alert(`Form Submission Details:
            ${formData.firstName}
            ${formData.lastName}
            ${formData.email}
            ${formData.password}
            `);
  };

  const handleButton = () => {
    console.log("Button is clicked");
  };

  return (
    <React.Fragment>
      <StyledForm action="/index.html" method="get" onSubmit={handleSubmitForm}>
        <fieldset>
          <div className="flex__container">
            <FormField
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={(e) => handleUpdate("firstName", e)}
              placeholder="First Name"
              label="First Name"
              id="first_name"
            />

            <FormField
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={(e) => handleUpdate("lastName", e)}
              placeholder="Last Name"
              label="Last Name"
              id="last_name"
            />

            <FormField
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => handleUpdate("email", e)}
              placeholder="Email Address"
              label="Email Address"
              id="form_email"
            />

            <FormField
              type="password"
              name="password"
              value={formData.password}
              onChange={(e) => handleUpdate("password", e)}
              placeholder="Password"
              label="Password"
              id="form_password"
            />

            <Button form_btn handleButton={handleButton}>
              Claim your free trial
            </Button>
          </div>
        </fieldset>
      </StyledForm>
    </React.Fragment>
  );
};
export default Form;
