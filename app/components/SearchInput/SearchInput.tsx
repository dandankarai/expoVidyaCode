import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  TouchableWithoutFeedback
} from 'react-native';
import { Container, InputContent, Content } from './style';
import { FontAwesome5 } from '@expo/vector-icons';
const SearchInput = ({ onSearch }: any) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <Container>
      <Content>
        <FontAwesome5 name="search" size={24} color="black" />
        <InputContent
          placeholder="Digite sua busca..."
          value={searchTerm}
          onChangeText={setSearchTerm}
          onSubmitEditing={handleSearch}
        />
      </Content>
    </Container>
  );
};

export default SearchInput;