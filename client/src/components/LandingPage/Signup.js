import React, { useState } from 'react';

import { TitledForm, Input } from './index';

const Signup = ({ register }) => {

  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleRegister = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const email = formElements.email.value;
    const password = formElements.password.value;
    const confirmPassword = formElements.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: 'Passwords must match' });
      return;
    }
    await register({ username, email, password });
  };

  return (
    <TitledForm
      title="Create an account"
      submitFunction={handleRegister}
      buttonText="Create"
      titleMargin={16}
    >
      <Input
        label="Username"
        type="text"
      />
      <Input
        label="E-mail address"
        type="email"
        name="email"
      />
      <Input
        label="Password"
        type="password"
        minLength={6}
        errorText={formErrorMessage.confirmPassword}
      />
      <Input
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        minLength={6}
        errorText={formErrorMessage.confirmPassword}
        marginBottom={36}
      />
    </TitledForm>
  );
};

export default Signup;
