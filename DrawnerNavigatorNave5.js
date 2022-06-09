import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import Read from "./screens/Nave5/Read";
import Nave5 from "./screens/Nave5/Nave5";
import Update from "./screens/Nave5/Update";
import Create from "./screens/Nave5/Create";
import Delete from "./screens/Nave5/Delete";

const Drawer = createDrawerNavigator();

const DrawerNavigatorNave5 = () => {
  return (
    <Drawer.Navigator initialRouteName="Nave5">
      <Drawer.Screen name="Nave 5" component={Nave5} />
      <Drawer.Screen name="Crear Maquina" component={Create} />
      <Drawer.Screen name="Leer Maquina" component={Read} />
      <Drawer.Screen name="Actualizar Maquina" component={Update} />
      <Drawer.Screen name="Eliminar Maquina" component={Delete} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorNave5;