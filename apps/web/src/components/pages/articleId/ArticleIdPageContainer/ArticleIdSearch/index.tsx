import { COLORS_LIST } from '@theme/colors';

import BlogsSearch from '@components/Articles/Blogs/BlogsSearch';

const ArticleIdSearch = () => {
  return (
    <div className="w-full border-[1px] rounded-xl" style={{ borderColor: COLORS_LIST.Surface_OutlineVariant }}>
      <BlogsSearch />
    </div>
  );
};

export default ArticleIdSearch;
