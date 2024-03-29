import React from 'react';
import { Pressable, SafeAreaView, StatusBar, useColorScheme } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import SearchInput from '../../components/SearchInput/SearchInput';
import { Container } from './styles/Request';
import GenericPressable from '../../components/PressableSafe/PressableSafe';

function Requests({ navigation }): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const navigateToNewRequest = () => {
    navigation.navigate("NewRequest")
  }

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const onSearch = (data) => {
    console.log(data)
  }
  return (
    <Container style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <SearchInput onSearch={onSearch} />
      <GenericPressable onPress={navigateToNewRequest} text='Cadastrar Pedido' />
    </Container>
  );
}

export default Requests;