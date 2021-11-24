import React from 'react';
import {
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';
import { Provider } from 'react-redux';
import store from './src/store'

import { createStackNavigator } from 'react-navigation-stack'

import WelcomePage from './src/pages/Welcome'
import TabNavigator from './src/TabNavigator'
// import DetailPage from '../components/homePages/DetailPage'

// APP的启动页面必须使用createSwitchNavigator，防止按返回按钮回到启动页
const IninNavigator = createStackNavigator({
  WelcomePage: {
    screen: WelcomePage,
    navigationOptions: {
      headerShown: false
    }
  }
})

const MainNavigator = createStackNavigator({
  TabNavigator: {
    screen: TabNavigator,
    navigationOptions: {
      headerShown: false
    }
  },
  // DetailPage: {
  //   screen: DetailPage,
  //   navigationOptions: {
  //   }
  // }
}, {
  initialRouteName: 'TabNavigator'
})

const NavInit = createSwitchNavigator({
  Init: IninNavigator,
  Main: MainNavigator
}, {
  initialRouteName: 'Init',
  navigationOptions: {
    headerShown: false
  }
})

// export const RootNavigator =  createAppContainer(NavInit)

const AppNavigation = createAppContainer(NavInit) // react-navigation3.x必须使用createAppContainer包裹
const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  )
}
export default App;
