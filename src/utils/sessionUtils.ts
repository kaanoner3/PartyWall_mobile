import AsyncStorage from '@react-native-async-storage/async-storage';

export const getSession: () => Promise<string | null> = () => {
  return AsyncStorage.getItem('@user');
};

export const saveSession: (token: string) => void = (token) => {
  AsyncStorage.setItem('@user', token);
};
