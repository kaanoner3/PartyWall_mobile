import React, { FC } from 'react';
import { View, Text, StyleSheet, TextStyle } from 'react-native';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

interface HeaderMoleculeProps {
  title: string;
  subtitle?: string;
  showActionButtons?: boolean;
  titleStyle?: TextStyle;
  onActionPress?: () => void;
  isBackButtonActive?: boolean;
}

const HeaderMolecule: FC<HeaderMoleculeProps> = ({
  title,
  subtitle = '',
  titleStyle = {},
  showActionButtons = false,
  onActionPress = () => {},
  isBackButtonActive = false,
}) => {
  const navigation = useNavigation();
  return (
    <Appbar.Header>
      {isBackButtonActive && (
        <Appbar.Action
          color="#fff"
          icon="arrow-left-circle"
          onPress={() => navigation.goBack()}
        />
      )}
      <Appbar.Content
        titleStyle={titleStyle}
        title={title}
        subtitle={subtitle}
      />
      {showActionButtons && (
        <Appbar.Action color="#fff" icon="loupe" onPress={onActionPress} />
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
