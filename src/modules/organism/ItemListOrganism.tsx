import React, { FC, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import HeaderMolecule from '../molecules/HeaderMolecule';
import ListItemMolecule from '../molecules/ListItemMolecule';

interface ItemListOrganismProps {
  listData: ItemType[];
}

const ItemListOrganism: FC<ItemListOrganismProps> = ({ listData = [] }) => {
  const renderItem = ({ item }: { item: ItemType }) => {
    return <ListItemMolecule isDeletable={false} item={item} />;
  };
  return (
    <View style={styles.container}>
      <HeaderMolecule title={'Party Wall'} titleStyle={styles.titleStyle} />
      <FlatList
        style={{ flex: 1, }}
        contentContainerStyle={styles.contentContainerStyle}
        data={listData}
        renderItem={renderItem}
        keyExtractor={(item: ItemType) => item.id}
        ItemSeparatorComponent={() => (
          <View style={{ height: 1, backgroundColor: 'rgba(0,0,0,0.3)' }} />
        )}
      />
    </View>
  );
};

export default ItemListOrganism;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleStyle: {
    fontSize: 32,
    color: '#fff',
  },
  contentContainerStyle: {
    padding: 0,
    paddingTop: 0,
    justifyContent: 'center',
  },
});
