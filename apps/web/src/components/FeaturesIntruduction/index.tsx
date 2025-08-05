import FeaturesIntruductionCardGenerator from './FeaturesIntruductionCardGenerator';
import FeaturesIntruductionTitle from './FeaturesIntruductionTitle';
import { FeaturesIntruductionTypes } from './types';

const FeaturesIntruduction = ({ mainTitle, list }: FeaturesIntruductionTypes) => {
  return (
    <section className="w-full flex flex-col items-center gap-6 md:gap-10 px-4">
      <FeaturesIntruductionTitle mainTitle={mainTitle} />

      {list.map((item, index) => (
        <FeaturesIntruductionCardGenerator
          key={index}
          image={item.image}
          title={item.title}
          isInverse={index % 2 === 0}
          description={item.description}
        />
      ))}
    </section>
  );
};

export default FeaturesIntruduction;
