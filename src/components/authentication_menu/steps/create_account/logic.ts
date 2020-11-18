import { useState } from 'react';

import { errorLogger } from 'error_handlers/error_logger';
import { useCreateAccount } from 'hooks/authentication/create_account';

type Form = {
  email: string;
  password: string;
  confirmPassword: string;
};

const initialForm: Form = {
  email: '',
  password: '',
  confirmPassword: '',
};

type Errors = {
  email?: string;
  password?: string;
  confirmPassword?: string;
};

export const useLogic = () => {
  const [form, setForm] = useState<Form>(initialForm);
  const [errors, setErrors] = useState<Errors>({});

  const [submitErrorMessage, setSubmitErrorMessage] = useState<string>();
  const [isSubmiting, setIsSubmiting] = useState<boolean>(false);

  const { createAccount } = useCreateAccount();

  const submit = async () => {
    const formErrors = _validateForm(form);
    setErrors(formErrors);

    if (!_isErrorsEmpty(formErrors)) return;

    setIsSubmiting(true);

    const { email, password } = form;

    try {
      await createAccount(email, password);
      setIsSubmiting(false);
    } catch (error) {
      setIsSubmiting(false);
      setSubmitErrorMessage('Account creationg failed');
      errorLogger.log(error);
    }
  };

  const onFormChange = (key: string, value: string) =>
    setForm({
      ...form,
      [key]: value,
    });

  return {
    form,
    errors,
    submit,
    onFormChange,
    isCreatingAccount: isSubmiting,
    createAccountErrorMessage: submitErrorMessage,
  };
};

const _validateForm = (form: Form): Errors => {
  const { email, password, confirmPassword } = form;

  const error: Errors = {};

  if (!email) error.email = 'Email cannot be empty';

  if (!password) error.password = 'Password cannot be empty';
  else if (password.length < 6)
    error.password = 'Password must have at least 6 digits';

  if (password !== confirmPassword)
    error.confirmPassword = 'Password does not match';

  return error;
};

const _isErrorsEmpty = (errors: Errors): boolean => {
  return !errors.email && !errors.password && !errors.confirmPassword;
};
