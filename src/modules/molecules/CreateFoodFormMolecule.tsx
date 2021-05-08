import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CreateFoodFormMoleculeProps {}

const CreateFoodFormMolecule: FC<CreateFoodFormMoleculeProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>CreateFoodFormMolecule</Text>
    </View>
  );
};

export default CreateFoodFormMolecule;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
