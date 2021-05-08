import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useAsyncStorage = (key: string, initialValue: any = null) => {
  const [storedValue, setStoredValue] = useState(initialValue);
  const [loading, setLoading] = useState(true);

  const getItem: () => void = async () => {
    setLoading(true);
    try {
      let value = await AsyncStorage.getItem(key);

      if (value !== null) {
        value = JSON.parse(value);
        setLoading(false);
        setStoredValue(value);
      }
    } catch (e) {
      setLoading(false);
      console.log('useAsyncStorage getItem error', e);
    }
  };

  useEffect(() => {
    getItem();
  }, [key, initialValue]);

  const clearStorageItem = async () => {
    setStoredValue(null);
    await AsyncStorage.removeItem(key);
  };

  const setValue = async (value: string) => {
    try {
      await AsyncStorage.setItem(key, value);
      setStoredValue(value);
    } catch (e) {
      console.log('useAsyncStorage setItem error', e);
    }
  };

  return [storedValue, setValue, loading, clearStorageItem];
};

export default useAsyncStorage;
