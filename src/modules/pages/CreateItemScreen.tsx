import React, { FC, useContext, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderMolecule from '../molecules/HeaderMolecule';
import CreateItemOrganism from '../organism/CreateItemOrganism';
import ButtonAtom from '../atoms/ButtonAtom';
import { ItemContext } from '../../providers/ItemProvider';

interface CreateItemScreenProps {}

const CreateItemScreen: FC<CreateItemScreenProps> = ({}) => {
  const { setShouldCreateItem } = useContext(ItemContext);

  return (
    <View style={styles.container}>
      <HeaderMolecule
        title="Create Item"
        isBackButtonActive
        titleStyle={styles.titleStyle}
      />
      <CreateItemOrganism selectedCategory={'Food'} />
      <ButtonAtom
        onPress={() => setShouldCreateItem(true)}
        text="Create Item"
      />
    </View>
  );
};

export default CreateItemScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleStyle: {
    fontSize: 32,
    color: '#fff',
  },
});
