import { HOST_URL } from '@constants/links.constants';
import type { MetadataRoute } from 'next';

import http from '@services/http';

const STATIC_URLS: string[] = [
  `${HOST_URL}`,
  `${HOST_URL}/men`,
  `${HOST_URL}/blogs`,
  `${HOST_URL}/sympathy`,
  `${HOST_URL}/landing/tracker`,
  `${HOST_URL}/landing/intention`,
  `${HOST_URL}/landing/pregnancy`,
  `${HOST_URL}/calendarOfPregnancy`,
  `${HOST_URL}/landing/breastfeeding`,
  `${HOST_URL}/landing/pregnancyLanding`,
];

const routeGenerator = (url: string) => {
  return { url };
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticsList = STATIC_URLS.map((item) => routeGenerator(item)) || [];

  try {
    const articlesRequest = await getArticlesData();
    const categoriesRequest = await getCategoriesData();

    const articlesList = articlesRequest.data?.urls.map((item) => routeGenerator(`${HOST_URL}/${item}`)) || [];

    const categoriesList =
      categoriesRequest.data?.slugs.map((item) => routeGenerator(`${HOST_URL}/category/${item}`)) || [];

    return [...articlesList, ...categoriesList, ...staticsList];
  } catch (error) {
    console.log(error);
  }

  return [...staticsList];
}

const getArticlesData = async () => {
  return await http<{ urls: string[] }>({
    method: 'GET',
    cache: 'no-store',
    url: 'support/article/articles/sitemap',
  });
};

const getCategoriesData = async () => {
  return await http<{ slugs: string[] }>({
    method: 'GET',
    cache: 'no-store',
    url: 'support/article/category/sitemap',
  });
};
