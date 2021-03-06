import React, { useState, useEffect, useRef, FC } from 'react';
import {
  KeyboardType,
  StyleProp,
  StyleSheet,
  TextInputProps,
  TextStyle,
} from 'react-native';
import { TextInput } from 'react-native-paper';

interface InputAtomProps {
  onChangeText: (text: string) => void;
  value: string;
  customStyles?: StyleProp<TextStyle>;
  label: string;
  password?: boolean;
  keyboardType?: KeyboardType;
}

const InputAtom: FC<InputAtomProps> = ({
  customStyles = {},
  onChangeText,
  value,
  password = false,
  label = '',
  keyboardType = 'default',
}) => {
  return (
    <TextInput
      mode="outlined"
      dense
      style={customStyles}
      label={label}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={password}
      keyboardType={keyboardType}
    />
  );
};

export default InputAtom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
