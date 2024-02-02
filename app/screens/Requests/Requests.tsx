import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import SearchInput from '../../components/SearchInput/SearchInput';
import { Container } from './style';

function Requests(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';


  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const onSearch = (data) => {
    console.log(data)
  }
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <SearchInput onSearch={onSearch} />
      <Container>
      </Container>
    </SafeAreaView>
  );
}

export default Requests;