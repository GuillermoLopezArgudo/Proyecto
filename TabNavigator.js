import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Drawner3 from "./DrawnerNavigatorNave3";
import Drawner5 from "./DrawnerNavigatorNave5";
import User from "./screens/account/User";


import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
      <Tab.Navigator
        screenOptions={ ({ route }) => ({
          headerShown: false,
          tabBarIcon: ({color, size}) => {
              let iconName = "";
              switch(route.name){
                  case 'Nave5':
                    iconName = 'currency-krw'
                    break;
                case "Nave3":
                    iconName= "mastodon"
                    break;
                case "User":
                  iconName= "account"
                  break;
              }
              return <MaterialCommunityIcons name= {iconName} size={size} color={color} />
          }
        })}
      >
        <Tab.Screen name ="User" component={User} />
        <Tab.Screen name="Nave3" component={Drawner3} />
        <Tab.Screen name="Nave5" component={Drawner5} />
        
      </Tab.Navigator>
  );
};

export default TabNavigator;
