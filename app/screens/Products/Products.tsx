import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
  Text,
  Pressable,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import SearchInput from '../../components/SearchInput/SearchInput';

function Products({ navigation }): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const navigateToNewProduct = () => {
    console.log('clicou')
    navigation.navigate('NewProduct')
  }

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <SearchInput />
      <Pressable onPress={navigateToNewProduct}>
        <Text>Cadastrar Produto</Text>
      </Pressable>
    </SafeAreaView>
  );
}

export default Products;