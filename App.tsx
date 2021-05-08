import React from 'react';
import Navigation from './src/navigation';
import { AuthenticationProvider } from './src/providers/AuthenticationProvider';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaView } from 'react-native';
import { RelayEnvironmentProvider } from 'relay-hooks/lib';
import environment from './src/relay/environment';
import { ItemProvider } from './src/providers/ItemProvider';

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
    <RelayEnvironmentProvider environment={environment}>
      <AuthenticationProvider>
        <ItemProvider>
          <PaperProvider theme={theme}>
            <SafeAreaView style={{ flex: 1 }}>
              <Navigation />
            </SafeAreaView>
          </PaperProvider>
        </ItemProvider>
      </AuthenticationProvider>
    </RelayEnvironmentProvider>
  );
}
