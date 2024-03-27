import { useEffect, useState } from 'react';

const useAdBlockCheck = (list: unknown[], isLoading: boolean) => {
  const [listBlocked, setListBlocked] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isLoading && !list.length) setListBlocked(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [isLoading, list.length]);

  return listBlocked;
};

export default useAdBlockCheck;
