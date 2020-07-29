import React from 'react'

import { Provider } from 'react-redux'
import store from './src/redux/store'

import moment from 'moment'
import 'moment/min/locales'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import DrawerMenu from './src/components/DrawerMenu'

import Splash from './src/views/Splash'
import Accounts from './src/views/Accounts'
import Login from './src/views/Login'
import Register from './src/views/Register'
import Home from './src/views/Home'
import SearchCap from './src/views/SearchCap'
import Integration from './src/views/Integration'
import Profile from './src/views/Profile'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

function DrawerNavigator() {
    return (
        <Drawer.Navigator drawerContent={(props) => <DrawerMenu {...props} />} initialRouteName="Home" backBehavior="initialRoute">
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="SearchCap" component={SearchCap} />
            <Drawer.Screen name="Integration" component={Integration} />
            <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
    );
}

export default function App() {
    moment.locale('pt-br')
    
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Application" >
                    <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
                    <Stack.Screen name="Accounts" component={Accounts} options={{ headerShown: false }} />
                    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                    <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
                    <Stack.Screen name="Application" component={DrawerNavigator} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}
