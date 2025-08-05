import Spinner from '@components/ui/Spinner';

const StoriesLoading = () => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center pointer-events-none select-none">
      <Spinner color="surface" />
    </div>
  );
};

export default StoriesLoading;
