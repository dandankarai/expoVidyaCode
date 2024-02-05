import React, { useCallback, useEffect, useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
  Text,
  Pressable,
  Alert,
} from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";
import SearchInput from "../../components/SearchInput/SearchInput";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { getRealm } from "../../databases/realm";
import { FlatList } from "react-native-gesture-handler";
import Client from "../../components/Client/Client";
import { Container } from "./styles/Customer";
import GenericPressable from "../../components/PressableSafe/PressableSafe";

function Customers({ navigation }) {
  const isDarkMode = useColorScheme() === "dark";
  const [clients, setClients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fectClients() {
    setIsLoading(true);
    const realm = await getRealm();

    try {
      const clients = realm.objects("Clients").toJSON();
      setClients(clients);
      console.log(clients);
    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possivel carregar a lista de clientes");
    } finally {
      realm.close();
      setIsLoading(false);
    }
  }
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const navigateToNewClientScreen = () => {
    navigation.navigate("Register");
  };

  console.log(clients);

// This is crashing the app
  // useFocusEffect(
  //   useCallback(() => {
  //     console.log('deu erro')
  //     fectClients();
  //   }, [])
  // );

  return (
    <Container style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <View>
      <SearchInput />
      <GenericPressable onPress={navigateToNewClientScreen} text='Cadastrar cliente' />
        <FlatList
          data={clients}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => <Client data={item} />}
        />
      </View>
    </Container>
  );
}

export default Customers;
