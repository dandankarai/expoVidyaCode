import React, { useCallback, useEffect, useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  Text,
  FlatList,
} from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";
import GenericPressable from "../../components/PressableSafe/PressableSafe";
import {
  ContainerCard,
  ContainerTouch,
  SearchInput
} from "./styles/Products";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

function Products() {
  const isDarkMode = useColorScheme() === "dark";
  const navigation = useNavigation();
  const [searchTerm, setSearchTerm] = useState("");

  const navigateToNewProduct = () => {
    navigation.navigate("NewProduct");
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Chiclete com Banana",
      price: 23.99,
      image: "../../assets/cardImage.svg",
      description:
        "O álbum do Chiclete com Banana, pulsante e cativante, oferece uma fusão envolvente de ritmos baianos, destacando-se pela energia contagiante do axé. Letras vibrantes, melodias dançantes e batidas animadas, consagrando a banda como ícone do carnaval e da música brasileira",
    },
    {
      id: 2,
      name: "Banda Calypso",
      price: 23.99,
      image: "../../assets/cardImage.svg",
      description:
        "A Banda Calypso, liderada pelos vocalistas Joelma e Chimbinha, foi um ícone da música brega/pop do Brasil. Conhecida por sua energia contagiante, misturou ritmos como calypso, carimbó e tecnobrega. A banda se destacou nas décadas de 2000, conquistando fãs com seu estilo único e performances vibrantes.",
    },
    {
      id: 3,
      name: "Xuxa",
      price: 23.99,
      image: "../../assets/cardImage.svg",
      description:
        "Só Para Baixinhos é uma série de álbuns infantis da icônica apresentadora Xuxa. Lançados nos anos 90, esses álbuns encantaram crianças com músicas alegres, letras educativas e participações especiais. Xuxa cativou o público infantil, tornando-se uma referência na cultura brasileira para as gerações mais jovens",
    },
    {
      id: 4,
      name: "Banda Dejavi",
      price: 23.99,
      image: "../../assets/cardImage.svg",
      description:
        " Suas canções melódicas e letras apaixonadas conquistaram fãs, destacando-se no cenário musical da época. O Dejavu deixou uma marca nostálgica, especialmente com seu hit marcante.",
    },
  ]);

  const filteredProducts = products.filter((item) =>
    item.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  const handlePress = (item: any) => {
    navigation.navigate("DetalhesProduto", { item });
  };

  const renderItem = ({ item }) => (
    <ContainerTouch onPress={() => handlePress(item)}>
      <ContainerCard>
        <Feather name="image" size={24} color="black" />
        <Text>{item.name}</Text>
        <Text>{item.price}</Text>
      </ContainerCard>
    </ContainerTouch>
  );

  return (
    <SafeAreaView style={{ justifyContent: "center", alignItems: "center" }}>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={backgroundStyle.backgroundColor}
      />
       
       <SearchInput
         style={{ height: 40, borderColor: "gray", borderWidth: 1, margin: 10 }}
         placeholder="Pesquisar"
         onChangeText={(text) => setSearchTerm(text)}
         value={searchTerm}
       />

      <GenericPressable
        onPress={navigateToNewProduct}
        text="Cadastrar Produto"
      />

      {searchTerm === "" ? (
        <FlatList
          horizontal={false}
          data={products}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ padding: 10 }}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
      ) : (
        <FlatList
          horizontal={false}
          data={filteredProducts}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ padding: 10 }}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
      )}
    </SafeAreaView>
  );
}

export default Products;
