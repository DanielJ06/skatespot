import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

// Pages
import Home from '../pages/Home';

const Drawer = createDrawerNavigator();

const AppRoutes = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  )
}

export default AppRoutes;