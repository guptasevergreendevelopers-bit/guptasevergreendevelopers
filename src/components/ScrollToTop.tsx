import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Respect deep links: the browser cannot scroll to a hash target that React
    // has not rendered yet, and forcing the top here would override it.
    if (hash) {
      let attempts = 0;
      const scrollToHash = () => {
        const id = decodeURIComponent(hash.slice(1));
        if (!id) return;
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: 'instant' as ScrollBehavior, block: 'start' });
          return;
        }
        // Target may belong to a lazily loaded section; retry briefly.
        if (attempts < 20) {
          attempts += 1;
          requestAnimationFrame(scrollToHash);
        }
      };
      scrollToHash();
      return;
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' as ScrollBehavior,
    });
  }, [pathname, hash]);

  return null;
}