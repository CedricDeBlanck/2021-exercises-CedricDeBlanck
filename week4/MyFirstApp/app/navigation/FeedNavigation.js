import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Listings from "../screens/ListingScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createStackNavigator();

const FeedNavigation = () => (
    <Stack.Navigator mode="modal" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Listings" component={Listings}/>
        <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
)

export default FeedNavigation;