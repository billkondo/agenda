const ErrorLogger = () => {
  const log = (error: Error) => {
    console.log('LOG', error);
  };

  return { log };
};

export const errorLogger = ErrorLogger();
