'use client';

import { createContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import InfoIcon from '@assets/icons/infoIcon.svg';

import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { OptionTypes, ToastTypes } from './types';

export const ToastContext = createContext<ToastTypes>({ onToast: () => {} });

const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const { colors } = useTheme();

  const toastHandler = ({ message, duration, type = 'normal', icon = 'info', englishNumbers = false }: OptionTypes) => {
    const iconsList = { info: <InfoIcon className="w-5 h-auto" style={{ fill: colors.Yellow }} /> };
    const colorsList = {
      error: colors.Error_Error,
      success: colors.Success_Success,
      normal: colors.Surface_InverseSurface,
    };

    const content = (
      <div className="flex items-center gap-2">
        {iconsList[icon]}

        <div className="w-[1px] h-7 block" style={{ backgroundColor: colors.Surface_OnSurfaceVariant }} />

        <Typography toEnglishNumber={englishNumbers} color="White" scale="Body" size="Small">
          {message}
        </Typography>
      </div>
    );

    toast(content, {
      rtl: true,
      theme: 'dark',
      position: 'top-right',
      autoClose: duration || 3000,
      progressStyle: { backgroundColor: colors.Grey_600 },
      closeButton: false,
      closeOnClick: true,
      style: {
        backgroundColor: colorsList.normal,
        borderColor: colorsList[type],
        borderStyle: 'solid',
        borderRadius: '12px',
        borderWidth: '2px',
        margin: '32px',
      },
    });
  };

  return (
    <ToastContext.Provider value={{ onToast: toastHandler }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};

export default ToastProvider;
