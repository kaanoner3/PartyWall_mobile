import React, { useState, useEffect, useRef, FC } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

interface SignUpScreenProps {}

const SignUpScreen: FC<SignUpScreenProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>SignUpScreen</Text>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
