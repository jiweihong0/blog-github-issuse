import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function useAccessToken() {
  const router = useRouter();
  const [accessToken, setaccessToken] = useState<string>();

  useEffect(() => {
    const formattedAcessToken = localStorage.getItem('accessToken') ?? '';
    if (formattedAcessToken === '' && router.pathname !== '/signup' && router.pathname !== '/redirect') {
      router.push('/signup');
    }
    setaccessToken(formattedAcessToken);
  }, [router]);

  return accessToken;
}