import React, { useCallback, useState } from 'react';
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
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { getRealm } from '../../databases/realm';

function Customers({ navigation }) {
  const isDarkMode = useColorScheme() === 'dark';
  const [clients, setClients] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  async function fectClients() {
    setIsLoading(true)
    const realm = await getRealm()

    try {
      const clients = realm.objects('Clients').toJSON()
      setClients(clients)
      console.log(clients)

    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possivel carregar a lista de clientes')

    } finally {
      realm.close()
      setIsLoading(false)
    }
  }
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const navigateToNewClientScreen = () => {
    navigation.navigate('Register')
  }

  useFocusEffect(useCallback(() => {
    fectClients();
  }, []));

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <SearchInput />
      <View>

        <Pressable onPress={navigateToNewClientScreen}>
          <Text>Cadastrar cliente</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default Customers;