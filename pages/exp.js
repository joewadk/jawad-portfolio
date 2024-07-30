import { useEffect } from 'react';

const ExperienceRedirect = () => {
  useEffect(() => {
    window.location.href = '/exp.html'; // Redirect to the static HTML file
  }, []);

  return null; // No need to render anything
};

export default ExperienceRedirect;
