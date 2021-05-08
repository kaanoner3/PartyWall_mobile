import { useEffect, useState } from 'react';

type Status = 'error' | 'loading' | 'success';

type FetchResult = {
  status: Status;
  payload?: any;
};

export function useFetchResult<T>(error: any, data: any) {
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
    return {
      status: 'loading',
      payload: undefined,
    };
  };

  useEffect(() => {
    setResult(calculateStatus);
  }, [error, data]);

  return result;
}
