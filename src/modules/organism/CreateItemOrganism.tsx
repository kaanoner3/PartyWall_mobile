import React, { FC, useEffect, useState } from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import CreateFoodFormMolecule from '../molecules/CreateFoodFormMolecule';
import CreateDrinkFromMolecule from '../molecules/CreateDrinkFromMolecule';
import { Tabs, TabScreen } from 'react-native-paper-tabs';
import { useNavigation } from '@react-navigation/native';
import SIGN_UP_MUTATION, {
  relaySignUpMutation,
  relaySignUpMutationResponse,
} from '../../__generated__/relaySignUpMutation.graphql';
import {useMutation} from "relay-hooks/lib";

interface CreateItemOrganismProps {
  selectedCategory: itemCategoryType;
}

const CreateItemOrganism: FC<CreateItemOrganismProps> = ({
  selectedCategory,
}) => {
  const [createUser] = useMutation<relaySignUpMutation>(SIGN_UP_MUTATION, {
    onError: (err: any) => {},
    onCompleted: (res: relaySignUpMutationResponse) => {

    },
  });
  return (
    <Tabs dark={true}>
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
