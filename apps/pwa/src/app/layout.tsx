import './globals.css';

import { getCultureCookie } from '@actions/cookie.actions';
import { MAX_SCREEN_WIDTH, PORTAL_ID } from '@constants/app.constants';
import CultureProvider from '@providers/CultureProvider';
import ErrorProvider from '@providers/ErrorProvider';
import ModalsQueryParamsProvider from '@providers/ModalsQueryParamsProvider';
import OperatingSystemProvider from '@providers/OperatingSystemProvider';
import PageNavigationProvider from '@providers/PageNavigationProvider';
import PreviewImageProvider from '@providers/PreviewImageProvider';
import ReactQueryProvider from '@providers/ReactQueryProvider';
import RouteSequenceProvider from '@providers/RouteSequenceProvider';
import ScrollToTopProvider from '@providers/ScrollToTopProvider';
import ServiceWorkerProvider from '@providers/ServiceWorkerProvider';
import ThemeModeProvider from '@providers/ThemeModeProvider';
import ToastProvider from '@providers/ToastProvider';
import WidgetActionsProvider from '@providers/WidgetActionsProvider';
import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';

export const metadata: Metadata = {
  title: 'ایمپو',
  description: 'ایمپو',
};

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 1,
  width: 'device-width',
};

const YekanBakhVF = localFont({
  display: 'swap',
  src: '../../public/assets/shared/fonts/YekanBakh-VF.ttf',
});

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const cultureCookie = await getCultureCookie();

  return (
    <html lang="fa" className={YekanBakhVF.className}>
      <head>
        {/* <Script>
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PPTJBP3H');
          `}
        </Script>

        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-8W7DSYHFVP" />

        <Script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8W7DSYHFVP');
          `}
        </Script> */}
      </head>

      <body style={{ maxWidth: MAX_SCREEN_WIDTH, width: '100%', height: '100dvh', margin: 'auto' }}>
        {/* <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PPTJBP3H"
            style={{ display: 'none', visibility: 'hidden' }}
            height="0"
            width="0"
          />
        </noscript> */}

        <ScrollToTopProvider />

        <OperatingSystemProvider>
          <CultureProvider defaultValues={cultureCookie}>
            <ThemeModeProvider>
              <ReactQueryProvider>
                <ErrorProvider>
                  <ToastProvider>
                    <PageNavigationProvider>
                      <RouteSequenceProvider>
                        <WidgetActionsProvider>
                          <ServiceWorkerProvider>
                            <>
                              <ModalsQueryParamsProvider />
                              <PreviewImageProvider />

                              <div id={PORTAL_ID} />
                              <>{children}</>
                            </>
                          </ServiceWorkerProvider>
                        </WidgetActionsProvider>
                      </RouteSequenceProvider>
                    </PageNavigationProvider>
                  </ToastProvider>
                </ErrorProvider>
              </ReactQueryProvider>
            </ThemeModeProvider>
          </CultureProvider>
        </OperatingSystemProvider>
      </body>
    </html>
  );
};

export default RootLayout;
