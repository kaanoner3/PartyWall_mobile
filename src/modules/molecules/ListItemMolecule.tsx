import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ListItemMoleculeProps {
  isDeletable: boolean;
  item: any; // TODO: createItemType
}

const ListItemMolecule: FC<ListItemMoleculeProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>ListItemMolecule</Text>
    </View>
  );
};

export default ListItemMolecule;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
