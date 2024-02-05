import React, { useState } from 'react';
import { Container, InputContent, Content } from './style';
const SearchInput = ({ onSearch }: any) => {

  
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <Container>
      <Content>
        <InputContent
          placeholder="Pesquisar"
          value={searchTerm}
          onChangeText={setSearchTerm}
          onSubmitEditing={handleSearch}
        />
      </Content>
    </Container>
  );
};

export default SearchInput;