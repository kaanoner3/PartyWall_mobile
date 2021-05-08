import React, {
  createContext,
  useEffect,
  FC,
  useState,
  Dispatch,
  SetStateAction,
  ReactChild,
} from 'react';
import useAsyncStorage from '../hooks/useAsyncStorage';
import CREATE_ITEM_MUTATION, {
  relayCreateItemMutation,
  relayCreateItemMutationResponse,
} from '../__generated__/relayCreateItemMutation.graphql';
import LOG_IN_MUTATION, {
  relayLogInMutation,
  relayLogInMutationResponse,
} from '../__generated__/relayLogInMutation.graphql';
import { useMutation } from 'relay-hooks/lib';

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
}

interface AuthContextType {
  itemData: any;
  allItems: ItemType[];
  userItems: ItemType[];
  itemMutationInput: ItemInputData;
  setItemMutationInput: Dispatch<SetStateAction<ItemInputData>>;
  setWillRemoveItemId: Dispatch<SetStateAction<string>>;
}
const initialItemInputData = {
  name: '',
  price: 0,
  quantity: 0,
  volume: null,
  weight: null,
  description: null,
};
const ItemContext = createContext<AuthContextType>({
  itemData: {},
  allItems: [],
  userItems: [],
  itemMutationInput: initialItemInputData,
  setItemMutationInput: () => {},
  setWillRemoveItemId: () => {},
});

const ItemProvider: FC<ItemProviderProps> = ({ children }) => {
  const [itemMutationInput, setItemMutationInput] = useState<ItemInputData>(
    initialItemInputData
  );
  const [willRemoveItemId, setWillRemoveItemId] = useState<string>('');
  const [createItem] = useMutation<relayCreateItemMutation>(
    CREATE_ITEM_MUTATION,
    {
      onError: (err: any) => {},
      onCompleted: (res: relayCreateItemMutationResponse) => {},
    }
  );

  const [removeItem] = useMutation<relayLogInMutation>(LOG_IN_MUTATION, {
    onError: (err: any) => {},
    onCompleted: (res: relayLogInMutationResponse) => {
      console.log({ res });
    },
  });

  useEffect(() => {
    const {} = itemMutationInput;
  }, [itemMutationInput]);

  return (
    <ItemContext.Provider
      value={{
        itemData: {},
        allItems: [],
        userItems: [],
        setItemMutationInput,
        itemMutationInput,
        setWillRemoveItemId,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export { ItemProvider, ItemContext };
