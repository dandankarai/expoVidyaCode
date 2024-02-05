import React, { useCallback, useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
  Text,
  Pressable,
  Alert,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import SearchInput from '../../components/SearchInput/SearchInput';
import { FlatList } from 'react-native-gesture-handler';
import { getRealm } from '../../databases/realm';
import { useFocusEffect } from '@react-navigation/core';

function Products({ navigation }) {
  const isDarkMode = useColorScheme() === 'dark';


  const navigateToNewProduct = () => {
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