import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainNavigation} from './src/navigation/MainNavigation';
import {MoviesContextProvider} from './src/context/MoviesContext';

export default function App() {
  return (
    <NavigationContainer>
      <MoviesContextProvider>
        <MainNavigation />
      </MoviesContextProvider>
    </NavigationContainer>
  );
}
