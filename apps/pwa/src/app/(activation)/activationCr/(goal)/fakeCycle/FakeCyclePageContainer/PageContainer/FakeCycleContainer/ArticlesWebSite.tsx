import { FAKE_CYCLE_FOOTER_HEIGTH } from './constants';

const ArticlesWebSite = () => {
  return (
    <div style={{ paddingBottom: FAKE_CYCLE_FOOTER_HEIGTH }}>
      <iframe className="h-fit min-h-[100dvh] w-full" src="https://impo.app/blogs" />
    </div>
  );
};

export default ArticlesWebSite;
