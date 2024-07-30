import { useEffect } from 'react';

const ProjectsRedirect = () => {
  useEffect(() => {
    window.location.href = '/projects.html'; // Redirect to the static HTML file
  }, []);

  return null; // No need to render anything
};

export default ProjectsRedirect;
