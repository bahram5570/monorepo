import { BlogsResponseTypes } from '@app/blogs/types';
import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import CategoryPageContainer from '@components/pages/category/slug/CategoryPageContainer';
import http from '@services/http';

import CategorySchema from '../../../schema/CategorySchema';
import { CategoryResponseTypes, CategoryValidationTypes } from './types';

const getCategorydata = async (slug: string) => {
  return await http<CategoryResponseTypes>({
    method: 'GET',
    cache: 'no-store',
    url: `support/article/category/${slug}`,
  });
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { data, error } = await getCategorydata(params.slug);

  if (data) {
    return {
      title: data.title,
      description: 'category',
      robots: 'index, follow',
      alternates: {
        canonical: `${HOST_URL}/category/${params.slug}`,
      },
    };
  } else {
    return {
      title: error?.message,
    };
  }
}

const Category = async ({ params }: { params: { slug: string } }) => {
  const { data: categoryData } = await getCategorydata(params.slug);

  const { data: categoriesListData } = await http<BlogsResponseTypes>({
    method: 'GET',
    cache: 'no-store',
    url: 'support/article/category/1/100',
  });

  return (
    <>
      <CategorySchema id={params.slug} />
      <CategoryValidation categoriesListData={categoriesListData} categoryData={categoryData} />
    </>
  );
};

export default Category;

const CategoryValidation = async ({ categoriesListData, categoryData }: CategoryValidationTypes) => {
  if (categoryData && categoriesListData) {
    return <CategoryPageContainer categoryData={categoryData} categoriesList={categoriesListData.categories} />;
  }

  notFound();
};
