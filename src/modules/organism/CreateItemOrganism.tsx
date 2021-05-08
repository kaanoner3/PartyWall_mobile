import React, { FC, useEffect, useState } from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import CreateFoodFormMolecule from '../molecules/CreateFoodFormMolecule';
import CreateDrinkFromMolecule from '../molecules/CreateDrinkFromMolecule';
import { Tabs, TabScreen } from 'react-native-paper-tabs';
import { useNavigation } from '@react-navigation/native';

interface CreateItemOrganismProps {
  selectedCategory: itemCategoryType;
}

const CreateItemOrganism: FC<CreateItemOrganismProps> = ({
  selectedCategory,
}) => {
  const navigation = useNavigation();

  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'Food', title: 'Food' },
    { key: 'Drink', title: 'Drink' },
  ]);

  return (
    <Tabs
      dark={true} // works the same as AppBar in react-native-paper
      // defaultIndex={0} // default = 0
      // uppercase={false} // true/false | default=true | labels are uppercase
      // showTextLabel={false} // true/false | default=false (KEEP PROVIDING LABEL WE USE IT AS KEY INTERNALLY + SCREEN READERS)
      // iconPosition // leading, top | default=leading
      //style={{ backgroundColor:'#fff' }} // works the same as AppBar in react-native-paper

      // theme={} // works the same as AppBar in react-native-paper
      // mode="scrollable" // fixed, scrollable | default=fixed
      // onChangeIndex={(newIndex) => {}} // react on index change
      // showLeadingSpace={true} //  (default=true) show leading space in scrollable tabs inside the header
    >
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
