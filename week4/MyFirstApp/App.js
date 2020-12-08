import React, { useEffect, useState } from 'react';
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Screen } from "./app/components";
import AuthNavigator from './app/navigation/AuthNavigator';
import AppNavigator from './app/navigation/AppNavigator';
import ListingEditScreen from './app/screens/ListingEditScreen';
import { NavigationContainer } from '@react-navigation/native';
import navigationTheme from './app/navigation/navigationTheme';

// Caching Strategies
// ------------------
// Notify some features
// Disable some features
// Cache data
// Store user actions

// Caching
// -----------------
// AsyncStorage
// SecureStore
// SQLite

// Androidd -> SQLite
// IOS -> filesystem/dictionary

// Caching Layer
// -------------
// 1. Serialize/deserialize data (stringify/parse)
// 2. Timestamp caching
// 3. Remove expired items

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}



