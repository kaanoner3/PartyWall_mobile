import React, { FC, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import HeaderMolecule from '../molecules/HeaderMolecule';
import ListItemMolecule from '../molecules/ListItemMolecule';
import ListProfileItemMolecule from '../molecules/ListProfileItemMolecule';
import TextAtom from '../atoms/TextAtom';

interface ItemListOrganismProps {
  listData: ItemType[];
  listType: 'allItems' | 'userItems';
}

const ItemListOrganism: FC<ItemListOrganismProps> = ({
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

export default ItemListOrganism;

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
