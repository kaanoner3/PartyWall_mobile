import AsyncStorage from '@react-native-async-storage/async-storage';

export const sessionUtils: () => Promise<string | null> = () => {
  return AsyncStorage.getItem('@user');
};

export const saveSession: (token: string) => void = (token) => {
  AsyncStorage.setItem('@user', token);
};
