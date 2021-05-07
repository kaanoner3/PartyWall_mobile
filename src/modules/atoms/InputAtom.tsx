import React, { useState, useEffect, useRef, FC } from 'react';
import { StyleProp, StyleSheet, TextInputProps, TextStyle } from 'react-native';
import { TextInput } from 'react-native-paper';

interface InputAtomProps {
  onChangeText: (text: string) => void;
  value: string;
  customStyles?: StyleProp<TextStyle>;
  label: string;
}

const InputAtom: FC<InputAtomProps> = ({
  customStyles = {},
  onChangeText,
  value,
  label = '',
  ...otherProps
}) => {
  return (
    <TextInput
      mode="outlined"
      dense
      style={customStyles}
      label={label}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export default InputAtom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
