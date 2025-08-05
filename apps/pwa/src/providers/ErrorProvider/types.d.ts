export type ErrorTypes = 'server';

export type ErrorContextTypes = {
  onError: (errorType: ErrorTypes) => void;
};
