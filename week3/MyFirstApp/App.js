import React, { useEffect, useState } from 'react';
import { Screen } from './app/components';
import ListingEditScreen from "./app/screens/ListingEditScreen";
import MessagesScreen from "./app/screens/MessagesScreen";

export default function App() {


  return (
    <Screen>
      <ListingEditScreen />
    </Screen>
  );
}



