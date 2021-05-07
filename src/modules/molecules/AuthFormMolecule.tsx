import React, { FC, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import InputAtom from '../atoms/InputAtom';

interface AuthFormMoleculeProps {
  username: string;
  setUsername: (text: string) => void;
  setPassword: (text: string) => void;
  password: string;
}

const AuthFormMolecule: FC<AuthFormMoleculeProps> = ({
  username,
  password,
  setPassword,
  setUsername,
}) => {
  return (
    <View style={styles.container}>
      <InputAtom
        label={'username'}
        onChangeText={(text: string) => setUsername(text)}
        value={username}
      />
      <InputAtom
        customStyles={{ marginTop: 20 }}
        label={'password'}
        onChangeText={(text: string) => setPassword(text)}
        value={password}
        password
      />
    </View>
  );
};

export default AuthFormMolecule;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 40,
    marginLeft: 20,
  },
});
