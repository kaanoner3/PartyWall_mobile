import React, { FC, useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import CreateFoodFormMolecule from '../molecules/CreateFoodFormMolecule';
import CreateDrinkFromMolecule from '../molecules/CreateDrinkFromMolecule';
import { Tabs, TabScreen, useTabIndex } from 'react-native-paper-tabs';
import { ItemContext } from '../../providers/ItemProvider';

interface CreateItemOrganismProps {}

const CreateItemOrganism: FC<CreateItemOrganismProps> = ({}) => {
  const { setItemMutationInput, itemMutationInput } = useContext(ItemContext);
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    setItemMutationInput({ ...itemMutationInput, categoryId: tabIndex + 1 });
  }, [tabIndex]);
  return (
    <Tabs onChangeIndex={(index) => setTabIndex(index)} dark={true}>
      <TabScreen label="Food" icon="hamburger">
        <CreateFoodFormMolecule />
      </TabScreen>
      <TabScreen label="Drink" icon="glass-cocktail">
        <CreateDrinkFromMolecule />
      </TabScreen>
    </Tabs>
  );
};

export default CreateItemOrganism;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
