import React, { FC } from 'react';
import { View, Text, StyleSheet, TextStyle } from 'react-native';
import { Appbar } from 'react-native-paper';

interface HeaderMoleculeProps {
  title: string;
  subtitle?: string;
  showActionButtons?: boolean;
  titleStyle?: TextStyle;
  onActionPress?: () => void;
}

const HeaderMolecule: FC<HeaderMoleculeProps> = ({
  title,
  subtitle = '',
  titleStyle = {},
  showActionButtons = false,
  onActionPress = () => {},
}) => {
  return (
    <Appbar.Header>
      <Appbar.Content
        titleStyle={titleStyle}
        title={title}
        subtitle={subtitle}
      />
      {showActionButtons && (
        <Appbar.Action
          color="#fff"
          icon="loupe"
          onPress={onActionPress}
        />
      )}
    </Appbar.Header>
  );
};

export default HeaderMolecule;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
