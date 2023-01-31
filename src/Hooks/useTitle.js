import { useEffect } from 'react';

const useTitle = (title) => {
   useEffect(() => {
      document.title = `${title} - Faucets`;
   }, [title])
};

export default useTitle;