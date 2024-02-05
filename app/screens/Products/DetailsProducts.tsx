import { useState } from "react";
import { View, Text, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { ContainerImage, Content, UpperContainer } from "./styles/DetailsProducts";
export const DetalhesProduto = ({ route }) => {
  const { item } = route?.params;

  console.log(item?.name);
  return (
    <View style={{flex:1}}>
     <UpperContainer/>
      <ContainerImage>
        <Feather name="image" size={50} color="black" />
      </ContainerImage>

      <Content >
        <Text style={{ fontSize: 22, color: "black" }}>{item?.name}</Text>
        <Text style={{ fontSize: 18, color: "#777" }}>R$ {item?.price}</Text>
        <Text style={{ fontSize: 14, marginTop: 10 }}>{item?.description}</Text>
      </Content>
    </View>
  );
};
