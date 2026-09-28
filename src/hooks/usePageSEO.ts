import { useEffect } from 'react';

interface PageSEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
}

export function usePageSEO({ title, description, canonicalPath = '' }: PageSEOProps) {
  useEffect(() => {
    // Update Title
    document.title = title;

    // Update Meta Description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    // Update Canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    const fullUrl = `https://guptasevergreendevelopers.com${canonicalPath}`;
    if (canonical) {
      canonical.setAttribute('href', fullUrl);
    }

    // Update OpenGraph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', fullUrl);

    // Update Twitter
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', title);

    const twitterDesc = document.querySelector('meta[property="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute('content', description);
  }, [title, description, canonicalPath]);
}
