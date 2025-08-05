import { FOOTER_HEIGTH } from '@components/women/WomenFooter/constants';
import { useRouter } from 'next/navigation';

import SpecialistCardGenerator from '../../SpecialistCardGenerator';
import { SpecialistsListProps } from './types';

const SpecialistsList = ({ dr, selectedId, selectedDoctorHandler }: SpecialistsListProps) => {
  const router = useRouter();

  const selectHandler = (id: string) => {
    selectedDoctorHandler(id);
    router.back();
  };

  return (
    <div className="relative z-0" style={{ paddingBottom: FOOTER_HEIGTH + 16 }}>
      <div className="flex flex-col gap-2">
        {dr.map((item, index) => (
          <SpecialistCardGenerator
            selectedDoctorHandler={selectHandler}
            nezamNumber={item.nezamNumber}
            speciliaty={item.speciliaty}
            firstName={item.firstName}
            isOnline={item.isOnline}
            lastName={item.lastName}
            selectedId={selectedId}
            rrCount={item.rrCount}
            minTime={item.minTime}
            image={item.image}
            rate={item.rate}
            id={item.id}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default SpecialistsList;
