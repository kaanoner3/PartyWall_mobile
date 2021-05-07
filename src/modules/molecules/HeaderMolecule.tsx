import React, { FC } from 'react';
import { View, Text, StyleSheet, TextStyle } from 'react-native';
import { Appbar } from 'react-native-paper';

interface HeaderMoleculeProps {
  title: string;
  subtitle?: string;

  titleStyle?: TextStyle;
}

const HeaderMolecule: FC<HeaderMoleculeProps> = ({
  title,
  subtitle = '',
  titleStyle = {},
}) => {
  return (
    <Appbar.Header>
      <Appbar.Content
        titleStyle={titleStyle}
        title={title}
        subtitle={subtitle}
      />
    </Appbar.Header>
  );
};

export default HeaderMolecule;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
