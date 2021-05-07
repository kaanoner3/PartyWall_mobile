import React, { useState, useEffect, useRef, FC } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import ButtonAtom from '../atoms/ButtonAtom';
import AuthFormMolecule from '../molecules/AuthFormMolecule';

interface LoginScreenProps {}

const LoginScreen: FC<LoginScreenProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
      <AuthFormMolecule />
      <View style={styles.buttonView}>
        <ButtonAtom onPress={() => {}} text="Log in" />
        <ButtonAtom
          style={{ marginLeft: 10 }}
          onPress={() => {}}
          text="Register"
        />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,

  },
});
