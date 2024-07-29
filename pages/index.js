// pages/redirect.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Redirect = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the public/index.html file
    router.push('/index.html');
  }, []);

  return null; // No need to render anything
};

export default Redirect;
