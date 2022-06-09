import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import Read from "./screens/Nave3/Read";
import Nave3 from "./screens/Nave3/Nave3";
import Update from "./screens/Nave3/Update";
import Create from "./screens/Nave3/Create";
import Delete from "./screens/Nave3/Delete";

const Drawer = createDrawerNavigator();

const DrawerNavigatorNave3 = () => {
  return (
    <Drawer.Navigator initialRouteName="Nave3">
      <Drawer.Screen name="Nave 3" component={Nave3} />
      <Drawer.Screen name="Crear Maquina" component={Create} />
      <Drawer.Screen name="Leer Maquina" component={Read} />
      <Drawer.Screen name="Actualizar Maquina" component={Update} />
      <Drawer.Screen name="Eliminar Maquina" component={Delete} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorNave3;