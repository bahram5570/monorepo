'use client';

import { COLORS_LIST } from '@theme/colors';

import BlogsSearch from '@components/Articles/Blogs/BlogsSearch';

const CategorySearch = () => {
  return (
    <div className="w-full border-[1px] rounded-xl mb-10" style={{ borderColor: COLORS_LIST.Surface_OutlineVariant }}>
      <BlogsSearch />
    </div>
  );
};

export default CategorySearch;
