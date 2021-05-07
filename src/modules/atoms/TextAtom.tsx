import React, { useState, useEffect, useRef, FC } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextStyle,
} from 'react-native';

interface TextAtomProps {
  customStyles?: TextStyle;
  value: string | number;
}

const TextAtom: FC<TextAtomProps> = ({ customStyles = {}, value }) => {
  return <Text style={[styles.container, customStyles]}>{value}</Text>;
};

export default TextAtom;

const styles = StyleSheet.create({
  container: {
    fontSize: 16,
    fontWeight: '600',
  },
});
