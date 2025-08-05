import CustomImage from '@components/ui/CustomImage';
import Spinner from '@components/ui/Spinner';
import Typography from '@components/ui/Typography';

import BackButton from './BackButton';
import { ShareExperienceTopicModalContainerLayoutPropsTypes } from './type';

const ShareExperienceTopicModalContainerLayout = ({
  children,
  coverImage,
  scrolled,
  topicName,
  isLoading,
  bio,
}: ShareExperienceTopicModalContainerLayoutPropsTypes) => {
  return (
    <div className="relative h-screen overflow-hidden">
      <div
        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
          scrolled ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="relative">
          {!isLoading && (
            <>
              <CustomImage src={coverImage} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 flex justify-end items-center py-4 px-4">
                {!scrolled && (
                  <div className="flex flex-col justify-end items-end">
                    <Typography scale="Title" size="Medium" color="White" className="!z-10">
                      {topicName}
                    </Typography>
                    <Typography scale="Body" size="Large" color="White" className="!z-10">
                      {bio}
                    </Typography>
                  </div>
                )}
              </div>
            </>
          )}

          {isLoading && (
            <div className="absolute left-0 right-0 -bottom-60 w-full flex justify-center">
              <Spinner color="outline" width={40} />
            </div>
          )}
        </div>
      </div>

      <div className="relative z-10">
        <div
          className={`sticky flex justify-end items-center top-0 z-20 p-4 transition-all duration-300 ease-in-out ${
            scrolled ? 'bg-white' : 'bg-transparent'
          }`}
        >
          <BackButton />
        </div>

        {children}
      </div>
    </div>
  );
};

export default ShareExperienceTopicModalContainerLayout;
