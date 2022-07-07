import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getAuth, UserRecord } from 'firebase-admin/auth';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { parseCookies, destroyCookie } from 'nookies';
import { cleanObject, FI } from './utils';

type IGetServerSideProps<P> = (
  ctx: GetServerSidePropsContext,
  user?: Partial<UserRecord> | null
) => Promise<GetServerSidePropsResult<P>>;

interface WithAuthServerSidePropsOptions {
  authorize?: boolean;
}

interface WithAuthServerProps<T> {
  getServerSideProps?: IGetServerSideProps<T>;
  options?: WithAuthServerSidePropsOptions;
}

export interface WithAuthServerResult {
  user?: Partial<UserRecord> | null;
}

export default function withAuthServer<P extends WithAuthServerResult>({
  getServerSideProps,
  options,
}: WithAuthServerProps<P>) {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    if (getApps().length < 1) {
      initializeApp({
        credential: cert(JSON.parse(process.env.FIREBASE_PRIVATE_KEY || '{}')),
        projectId: 'mundoballoon-dev',
      });
    }

    const { req } = ctx;
    const cookies = parseCookies({ req });
    const fi = cookies[FI];
    const auth = getAuth();
    let userRecord: UserRecord | null = null;

    // No authcookie and not allow all (login page allows all)
    if (!fi && options?.authorize)
      return { redirect: { destination: '/login', permanent: false } };

    if (fi) {
      try {
        const decodedIdToken = await auth.verifyIdToken(cookies[FI]);
        userRecord = await auth.getUser(decodedIdToken.uid);
      } catch (e) {
        destroyCookie(ctx, FI);
        return { redirect: { destination: '/login', permanent: false } };
      }
    }

    const user: Partial<UserRecord> | null = cleanObject(userRecord);
    if (getServerSideProps) {
      const result = await getServerSideProps(ctx, user);
      if ('props' in result) return { props: { ...result.props, user } as P };
      if ('redirect' in result) return { redirect: { ...result.redirect } };
      if ('notFound' in result) return { notFound: result.notFound };
    }

    return { props: { user } as P };
  };
}
