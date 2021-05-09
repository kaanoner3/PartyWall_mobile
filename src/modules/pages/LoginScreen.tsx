import React, { useState, useEffect, useRef, FC } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import ButtonAtom from '../atoms/ButtonAtom';
import AuthFormMolecule from '../molecules/AuthFormMolecule';
import AuthOrganism from '../organism/AuthOrganism';
import TextAtom from '../atoms/TextAtom';

interface LoginScreenProps {}

const LoginScreen: FC<LoginScreenProps> = ({}) => {
  return (
    <View style={styles.container}>
      <TextAtom
        value={'Welcome to Party Wall App!'}
        customStyles={styles.titleText}
      />
      <AuthOrganism />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleText: { marginLeft: 20, marginTop: 20, marginBottom: 20, fontSize: 24 },
});
