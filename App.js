import React, {Component} from 'react';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation'
import { Icon, MaterialIcons } from 'native-base';

import Main from './screens/Main'
import Push from './screens/Push'
import Modal from './screens/Modal'
import List from './screens/List'

const MainNavigation = createStackNavigator(
  {
    Main: { screen: Main },
    Push: { screen: Push },
  },
  {initialRouteName: 'Main', headerMode: 'none'}
)
const HomeNavigation = createStackNavigator(
  {
    MainNavigation: { screen: MainNavigation },
    Modal: { screen: Modal },
  },
  {initialRouteName: 'MainNavigation', mode: 'modal', headerMode: 'none'},
)

const ListNavigation = createStackNavigator(
  {
    List: { screen: List },
  },
  {initialRouteName: 'List', headerMode: 'none'}
)

const TabNavigation = createBottomTabNavigator(
  {
    Home: { screen: HomeNavigation,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
          <Icon type="FontAwesome" name="home" style={{color:tintColor}} />
        )
      }),  
    },
    List: { screen: ListNavigation,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
          <Icon type="FontAwesome" name="th-list" style={{color:tintColor}} />
        )
      }),
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#444444',
      inactiveTintColor: '#cccccc',
    },
  },
  {initialRouteName: 'Home'}
)

const AppContainer = createAppContainer(TabNavigation);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <AppContainer
        ref = {nav => {this.navigator = nav;}}
      />
    );
  }
}