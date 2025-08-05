import { Fragment } from 'react';

import LandingArticlesContainer from '@components/Articles/LandingArticles/LandingArticlesContainer';

import { BlogsArticlesTypes } from './types';

const BlogsArticles = ({ categories }: BlogsArticlesTypes) => {
  return (
    <div className="w-full flex flex-col items-center gap-32">
      {categories.map((category, index) => {
        if (category.articles.length === 0) {
          return <Fragment key={index} />;
        }

        return (
          <LandingArticlesContainer
            showAllArticlesLinkTo={`/category/${category.slug}`}
            data={category.articles}
            title={category.title}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default BlogsArticles;
