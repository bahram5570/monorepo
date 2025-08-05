import { useState } from 'react';

const useSelectedDate = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const isOpenHandler = (b: boolean) => {
    setIsOpen(b);
  };

  const selectedDateHandler = () => {
    setSelectedDate(currentDate);
    isOpenHandler(false);
  };

  const currentDateHandler = (v: string) => {
    setCurrentDate(v);
  };

  return { currentDate, currentDateHandler, selectedDate, selectedDateHandler, isOpen, isOpenHandler };
};

export default useSelectedDate;
