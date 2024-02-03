import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { Routes } from './app/screens/routes';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterClient from './app/screens/Customer/RegisterClient';
import NewProduct from './app/screens/Products/NewProduct';

const Stack = createStackNavigator()

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator >
          <Stack.Screen name='Home' component={Routes} />

          <Stack.Screen
            options={{
              headerBackTitleVisible: false,
              headerTitle: 'Cadastro de cliente'
            }}
            name='Register'
            component={RegisterClient} />

          <Stack.Screen
            options={{
              headerBackTitleVisible: false,
              headerTitle: 'Cadastro de produto'
            }}
            name='NewProduct'
            component={NewProduct} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

export default App;