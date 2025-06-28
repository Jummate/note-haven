import { useLocation } from 'react-router-dom';

export const useCheckLocation = (param: string) => {
  const location = useLocation();
  return location.search.includes(param);
};
