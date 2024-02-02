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
import { useNavigation } from '@react-navigation/native';

function Customers({ navigation }): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const navigateToNewClientScreen = () => {
    navigation.navigate('Register')
  }

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