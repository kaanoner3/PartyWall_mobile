import React, { useState, useEffect, useRef, FC } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

interface TextAtomProps {}

const TextAtom: FC<TextAtomProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>TextAtom</Text>
    </View>
  );
};

export default TextAtom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
