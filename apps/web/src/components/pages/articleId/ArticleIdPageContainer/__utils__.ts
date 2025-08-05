import * as cheerio from 'cheerio';

import { createElement } from 'react';

import CtaBanner from '@components/CtaBanner';
import { ctaBannerListService } from '@services/ctaBannerServices';

import { ArticleSubjectListTypes } from './types';

const mapperList = [
  { name: 'between1M.', path: '/assets/images/betweenBanner' },
  { name: 'between2M.', path: '/assets/images/betweenBanner' },
  { name: 'between3M.', path: '/assets/images/betweenBanner' },
  { name: 'between4M.', path: '/assets/images/betweenBanner' },
  { name: 'between5M.', path: '/assets/images/betweenBanner' },
  { name: 'between6M.', path: '/assets/images/betweenBanner' },
  { name: 'between7M.', path: '/assets/images/betweenBanner' },
  { name: 'between8M.', path: '/assets/images/betweenBanner' },
  { name: 'between9M.', path: '/assets/images/betweenBanner' },
  { name: 'between10M.', path: '/assets/images/betweenBanner' },
  { name: 'between11M.', path: '/assets/images/betweenBanner' },
  { name: 'between12M.', path: '/assets/images/betweenBanner' },
  { name: 'between13M.', path: '/assets/images/betweenBanner' },
  { name: 'between14M.', path: '/assets/images/betweenBanner' },
  { name: 'between15M.', path: '/assets/images/betweenBanner' },
  { name: 'between16M.', path: '/assets/images/betweenBanner' },
  { name: 'between17M.', path: '/assets/images/betweenBanner' },
  { name: 'between18M.', path: '/assets/images/betweenBanner' },
  { name: 'between19M.', path: '/assets/images/betweenBanner' },
  { name: 'between1.', path: '/assets/images/betweenBanner' },
  { name: 'between2.', path: '/assets/images/betweenBanner' },
  { name: 'between3.', path: '/assets/images/betweenBanner' },
  { name: 'between4.', path: '/assets/images/betweenBanner' },
  { name: 'between5.', path: '/assets/images/betweenBanner' },
  { name: 'between6.', path: '/assets/images/betweenBanner' },
  { name: 'between7.', path: '/assets/images/betweenBanner' },
  { name: 'between8.', path: '/assets/images/betweenBanner' },
  { name: 'between9.', path: '/assets/images/betweenBanner' },
  { name: 'between10.', path: '/assets/images/betweenBanner' },
  { name: 'between11.', path: '/assets/images/betweenBanner' },
  { name: 'between12.', path: '/assets/images/betweenBanner' },
  { name: 'between13.', path: '/assets/images/betweenBanner' },
  { name: 'between14.', path: '/assets/images/betweenBanner' },
  { name: 'between15.', path: '/assets/images/betweenBanner' },
  { name: 'between16.', path: '/assets/images/betweenBanner' },
  { name: 'between17.', path: '/assets/images/betweenBanner' },
  { name: 'between18.', path: '/assets/images/betweenBanner' },
  { name: 'between19.', path: '/assets/images/betweenBanner' },

  { name: 'babyCheck.', path: '/assets/images/betweenBanner/new' },
  { name: 'babyCheck2.', path: '/assets/images/betweenBanner/new' },
  { name: 'bardari.', path: '/assets/images/betweenBanner/new' },
  { name: 'coverBgBanner.', path: '/assets/images/betweenBanner/new' },
  { name: 'coverBgBannerM.', path: '/assets/images/betweenBanner/new' },
  { name: 'eghdam.', path: '/assets/images/betweenBanner/new' },
  { name: 'eghdam2.', path: '/assets/images/betweenBanner/new' },
  { name: 'eghdam3.', path: '/assets/images/betweenBanner/new' },
  { name: 'eghdam4.', path: '/assets/images/betweenBanner/new' },
  { name: 'kit.', path: '/assets/images/betweenBanner/new' },
  { name: 'pishgiri.', path: '/assets/images/betweenBanner/new' },
  { name: 'pishgiri2.', path: '/assets/images/betweenBanner/new' },
  { name: 'pishgiri3.', path: '/assets/images/betweenBanner/new' },
  { name: 'sexTracker.', path: '/assets/images/betweenBanner/new' },
  { name: 'sexTracker2.', path: '/assets/images/betweenBanner/new' },
];

export const handleBodyUpdate = async (body: string) => {
  const { renderToString } = await import('react-dom/server');
  let result = body;

  // # Setting up old Cta
  mapperList.forEach((item) => {
    const regex = new RegExp(`src="(?!data:)[^"]*${item.name}[^"]*"`, 'g');
    result = result.replaceAll(regex, `src="${item.path}/${item.name}webp"`);
    result = result.replace(/\s*srcset\s*=\s*(['"])[^'"]*\1/g, '');
  });

  // # Setting up Cta banners
  const { ctaData } = await ctaBannerListService();

  if (ctaData) {
    const ctaRegex = /\*\*\*(.*?)\*\*\*/g; // # ***name***
    const matches = [...result.matchAll(ctaRegex)];

    for (const match of matches) {
      const targetName = `***${match[1].toLocaleLowerCase().trim()}***`;
      const selectedCta = ctaData.find((item) => item.name.toLocaleLowerCase().trim() === targetName);

      if (selectedCta) {
        const ctaElement = createElement(CtaBanner, { ...selectedCta });
        const ctaScript = renderToString(ctaElement);

        // # Select target with any kinds of tags
        const regexTargetName = targetName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const targetRegex = new RegExp(`<([a-zA-Z0-9]+)(\\s[^>]*)?>\\s*${regexTargetName}\\s*<\\/\\1>`, 'g');

        result = result.replace(targetRegex, ctaScript);
      }
    }
  }

  // # Remove Landing components IDs
  const landingRegex = /\^\^\^(.*?)\^\^\^/g; // # ^^^name^^^
  const landingMatches = [...result.matchAll(landingRegex)];

  for (const match of landingMatches) {
    const targetName = `^^^${match[1].trim()}^^^`;
    const regexTargetName = targetName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const targetRegex = new RegExp(`<([a-zA-Z0-9]+)(\\s[^>]*)?>\\s*${regexTargetName}\\s*<\\/\\1>`, 'g');

    result = result.replace(targetRegex, '');
  }

  // # Making subjects list
  let count = 1;
  const $ = cheerio.load(result);
  const articleSubjectList: ArticleSubjectListTypes = [];

  $('h2, h3').each((_, element) => {
    const title = $(element).text().trim();
    const id = `article-subject-${count}-id`;

    const isH2 = $(element).is('h2');
    const isH3 = $(element).is('h3');

    if (isH2) {
      articleSubjectList.push({ id, title, tagType: 'h2' });
    }

    if (isH3) {
      articleSubjectList.push({ id, title, tagType: 'h3' });
    }

    $(element).attr('id', id);
    count++;
  });

  return { updatedBody: $.html(), articleSubjectList };
};
