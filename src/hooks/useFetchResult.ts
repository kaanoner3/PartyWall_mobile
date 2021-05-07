import { useEffect, useState } from 'react';

type Status = 'error' | 'loading' | 'success' | 'noData';

type FetchResult = {
  status: Status;
  payload?: any;
};

const useFetchResults = (error: any, data: any) => {
  const [result, setResult] = useState<FetchResult>({
    status: 'loading',
  });

  const calculateStatus = (): FetchResult => {
    if (error) {
      return {
        status: 'error',
        payload: error.message,
      };
    }
    if (data && data[Object.keys(data)[0]]) {
      return {
        status: 'success',
        payload: data,
      };
    }
    if (data && !data[Object.keys(data)[0]]) {
      return {
        status: 'noData',
      };
    }
    return {
      status: 'loading',
    };
  };

  useEffect(() => {
    setResult(calculateStatus());
  }, [error, data]);

  return result;
};

export default useFetchResults;
