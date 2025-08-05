'use client';

import { createContext, useState } from 'react';

import ErrorPage from './ErrorPage';
import { ErrorContextTypes, ErrorTypes } from './types';

export const ErrorContext = createContext<ErrorContextTypes>({ onError: () => {} });

const ErrorProvider = ({ children }: { children: React.ReactNode }) => {
  const [errorType, setErrorType] = useState<ErrorTypes | null>(null);

  const errorHandler = (v: ErrorTypes) => {
    setErrorType(v);
  };

  return (
    <ErrorContext.Provider value={{ onError: errorHandler }}>
      <>
        {errorType && <ErrorPage />}
        {!errorType && children}
      </>
    </ErrorContext.Provider>
  );
};

export default ErrorProvider;
