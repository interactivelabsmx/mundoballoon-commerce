import type { GetServerSidePropsContext } from 'next';
import type { NextRouter } from 'next/router';

const getNextRouterFromCtx = (ctx: GetServerSidePropsContext): NextRouter => {
  const router: NextRouter = {
    route: ctx.resolvedUrl,
    pathname: ctx.resolvedUrl,
    basePath: '',
    asPath: '',
    query: ctx.query,
    defaultLocale: ctx.defaultLocale,
    locale: ctx.locale,
    locales: ctx.locales,
    push: async () => true,
    replace: async () => true,
    reload: () => undefined,
    back: () => undefined,
    forward: () => undefined,
    prefetch: async () => undefined,
    beforePopState: () => undefined,
    isReady: true,
    isFallback: false,
    isLocaleDomain: false,
    isPreview: false,
    events: {
      on: () => undefined,
      off: () => undefined,
      emit: () => undefined,
    },
  };

  return router;
};

export default getNextRouterFromCtx;
