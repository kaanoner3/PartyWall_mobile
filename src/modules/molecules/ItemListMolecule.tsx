import React, { FC, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import HeaderMolecule from './HeaderMolecule';
import ListItemMolecule from './ListItemMolecule';
import ListProfileItemMolecule from './ListProfileItemMolecule';
import TextAtom from '../atoms/TextAtom';

interface ItemListMoleculeProps {
  listData: ItemType[];
  listType: 'allItems' | 'userItems';
}

const ItemListMolecule: FC<ItemListMoleculeProps> = ({
  listData = [],
  listType,
}) => {
  const renderItem = ({ item }: { item: ItemType }) => {
    if (listType === 'allItems') {
      return <ListItemMolecule item={item} />;
    }
    return <ListProfileItemMolecule item={item} />;
  };
  const renderEmptyScreen = () => {
    return (
      <TextAtom
        customStyles={{ textAlign: 'center', marginTop: 20 }}
        value={'There is no item to display'}
      />
    );
  };
  return (
    <FlatList
      style={{ flex: 1 }}
      contentContainerStyle={styles.contentContainerStyle}
      data={listData}
      renderItem={renderItem}
      keyExtractor={(item: ItemType) => item.id}
      ItemSeparatorComponent={() => (
        <View style={{ height: 1, backgroundColor: 'rgba(0,0,0,0.3)' }} />
      )}
      ListEmptyComponent={renderEmptyScreen}
    />
  );
};

export default ItemListMolecule;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  contentContainerStyle: {
    padding: 0,
    paddingTop: 0,
    justifyContent: 'center',
  },
});
