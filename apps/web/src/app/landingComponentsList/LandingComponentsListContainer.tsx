'use client';

import { LANDING_COMPONENTS } from '@components/pages/articleId/ArticleIdPageContainer/ArticleLandingComponents';

const LandingComponentsListContainer = () => {
  const list = Object.entries(LANDING_COMPONENTS);

  return (
    <div className="w-full flex flex-col items-center gap-20 px-4 py-10">
      {list.map((item, index) => {
        return (
          <div className="w-full max-w-[900px] border-2 rounded-2xl p-6" key={index}>
            <p className="text-left md:text-[20px] pb-4" dir="ltr">
              {`^^^${item[0].trim()}^^^`}
            </p>

            <div className="relative w-full h-fit overflow-hidden pointer-events-none">{item[1]}</div>
          </div>
        );
      })}
    </div>
  );
};

export default LandingComponentsListContainer;
