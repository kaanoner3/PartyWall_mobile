import React, { FC } from 'react';
import { View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { Button } from 'react-native-paper';

interface ButtonAtomProps {
  icon?: string;
  onPress: () => void;
  text?: string;
  style?: StyleProp<ViewStyle>;
  mode?: 'text' | 'contained' | 'outlined' | undefined;
  contentStyle?: StyleProp<ViewStyle>;
  color?: string;
  compact?: boolean;
}

const ButtonAtom: FC<ButtonAtomProps> = ({
  icon = '',
  onPress = () => {},
  text = '',
  style = {},
  mode = 'contained',
  contentStyle = {},
  color = undefined,
  compact = false,
}) => {
  return (
    <Button
      style={style}
      contentStyle={contentStyle}
      color={color}
      icon={icon}
      mode={mode}
      compact={compact}
      onPress={onPress}
      dark
    >
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
