import React from 'react';
import Navigation from './src/navigation';
import { AuthenticationProvider } from './src/providers/AuthenticationProvider';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'tomato',
      accent: 'yellow',
    },
  };
  return (
    <AuthenticationProvider>
      <PaperProvider theme={theme}>
        <Navigation />
      </PaperProvider>
    </AuthenticationProvider>
  );
}
