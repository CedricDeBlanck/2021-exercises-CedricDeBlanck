import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListingEditScreen from '../screens/ListingEditScreen';
import ListingScreen from '../screens/ListingScreen';
import AccountScreen from '../screens/AccountScreen';
import FeedNavigator from './FeedNavigation';
import AccountNavigator from './AccountNavigator';
import NewListingButton from './NewListingButton';

import routes from './routes';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen 
            name="Listings" 
            component={FeedNavigator}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" size={color} size={size} />
                )
            }}
        />

        <Tab.Screen 
            name="ListingEdit" 
            component={ListingEditScreen} 
            options={({ navigation, router }) => ({
                tabBarButton: () => <NewListingButton onPress={() => navigation.navigate(routes.LISTING_DETAILS)} />,
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="plus-circle" size={color} size={size} />
                )
            })}
        />
        <Tab.Screen 
            name="Account" 
            component={AccountNavigator} 
            options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" size={color} size={size} />
                )
            }}
        />
    </Tab.Navigator>
)

export default AppNavigator;