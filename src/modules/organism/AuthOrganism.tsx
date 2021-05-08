import React, { FC, useContext, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AuthFormMolecule from '../molecules/AuthFormMolecule';
import ButtonAtom from '../atoms/ButtonAtom';
import { AuthenticationContext } from '../../providers/AuthenticationProvider';

interface AuthOrganismProps {}

const AuthOrganism: FC<AuthOrganismProps> = ({}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setAuthMutationInput } = useContext(AuthenticationContext);

  const onLoginPress = () => {
    setAuthMutationInput({ username, password, type: 'login' });
  };
  const onRegisterPress = () => {
    setAuthMutationInput({ username, password, type: 'register' });
  };

  return (
    <>
      <AuthFormMolecule
        username={username}
        setPassword={setPassword}
        setUsername={setUsername}
        password={password}
      />
      <View style={styles.buttonView}>
        <ButtonAtom onPress={onLoginPress} text="Log in" />
        <ButtonAtom
          style={{ marginLeft: 10 }}
          onPress={onRegisterPress}
          text="Register"
        />
      </View>
    </>
  );
};

export default AuthOrganism;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
});
