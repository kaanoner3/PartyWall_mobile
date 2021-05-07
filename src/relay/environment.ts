import {
  Environment,
  Network,
  QueryResponseCache,
  RecordSource,
  Store,
} from 'relay-runtime';

import { sessionUtils, saveSession } from '../utils/sessionUtils';

const oneMinute = 60 * 1000;
const cache = new QueryResponseCache({ size: 250, ttl: oneMinute });
export function clearCache(): void {
  cache.clear();
}
async function fetchQuery(
  operation: any,
  variables: any,
  cacheConfig: any
): Promise<any> {
  const queryID = operation.text;
  const isMutation = operation.operationKind === 'mutation';
  const isQuery = operation.operationKind === 'query';
  const forceFetch = cacheConfig && cacheConfig.force;
  const fromCache = cache.get(queryID, variables);

  if (isQuery && fromCache !== null && !forceFetch) {
    return fromCache;
  }

  let body;
  const headers: any = {
    Accept: 'application/json',
  };
  let token;
  try {
    token = await sessionUtils();
  } catch (err) {
    token = null;
  }
  if (token) {
    headers['Authorization'] = `JWT ${token}`;
  }
  console.log({ token });
  headers['Content-Type'] = 'application/json';
  body = JSON.stringify({
    query: operation.text,
    variables,
  });

  return fetch('http://localhost:8080/graphql', {
    method: 'POST',
    headers,
    body,
  })
    .then((response) => response.json())
    .then((response: any) => {
      if (isQuery && response.data) {
        cache.set(queryID, variables, response);
      }
      // Clear cache on mutations
      if (isMutation) {
        cache.clear();
      }

      if (response && response.errors) {
        throw new Error(response.errors[0].message);
      }

      if (response && response.data.tokenAuth) {
        const { token } = response.data;
        console.log({ token });
        saveSession(token);
      }
      return response;
    })
    .catch((err) => {
      if (['NoSession', 'SessionExpired'].includes(err.name)) {
        console.log('session expired');
      }
      throw err;
    });
}

const source = new RecordSource();
const store = new Store(source);
const network = Network.create(fetchQuery);

export default new Environment({
  network,
  store,
}) as any;
