import React, { FC, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderMolecule from '../molecules/HeaderMolecule';
import CreateItemOrganism from '../organism/CreateItemOrganism';

interface CreateItemScreenProps {}

const CreateItemScreen: FC<CreateItemScreenProps> = ({}) => {
  const [selectedCategory, setSelectedCategory] = useState<itemCategoryType>(
    'Food'
  );

  return (
    <View style={styles.container}>
      <HeaderMolecule
        title="Create Item"
        isBackButtonActive
        titleStyle={styles.titleStyle}
      />
      <CreateItemOrganism selectedCategory={selectedCategory} />
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
