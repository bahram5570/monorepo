'use server';

import Footer from './Footer';
import Header from './Header';
import { HeaderFooterContainerTypes } from './types';

const HeaderFooterContainer = ({ children, className, isArticlePage, hasFooterLink }: HeaderFooterContainerTypes) => {
  return (
    <>
      <Header />

      <div className={`relative w-full max-w-full min-h-[100dvh] pb-[200px] md:pb-[16px] ${className}`}>
        <main className="w-full flex flex-col items-center">
          <>{children}</>
        </main>

        <Footer hasFooterLink={hasFooterLink} isArticlePage={isArticlePage} />
      </div>
    </>
  );
};

export default HeaderFooterContainer;
