import CustomImage from '@components/ui/CustomImage';

const TestOnlineWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="
                    sm:relative
                    w-full 
                    sm:min-h-[500px]
                    rounded-2xl 
                    px-4 
                    sm:px-6 
                    py-5 
                    sm:rounded-2xl 
                    sm:shadow-[0_0_8px_#00000022]
                    flex
                    flex-col
                    items-center
                    overflow-hidden
                "
    >
      <div
        className="
                    absolute 
                    -top-[200px] 
                    sm:-top-[250px] 
                    left-0 
                    right-0 
                    w-full 
                    h-[500px] 
                    pointer-events-auto 
                    opacity-70 
                    -z-10 
                    overflow-hidden 
                    sm:overflow-visible
                  "
      >
        <CustomImage src="/assets/images/coverHollow.png" alt="" fill={true} className="object-fill scale-150" />
      </div>

      <>{children}</>
    </div>
  );
};

export default TestOnlineWrapper;
