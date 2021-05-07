import React, { FC, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ItemListOrganism from '../organism/ItemListOrganism';
import ALL_ITEMS_QUERY, {
  relayAllItemsQuery,
} from '../../__generated__/relayAllItemsQuery.graphql';
import { STORE_OR_NETWORK, useQuery } from 'relay-hooks/lib';
import useFetchResults from '../../hooks/useFetchResult';

interface HomeScreenProps {}

const HomeScreen: FC<HomeScreenProps> = ({}) => {
  const [items, setItems] = useState<ItemType[]>([]);
  const { error, data } = useQuery<relayAllItemsQuery>(ALL_ITEMS_QUERY, {
    fetchPolicy: STORE_OR_NETWORK,
  });
  const { status, payload } = useFetchResults(error, data);

  useEffect(() => {
    if (status === 'success' && payload.itemQuery?.allItems.length > 0) {
      setItems(payload.itemQuery.allItems);
    }
  }, [payload]);

  //const { status, payload } = useFetchResults(error, props);

  return (
    <View style={styles.container}>
      <ItemListOrganism listData={items} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
