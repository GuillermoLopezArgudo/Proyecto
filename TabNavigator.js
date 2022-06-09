import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Drawner3 from "./DrawnerNavigatorNave3";
import Drawner5 from "./DrawnerNavigatorNave5";


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
                  case 'Nave 5':
                    iconName = 'currency-krw'
                    break;
                case "Nave 3":
                    iconName= "mastodon"
                    break;
              }
              return <MaterialCommunityIcons name= {iconName} size={size} color={color} />
          }
        })}
      >
        <Tab.Screen name="Nave 3" component={Drawner3} />
        <Tab.Screen name="Nave 5" component={Drawner5} />
      </Tab.Navigator>
  );
};

export default TabNavigator;
