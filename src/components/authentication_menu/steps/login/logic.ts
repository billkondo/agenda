import { useState } from 'react';

import { useLogin } from 'store/authentication';

type Form = {
  email: string;
  password: string;
};

type Errors = {
  email?: string;
  password?: string;
};

export const useLogic = () => {
  const { isSigningIn, signInErrorMessage, login } = useLogin();

  const [form, setForm] = useState<Form>({ email: '', password: '' });
  const [errors, setErrors] = useState<Errors>({});

  const onFormChange = (key: string, value: string) =>
    setForm({ ...form, [key]: value });

  const submit = () => {
    const formErrors = _validateForm(form);
    setErrors(formErrors);

    if (!_isFormValid(formErrors)) return;

    const { email, password } = form;
    login(email, password);
  };

  return {
    onFormChange,
    form,
    errors,
    submit,
    isSigningIn,
    signInErrorMessage,
  };
};

const _validateForm = (form: Form): Errors => {
  const errors: Errors = {};

  if (!form.email) errors.email = 'Email is empty';
  if (!form.password) errors.password = 'Password is empty';

  return errors;
};

const _isFormValid = (error: Errors): boolean => {
  return !error.email && !error.password;
};
