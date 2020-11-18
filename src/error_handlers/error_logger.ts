const ErrorLogger = () => {
  const log = (error: Error) => {
    console.log(error);
  };

  return { log };
};

export const errorLogger = ErrorLogger();
