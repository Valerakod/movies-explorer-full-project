import React from 'react';
import '../Form/Form.css';
import Form from '../Form/Form';
import { EMAIL_VALIDATION } from '../../utils/constants';
import useForm from '../../hooks/useForm';

function Login({ onAuthorization, isLoading }) {
  const { enteredValues, isErrors, handleChangeInput, isFormValid } = useForm();
  // Form submit function
  function onSubmitUserForm(event) {
    event.preventDefault();
    // Вызов функции onAuthorization с введенными значениями полей формы
    onAuthorization({
      email: enteredValues.email,
      password: enteredValues.password,
    });
  }

  return (
    <Form
      title="Welcome!"
      buttonText="Sign in"
      question="Not registered yet?"
      linkText=" Registration"
      link="/signup"
      onSubmit={onSubmitUserForm}
      isDisabled={!isFormValid}
      isLoading={isLoading}
      noValidate
    >
      <label className="form__label">
        Email
        <input
          name="email"
          className="form__input"
          id="email-input"
          type="email"
          required
          placeholder="email"
          onChange={handleChangeInput}
          pattern={EMAIL_VALIDATION}
          value={enteredValues.email || ''}
        />
        <span className="form__input-error">{isErrors.email}</span>
      </label>
      <label className="form__label">
        Password
        <input
          name="password"
          className="form__input"
          id="password-input"
          type="password"
          required
          placeholder="password"
          onChange={handleChangeInput}
          value={enteredValues.password || ''}
          minLength="6"
          maxLength="12"
        />
        <span className="form__input-error">{isErrors.password}</span>
      </label>
    </Form>
  );
}

export default Login;
