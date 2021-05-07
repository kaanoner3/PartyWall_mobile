import React, { FC } from 'react';
import { View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { Button } from 'react-native-paper';

interface ButtonAtomProps {
  icon?: string;
  onPress: () => void;
  text?: string;
  style?: StyleProp<ViewStyle>;
}

const ButtonAtom: FC<ButtonAtomProps> = ({
  icon = '',
  onPress = () => {},
  text = 'click me',
  style = {},
}) => {
  return (
    <Button style={style} icon={icon} mode="contained" onPress={onPress}>
      {text}
    </Button>
  );
};

export default ButtonAtom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
