import React, { FC, useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ItemListMolecule from '../molecules/ItemListMolecule';
import ALL_ITEMS_QUERY, {
  relayAllItemsQuery,
} from '../../__generated__/relayAllItemsQuery.graphql';
import { STORE_OR_NETWORK, useQuery } from 'relay-hooks/lib';
import { useFetchResult } from '../../hooks/useFetchResult';
import HeaderMolecule from '../molecules/HeaderMolecule';
import { ItemContext } from '../../providers/ItemProvider';

interface HomeScreenProps {}

const HomeScreen: FC<HomeScreenProps> = ({}) => {
  const { allItems } = useContext(ItemContext);

  return (
    <View style={styles.container}>
      <HeaderMolecule title={'Party Wall'} titleStyle={styles.titleStyle} />
      <ItemListMolecule listType="allItems" listData={allItems} />
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
