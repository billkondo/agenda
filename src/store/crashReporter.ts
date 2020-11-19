export function crashReporter(errorHandler: any) {
  return (store: any) => (next: any) => async (action: any) => {
    try {
      await next(action);
    } catch (error) {
      errorHandler(error);
    }
  };
}
