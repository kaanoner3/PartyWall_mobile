import {
  Environment,
  Network,
  QueryResponseCache,
  RecordSource,
  Store,
} from 'relay-runtime';

import { getSession } from '../utils/sessionUtils';

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
    let userData = await getSession();
    token = userData && JSON.parse(userData).token;
  } catch (err) {
    token = null;
  }
  if (token) {
    headers['Authorization'] = `${token}`;
  }

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
      if (response && response.errorName) {
        throw new Error(response.message);
      }
      return response;
    })
    .catch((err) => {
      throw new Error(err.message);
    });
}

const source = new RecordSource();
const store = new Store(source);
const network = Network.create(fetchQuery);

export default new Environment({
  network,
  store,
}) as any;
