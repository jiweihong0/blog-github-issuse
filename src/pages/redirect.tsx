import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { GetServerSidePropsContext } from 'next';

export default function RedirectPage({acessToken}: {acessToken: string}) {
    const router = useRouter();
    useEffect(()=>{
        localStorage.setItem('acessToken', acessToken);
        router.push('/issues');
    }, [acessToken, router]);
    return (
        <div>
            <Head>
                <title>blog-github-issuse Redirecting...</title>
            </Head>
            <h1>Redirecting...</h1>
        </div>
    )
}   

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { accessToken } = context.query;
    const formattedAcessToken = typeof (accessToken) === 'string' ? accessToken : '';
    if (formattedAcessToken === '') {
      return {
        redirect: {
          destination: '/issues',
          permanent: false,
        },
      };
    }

    return {
      props: {
        acessToken: formattedAcessToken,
      },
    };
  }