import Square from './pages/Square'
import Find from './pages/Find'
import Message from './pages/Message'
import My from './pages/My'
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

export default class TabNavigator extends React.Component {

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="广场" component={Square}
            options={{
              tabBarLabel: ({ color, focused }) => (
                <Text style={{ color: focused ? '#FBC464' : color }}>广场</Text>
              ),
              tabBarIcon: ({ color, size, focused }) => (
                <Ionicons name="home" style={{ color: focused ? '#FBC464' : color }} size={size} />
              ),
            }}
          />
          <Tab.Screen name="发现" component={Find}
            options={{
              tabBarLabel: ({ color, focused }) => (
                <Text style={{ color: focused ? '#FBC464' : color }}>发现</Text>
              ),
              tabBarIcon: ({ color, size, focused }) => (
                <MaterialCommunityIcons name="feature-search" style={{ color: focused ? '#FBC464' : color }} size={size} />
              ),
            }}
          />
          <Tab.Screen name="动态" component={Message}
            options={{
              tabBarLabel: ({ color, focused }) => (
                <Text style={{ color: focused ? '#FBC464' : color }}>动态</Text>
              ),
              tabBarIcon: ({ color, size, focused }) => (
                <AntDesign name="notification" style={{ color: focused ? '#FBC464' : color }} size={size} />
              ),
            }}
          />
          <Tab.Screen name="我的" component={My}
            options={{
              tabBarLabel: ({ color, focused }) => (
                <Text style={{ color: focused ? '#FBC464' : color }}>我的</Text>
              ),
              tabBarIcon: ({ color, size, focused }) => (
                <AntDesign name="user" style={{ color: focused ? '#FBC464' : color }} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }

}