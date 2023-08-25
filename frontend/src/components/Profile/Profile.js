import React, { useEffect, useContext, useState } from 'react';
import CurrentUserContext from '../CurrentUserContext/CurrentUserContext';
import useForm from '../../hooks/useForm';
import './Profile.css';
import Header from '../Header/Header';
import { EMAIL_VALIDATION, USERNAME_VALIDATION } from '../../utils/constants';

function Profile({ loggedIn, signOut, onUpdateUser, isLoading }) {
  const currentUser = useContext(CurrentUserContext);
  const { enteredValues, isErrors, handleChangeInput, isFormValid, resetForm } =
    useForm();
  const [isLastData, setIsLastData] = useState(false);

  function onSubmitUserForm(event) {
    event.preventDefault();
    onUpdateUser({
      name: enteredValues.name,
      email: enteredValues.email,
    });
  }

  useEffect(() => {
    if (
      currentUser.name === enteredValues.name &&
      currentUser.email === enteredValues.email
    ) {
      setIsLastData(true);
    } else {
      setIsLastData(false);
    }
  }, [enteredValues]);

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser);
    }
  }, [currentUser, resetForm]);
  return (
    <>
      <Header loggedIn={loggedIn} />
      <section className="profile">
        <h3 className="profile__title">Hello {currentUser.name}!</h3>
        <form
          id="form"
          className="profile__form"
          onSubmit={onSubmitUserForm}
          noValidate
        >
          <label className="profile__label">
            Name
            <input
              name="name"
              className="profile__input"
              id="name-input"
              type="text"
              minLength="2"
              maxLength="40"
              required
              placeholder="name"
              onChange={handleChangeInput}
              value={enteredValues.name || ''}
              pattern={USERNAME_VALIDATION}
            />
            <span className="profile__input-error">{isErrors.name}</span>
          </label>

          <div className="profile__border"></div>
          <label className="profile__label">
            Email
            <input
              name="email"
              className="profile__input"
              id="email-input"
              type="email"
              required
              placeholder="email"
              onChange={handleChangeInput}
              pattern={EMAIL_VALIDATION}
              value={enteredValues.email || ''}
            />
            <span className="profile__input-error">{isErrors.email}</span>
          </label>
          <button
            type="submit"
            disabled={!isFormValid ? true : false}
            className={
              !isFormValid || isLoading || isLastData
                ? 'profile__button-save form__button-save_inactive'
                : 'profile__button-save'
            }
          >
            Edit
          </button>
          <button type="button" className="profile__exit" onClick={signOut}>
            Exit
          </button>
        </form>
      </section>
    </>
  );
}

export default Profile;
