import { useState } from 'react';

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

export const useForm = () => {
  const [form, setForm] = useState<Form>(initialForm);
  const [errors, setErrors] = useState<Errors>({});

  const submit = () => {
    const _errors = validateForm(form);
    setErrors(_errors);

    if (isErrorsEmpty(_errors)) {
      // TODO integrate this
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
  };
};

const validateForm = (form: Form): Errors => {
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

const isErrorsEmpty = (errors: Errors): boolean => {
  return !errors.email && !errors.password && !errors.confirmPassword;
};
