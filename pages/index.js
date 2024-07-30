// pages/redirect.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Redirect = () => {
  const router = useRouter();

  useEffect(() => {
    const { pathname } = router;
    if (pathname === '/') {
      // Use window.location.href to redirect to a static HTML file
      window.location.href = '/index.html';
    }
  }, [router]);

  return null; // No need to render anything
};

export default Redirect;

