import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import ListLifes from './ListLifes'
import RegisterLife from './RegisterLife'

import TabBar from '../components/TabBar'

const Tab = createBottomTabNavigator()

export default Integration = ({ navigation }) => {
    return (
        <Tab.Navigator tabBar={props => <TabBar {...props} />}>
            <Tab.Screen name="ListLifes" component={ListLifes} options={{ title: 'Vidas' }} />
            <Tab.Screen name="RegisterLife" component={RegisterLife} options={{ title: 'Cadastro' }} />
        </Tab.Navigator>
    )
}
