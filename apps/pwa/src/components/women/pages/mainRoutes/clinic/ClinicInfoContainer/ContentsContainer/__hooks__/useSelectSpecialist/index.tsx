import { useState } from 'react';

import { SelectedDoctorHandlerTypes, UseSelectSpecialistProps } from './types';

const useSelectSpecialist = ({ dr }: UseSelectSpecialistProps) => {
  const [selectedDoctor, setSelectedDoctor] = useState(dr[0]);

  const selectedDoctorHandler: SelectedDoctorHandlerTypes = (id) => {
    const doctor = dr.find((item) => item.id === id) || dr[0];
    setSelectedDoctor(doctor);
  };

  return { selectedDoctor, selectedDoctorHandler };
};

export default useSelectSpecialist;
