import React, { useState, useEffect, useRef, FC } from 'react';
import {
  StyleSheet,
  TextInput,
  TextInputProps,
} from 'react-native';

interface InputAtomProps {
  onChangeText: () => void;
  value: string;
  customStyles: TextInputProps;
}

const InputAtom: FC<InputAtomProps> = ({
  customStyles,
  onChangeText,
  value,
  ...otherProps
}) => {
  return (
    <TextInput
      style={[styles.container, customStyles]}
      placeholderTextColor={'#000'}
      onChangeText={onChangeText}
      value={value}
      {...otherProps}
    />
  );
};

export default InputAtom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
