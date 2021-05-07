import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface AuthFormMoleculeProps {}

const AuthFormMolecule: FC<AuthFormMoleculeProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>AuthFormMolecule</Text>
    </View>
  );
};

export default AuthFormMolecule;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
