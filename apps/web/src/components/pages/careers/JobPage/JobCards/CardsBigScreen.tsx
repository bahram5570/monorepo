import { Fragment } from 'react';

import { CardsBigScreenTypes } from './types';

const CardsBigScreen = ({ list }: CardsBigScreenTypes) => {
  return (
    <div className="w-full grid grid-cols-4 gap-8">
      {list.map((item, index) => (
        <Fragment key={index}>{item}</Fragment>
      ))}
    </div>
  );
};

export default CardsBigScreen;
