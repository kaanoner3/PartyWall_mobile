import React from 'react';
import Navigation from './src/navigation';
import { AuthenticationProvider } from './src/providers/AuthenticationProvider';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <AuthenticationProvider>
      <PaperProvider>
        <Navigation />
      </PaperProvider>
    </AuthenticationProvider>
  );
}
