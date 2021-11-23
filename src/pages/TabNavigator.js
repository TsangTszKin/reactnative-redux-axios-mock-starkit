// import React, { Component } from 'react';
// import { createAppContainer } from 'react-navigation';
// import { createBottomTabNavigator } from 'react-navigation-tabs'

import Square from './Square'
import Find from './Find'
import Message from './Message'
import Me from './Me'

// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Entypo from 'react-native-vector-icons/Entypo';

// import { View, Text, Button } from 'react-native'

// class TabNavigator extends Component{
//   render(){
//     const Tab = this.tabNavigator()
//     return(<Tab/>);
//   //   return <Button
//   //   title="Learn More111"
//   //   color="#841584"
//   //   accessibilityLabel="Learn more about this purple button"
//   // />
//   }
//   tabNavigator = () => {
//     return createAppContainer(createBottomTabNavigator({
//       Square:{
//         screen: Square,
//         navigationOptions: {
//           tabBarLabel: '广场',
//           tabBarIcon: ({tintColor, focused}) => (
//             <MaterialIcons
//               name={'whatshot'}
//               size={26}
//               style={{color: tintColor}}
//             />
//             // <Text>111111</Text>
//           )
//         }
//       },
//       // Find: {
//       //   screen: Find,
//       //   navigationOptions: {
//       //     tabBarLabel: '发现',
//       //     tabBarIcon: ({tintColor, focused}) => (
//       //       <Ionicons
//       //         name={'md-trending-up'}
//       //         size={26}
//       //         style={{color: tintColor}}
//       //       />
//       //     )
//       //   }
//       // },
//       // Message: {
//       //   screen: Message,
//       //   navigationOptions: {
//       //     tabBarLabel: '消息',
//       //     tabBarIcon: ({tintColor, focused}) => (
//       //       <MaterialIcons
//       //         name={'favorite'}
//       //         size={26}
//       //         style={{color: tintColor}}
//       //       />
//       //     )
//       //   }
//       // },
//       // Me: {
//       //   screen: Me,
//       //   navigationOptions: {
//       //     tabBarLabel: '我的',
//       //     tabBarIcon: ({tintColor, focused}) => ( // 这里是小括号
//       //       <Entypo
//       //         name={'user'}
//       //         size={26}
//       //         style={{color: tintColor}}
//       //       />
//       //     )
//       //   }
//       // }
//     }))
//   }
// }
// export default TabNavigator

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