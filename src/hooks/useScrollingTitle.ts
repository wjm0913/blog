import { useState, useEffect } from 'react';

export function useScrollingTitle(baseTitle: string, interval: number = 200) {
  const [title, setTitle] = useState(baseTitle);

  useEffect(() => {
    let position = 0;
    const titleLength = baseTitle.length;

    const scrollTitle = () => {
      position = (position + 1) % titleLength;
      const scrolledTitle = baseTitle.slice(position) + baseTitle.slice(0, position);
      setTitle(scrolledTitle);
      document.title = scrolledTitle;
    };

    const intervalId = setInterval(scrollTitle, interval);

    return () => clearInterval(intervalId);
  }, [baseTitle, interval]);

  return title;
}
