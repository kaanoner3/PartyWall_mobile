import React, { FC, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ItemListOrganism from '../organism/ItemListOrganism';
import ALL_ITEMS_QUERY, {
  relayAllItemsQuery,
} from '../../__generated__/relayAllItemsQuery.graphql';
import { STORE_OR_NETWORK, useQuery } from 'relay-hooks/lib';
import { useFetchResult } from '../../hooks/useFetchResult';
import HeaderMolecule from '../molecules/HeaderMolecule';

interface HomeScreenProps {}

const HomeScreen: FC<HomeScreenProps> = ({}) => {
  const [items, setItems] = useState<ItemType[]>([]);
  const { error, data } = useQuery<relayAllItemsQuery>(ALL_ITEMS_QUERY, {
    fetchPolicy: STORE_OR_NETWORK,
  });
  const { status, payload } = useFetchResult(error, data);

  useEffect(() => {
    if (status === 'success' && payload.itemQuery?.allItems.length > 0) {
      setItems(payload.itemQuery.allItems);
    }
  }, [payload]);

  return (
    <View style={styles.container}>
      <HeaderMolecule title={'Party Wall'} titleStyle={styles.titleStyle} />
      <ItemListOrganism listType="allItems" listData={items} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleStyle: {
    fontSize: 32,
    color: '#fff',
  },
});
