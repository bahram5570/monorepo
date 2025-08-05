'use client';

import React, { useMemo } from 'react';

import { Dialog, Slide } from '@mui/material';

import styles from './styles.module.css';
import { CustomModalTypes } from './types';

const CustomModal = ({ children, isOpen, onClose, slideDirection, position = 'center' }: CustomModalTypes) => {
  const Transition = useMemo(
    () =>
      React.forwardRef((props: any, ref: any) => (
        <Slide
          ref={ref}
          {...props}
          direction={slideDirection || 'up'}
          className={`${position === 'center' ? '!items-center' : '!items-end'}`}
        />
      )),
    [position],
  );

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={onClose}
        className={styles.modal}
        TransitionComponent={Transition}
        sx={{ backdropFilter: 'blur(2px)' }}
      >
        <>{children}</>
      </Dialog>
    </>
  );
};

export default CustomModal;
