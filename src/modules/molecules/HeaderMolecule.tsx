import React, { FC, useContext } from 'react';
import { View, Text, StyleSheet, TextStyle } from 'react-native';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { AuthenticationContext } from '../../providers/AuthenticationProvider';
import TextAtom from '../atoms/TextAtom';

interface HeaderMoleculeProps {
  title: string;
  subtitle?: string;
  showActionButtons?: boolean;
  titleStyle?: TextStyle;
  onActionPress?: () => void;
  isBackButtonActive?: boolean;
  isLogoutActionActive?: boolean;
}

const HeaderMolecule: FC<HeaderMoleculeProps> = ({
  title,
  subtitle = '',
  titleStyle = {},
  showActionButtons = false,
  onActionPress = () => {},
  isBackButtonActive = false,
  isLogoutActionActive = false,
}) => {
  const navigation = useNavigation();
  const { clearAuthStorage } = useContext(AuthenticationContext);
  return (
    <Appbar.Header>
      {isBackButtonActive && (
        <Appbar.Action
          color="#fff"
          icon="arrow-left-circle"
          onPress={() => navigation.goBack()}
        />
      )}
      {isLogoutActionActive && (
        <>
          <Appbar.Action
            color="#fff"
            accessibilityLabel={'Log out'}
            icon="logout"
            onPress={clearAuthStorage}
          />
          <TextAtom customStyles={{ color: '#fff' }} value={'Logout'} />
        </>
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
