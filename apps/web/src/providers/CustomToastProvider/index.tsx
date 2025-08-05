'use client';

import { COLORS_LIST } from '@theme/colors';
import { ToastContainer, toast } from 'react-toastify';

import { createContext } from 'react';

import CustomTypography from '@components/ui/CustomTypography';

import { CustomToastOptionTypes, CustomToastTypes } from './types';

export const CustomToastContext = createContext<CustomToastTypes>({ onToast: () => {} });

const CustomToastProvider = ({ children }: { children: React.ReactNode }) => {
  const toastHandler = ({ numbersMode = 'persian', duration = 3000, message, type }: CustomToastOptionTypes) => {
    const content = (
      <div className="flex items-center gap-2">
        <div className="w-[1px] h-7 block" style={{ backgroundColor: COLORS_LIST.Surface_OnSurfaceVariant }} />

        <CustomTypography color="White" fontSize="Lable_Small" numbersMode={numbersMode}>
          {message}
        </CustomTypography>
      </div>
    );

    toast[type](content, {
      rtl: true,
      theme: 'dark',
      closeButton: false,
      closeOnClick: true,
      autoClose: duration,
      position: 'top-right',
    });
  };

  return (
    <CustomToastContext.Provider value={{ onToast: toastHandler }}>
      <ToastContainer />
      <>{children}</>
    </CustomToastContext.Provider>
  );
};

export default CustomToastProvider;
