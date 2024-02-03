import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import Requests from './Requests/Requests';
import Products from './Products/Products';
import Customers from './Customer/Customer';


const Tab = createBottomTabNavigator();
export function Routes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: 'blue', }} >
      <Tab.Screen
        name="Pedidos"
        options={{
          headerTitleAlign: 'center',
          tabBarIcon: ({ color }) => <FontAwesome5 name="shopping-bag" size={24} />,
          headerTitleStyle: { fontSize: 17 },

        }}
        component={Requests}
      />
      <Tab.Screen
        options={{
          headerTitleAlign: 'center',
          tabBarIcon: ({ color }) => <FontAwesome5 name="user-alt" size={24} />,
          headerTitleStyle: { fontSize: 17 },
        }}
        name="Clientes"
        component={Customers}
      />


      <Tab.Screen
        options={{
          headerTitleAlign: 'center',
          tabBarIcon: ({ color }) => <FontAwesome5 name="store" size={24} />,
          headerTitleStyle: { fontSize: 17 },
        }}
        name="Produtos"
        component={Products} />
    </Tab.Navigator>
  );
}
