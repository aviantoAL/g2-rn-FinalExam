import React from 'react'
import Homes from '../Homes';
import Favorites from '../Favorites';
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'





const Tab = createBottomTabNavigator();

export default function TabHome() {
  return (
    <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={Homes}
      options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Favorites"
      component={Favorites}
      options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="star" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
  )
}
