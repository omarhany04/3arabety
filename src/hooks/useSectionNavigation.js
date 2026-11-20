import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * Returns a handler that scrolls to a section of the home page.
 * When called from another page it navigates home first; the Home page then
 * performs the scroll once it has rendered (see `location.state.scrollTo`).
 */
const useSectionNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return useCallback(
    (sectionId) => (event) => {
      if (event) event.preventDefault();
      if (location.pathname === '/') {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/', { state: { scrollTo: sectionId } });
      }
    },
    [location.pathname, navigate]
  );
};

export default useSectionNavigation;
