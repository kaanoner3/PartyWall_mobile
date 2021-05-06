import React, { useState, useEffect, useRef, FC } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

interface EmptyScreenProps {}

const EmptyScreen: FC<EmptyScreenProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>EmptyScreen</Text>
    </View>
  );
};

export default EmptyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
