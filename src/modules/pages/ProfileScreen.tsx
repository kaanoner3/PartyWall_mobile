import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import UserProfileOrganism from '../organism/UserProfileOrganism';

interface ProfileScreenProps {}

const ProfileScreen: FC<ProfileScreenProps> = ({}) => {
  return (
    <View style={styles.container}>
      <UserProfileOrganism />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
