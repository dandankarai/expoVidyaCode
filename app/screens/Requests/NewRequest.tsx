import React from 'react'
import { View, Text, Image } from 'react-native'
import { Container } from './styles/Request'
import { Card, TextTitle } from './styles/NewRequest'
import { Feather } from "@expo/vector-icons";


export const NewRequest = () => {
  return (
    <Container>
      <TextTitle>Produtos</TextTitle>

      <Card>
        <Feather name="image" size={50} color="black" />
        <View>
          <Text>Produto</Text>
          <Text>Cód. 1</Text>
          <Text>Quantidade</Text>
        </View>
        <Text>R$ 9.90</Text>
      </Card>
    </Container>
  )
}