import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer} from "@react-navigation/native";
import TabNavigator from "./TabNavigator";
import { createStackNavigator } from '@react-navigation/stack';
import Account from "./screens/account/Account";


const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{headerShown : false}} name="Account" component={Account} />
          <Stack.Screen options={{headerShown : false}} name="TabNavigator" component={TabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});
