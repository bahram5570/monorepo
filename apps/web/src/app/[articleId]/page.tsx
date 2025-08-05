import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import ArticleIdPageContainer from '@components/pages/articleId/ArticleIdPageContainer';
import http from '@services/http';

import ArticleSchema from '../../schema/ArticleSchema';
import { handleUpdateArticleBody, handleUpdateArticleId } from './__utils__';
import { ArticleIdResponseTypes } from './types';

const getArticleData = async (id: string) => {
  return await http<ArticleIdResponseTypes>({
    method: 'GET',
    cache: 'no-store',
    url: `support/article/sp/published/${id}`,
  });
};

export async function generateMetadata({ params }: { params: { articleId: string } }): Promise<Metadata> {
  const { data, error } = await getArticleData(params.articleId);

  if (data) {
    return {
      title: data.title || '',
      robots: 'index, follow',
      description: data.meta || '',
      alternates: {
        canonical: `${HOST_URL}/${params.articleId}`,
      },
    };
  } else {
    return {
      title: error?.message,
    };
  }
}

const Article = async ({ params }: { params: { articleId: string } }) => {
  const id = handleUpdateArticleId(params.articleId);

  const { data } = await getArticleData(id);

  if (!data) {
    notFound();
  }

  return (
    <>
      <ArticleSchema data={data} />
      <ArticleIdPageContainer {...data} body={handleUpdateArticleBody(data.body)} articleId={id} />
    </>
  );
};

export default Article;
