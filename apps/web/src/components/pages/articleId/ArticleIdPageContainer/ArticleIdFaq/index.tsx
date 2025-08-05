'use client';

import { COLORS_LIST } from '@theme/colors';

import { useState } from 'react';

import ArticleIdFaqGenerator from './ArticleIdFaqGenerator';
import { ArticleIdFaqTypes } from './types';

const ArticleIdFaq = ({ faqs }: ArticleIdFaqTypes) => {
  const initialData = faqs.length > 0 ? faqs[0].id : null;
  const [selectedItem, setSelectedItem] = useState(initialData);

  return (
    <>
      {selectedItem && (
        <div
          className="w-full flex flex-col gap-4 pb-5 border-b-[1px]"
          style={{ borderBottomColor: COLORS_LIST.Neutral_Surface }}
        >
          {faqs.map((item, index) => (
            <ArticleIdFaqGenerator
              {...item}
              key={index}
              selectedItem={selectedItem}
              selectedItemHandler={(id) => setSelectedItem(id)}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default ArticleIdFaq;
