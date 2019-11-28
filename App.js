import React from 'react';
import { View, Text } from 'react-native'
import LoginScreen from './src/screen/LoginUser'
import MapsScreen from './src/screen/MapsScreen'
import permissionLocation from './src/API/permissionLocation'
import { createStackNavigator } from 'react-navigation-stack'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    permissionLocation();
  }
  render() {
    const LoginStack = createStackNavigator({
      Login: {
        screen: LoginScreen,
        navigationOptions: {
          header: null
        }
      }
    });
    const MapsStack = createStackNavigator({
      Maps: {
        screen: MapsScreen,
        navigationOptions: {
          header: null
        }
      }
    });
    const AppRouter1 = createAppContainer(
      createSwitchNavigator({
        LoginSrc: { screen: LoginStack },
        AppSrc: { screen: MapsStack }
      })
    );
    return (
      <AppRouter1 />
    )
  }
}