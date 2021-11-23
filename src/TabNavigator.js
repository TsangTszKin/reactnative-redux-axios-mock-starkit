import Square from './pages/Square'
import Find from './pages/Find'
import Message from './pages/Message'
import Me from './pages/Me'
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="广场" component={Square}
          options={{
            tabBarLabel: '广场',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen name="发现" component={Find}
          options={{
            tabBarLabel: '发现',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="feature-search" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen name="动态" component={Message}
          options={{
            tabBarLabel: '动态',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="notification" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen name="我的" component={Me}
          options={{
            tabBarLabel: '我的',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="user" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}