import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Pages
import Home from '../pages/Home';

const Tab = createBottomTabNavigator();

const AppRoutes = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  )
}

export default AppRoutes;