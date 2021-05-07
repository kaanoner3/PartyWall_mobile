import React from 'react';
import Navigation from './src/navigation';
import { AuthenticationProvider } from './src/providers/AuthenticationProvider';

export default function App() {
  return (
    <AuthenticationProvider>

      <Navigation />
    </AuthenticationProvider>
  );
}
