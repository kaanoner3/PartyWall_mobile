import React, {
  createContext,
  useEffect,
  FC,
  useState,
  Dispatch,
  SetStateAction,
  ReactChild,
  useContext,
} from 'react';
import useAsyncStorage from '../hooks/useAsyncStorage';
import CREATE_ITEM_MUTATION, {
  relayCreateItemMutation,
  relayCreateItemMutationResponse,
} from '../__generated__/relayCreateItemMutation.graphql';
import REMOVE_ITEM, {
  relayRemoveItemMutation,
  relayRemoveItemMutationResponse,
} from '../__generated__/relayRemoveItemMutation.graphql';
import { STORE_OR_NETWORK, useMutation, useQuery } from 'relay-hooks/lib';
import { AuthenticationContext } from './AuthenticationProvider';
import USER_ITEMS_QUERY, {
  relayUserItemsQuery,
} from '../__generated__/relayUserItemsQuery.graphql';
import { useFetchResult } from '../hooks/useFetchResult';
import ALL_ITEMS_QUERY, {
  relayAllItemsQuery,
} from '../__generated__/relayAllItemsQuery.graphql';

interface ItemProviderProps {
  children: ReactChild;
}
interface ItemInputData {
  name: string;
  quantity: number;
  price: number;
  volume: number | null;
  weight: number | null;
  description: string | null;
  categoryId: number;
}

interface AuthContextType {
  itemData: any;
  allItems: ItemType[];
  userItems: ItemType[];
  itemMutationInput: ItemInputData;
  setItemMutationInput: Dispatch<SetStateAction<ItemInputData>>;
  setWillRemoveItemId: Dispatch<SetStateAction<string>>;
  setShouldCreateItem: Dispatch<SetStateAction<boolean>>;
}
const initialItemInputData = {
  name: '',
  price: 0,
  quantity: 0,
  volume: null,
  weight: null,
  description: null,
  categoryId: 0,
};
const ItemContext = createContext<AuthContextType>({
  itemData: {},
  allItems: [],
  userItems: [],
  itemMutationInput: initialItemInputData,
  setItemMutationInput: () => {},
  setWillRemoveItemId: () => {},
  setShouldCreateItem: () => {},
});

const ItemProvider: FC<ItemProviderProps> = ({ children }) => {
  const [itemMutationInput, setItemMutationInput] = useState<ItemInputData>(
    initialItemInputData
  );
  const [shouldCreateItem, setShouldCreateItem] = useState(false);
  const [myItems, setMyItems] = useState<any>([]);
  const [allItems, setAllItems] = useState<ItemType[]>([]);
  const [willRemoveItemId, setWillRemoveItemId] = useState<string>('');
  const { userData } = useContext(AuthenticationContext);
  const userItemsQueryResult = useQuery<relayUserItemsQuery>(
    USER_ITEMS_QUERY,
    {
      userId: userData && userData.userId,
    },
    { fetchPolicy: STORE_OR_NETWORK, skip: userData === null }
  );

  const userItemsResult = useFetchResult(
    userItemsQueryResult.error,
    userItemsQueryResult.data
  );
  const allItemsQueryResult = useQuery<relayAllItemsQuery>(ALL_ITEMS_QUERY, {
    fetchPolicy: STORE_OR_NETWORK,
  });
  const allItemsResult = useFetchResult(
    allItemsQueryResult.error,
    allItemsQueryResult.data
  );

  useEffect(() => {
    if (
      allItemsResult.status === 'success' &&
      allItemsResult.payload.itemQuery?.allItems.length > 0
    ) {
      setAllItems(allItemsResult.payload.itemQuery.allItems);
    }
  }, [allItemsResult.payload]);

  useEffect(() => {
    if (
      userItemsResult.payload &&
      userItemsResult.payload.userQuery?.person?.items
    ) {
      const items = userItemsResult.payload.userQuery?.person?.items.edges.map(
        (item: any) => {
          return item.node;
        }
      );
      setMyItems(items);
    }
  }, [userItemsResult.payload]);

  const [createItem] = useMutation<relayCreateItemMutation>(
    CREATE_ITEM_MUTATION,
    {
      onError: (err: any) => {},
      onCompleted: (res: relayCreateItemMutationResponse) => {},
    }
  );

  const [removeItem] = useMutation<relayRemoveItemMutation>(REMOVE_ITEM, {
    onError: (err: any) => {},
    onCompleted: (res: relayRemoveItemMutationResponse) => {
      setWillRemoveItemId('');
      userItemsQueryResult.retry({ force: true });
      allItemsQueryResult.retry({ force: true });
    },
  });
  useEffect(() => {
    if (willRemoveItemId !== '') {
      removeItem({
        variables: {
          input: {
            id: willRemoveItemId,
          },
        },
      });
    }
  }, [willRemoveItemId]);
  useEffect(() => {
    const {
      name,
      price,
      quantity,
      weight,
      volume,
      description,
      categoryId,
    } = itemMutationInput;
    if (shouldCreateItem) {
      let attributes = {};

      if (categoryId === 0) {
        attributes = { weight, description };
      } else {
        attributes = { volume };
      }
      createItem({
        variables: {
          input: {
            userId: userData.userId,
            categoryId,
            name,
            price,
            quantity,
            attributes,
          },
        },
        onCompleted: (res: relayCreateItemMutationResponse) => {
          setMyItems(res.createItemMutation?.item);
          allItemsQueryResult.retry({ force: true });
          setItemMutationInput(initialItemInputData);
        },
        onError: (err) => {
          console.log({ err });
        },
      });
    }
    setShouldCreateItem(false);
  }, [shouldCreateItem]);

  return (
    <ItemContext.Provider
      value={{
        itemData: {},
        allItems,
        userItems: myItems,
        setItemMutationInput,
        itemMutationInput,
        setWillRemoveItemId,
        setShouldCreateItem,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export { ItemProvider, ItemContext };
