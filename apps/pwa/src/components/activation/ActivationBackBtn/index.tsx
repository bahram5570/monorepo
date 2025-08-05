import BackButton from '@components/ui/BackButton';

const ActivationBackBtn = () => {
  return (
    <div className="absolute top-4 right-4 w-12 h-12 flex justify-center items-center z-20 ">
      <BackButton variant="text" color="outline" />
    </div>
  );
};

export default ActivationBackBtn;
