import React from 'react';
import {
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';
import { Provider } from 'react-redux';
import store from './src/store'

import { createStackNavigator } from 'react-navigation-stack'
import { createReactNavigationReduxMiddleware, createReduxContainer } from 'react-navigation-redux-helpers'

import WelcomePage from './src/pages/Welcome'
import TabNavigator from './src/TabNavigator'
import FindMetro from './src/pages/FindMetro'
import FindXiaqu from './src/pages/FindXiaqu'
import Find from './src/pages/Find'
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
  'TabNavigator': {
    screen: TabNavigator,
    navigationOptions: {
      headerShown: false
    },
  },
  'FindMetro': {
    screen: FindMetro,
    navigationOptions: {
    }
  },
  'FindXiaqu': {
    screen: FindXiaqu,
    navigationOptions: {
    }
  },
  'Find': {
    screen: Find,
    navigationOptions: {
    }
  }
}, {
  initialRouteName: 'TabNavigator'
})


const NavInit = createSwitchNavigator({
  Init: IninNavigator,
  Main: MainNavigator,
}, {
  // initialRouteName: 'Init',
  navigationOptions: {
    headerShown: false
  }
})

export const RootNavigator =  createAppContainer(NavInit)

// 参数的顺序不能变
export const middleware = createReactNavigationReduxMiddleware(
  state => state.nav,
  'root'
)


// createReduxContainer 已经在最新的有变更
const AppWithNavigationState = createReduxContainer(RootNavigator, 'root')

// const AppNavigation = createAppContainer(NavInit) // react-navigation3.x必须使用createAppContainer包裹
const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  )
}
export default App;
