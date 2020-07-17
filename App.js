import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Splash from './src/views/Splash'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

function DrawerNavigator() {
    return (
        <Drawer.Navigator>
            {/* <Drawer.Screen name="Feed" component={Feed} /> */}
        </Drawer.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash" >
                <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
                {/* <Stack.Screen name="Application" component={DrawerNavigator} options={{ headerShown: false }} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}
