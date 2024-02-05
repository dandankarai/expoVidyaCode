import React, { useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
  Text,
  Pressable,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  StyleProp,
  ViewStyle,
  Button,
  Image,
  Alert,
} from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";
import { useController, useForm } from "react-hook-form";
import {
  ScrollViewContainer,
  ContentInputs,
  ContentInputText,
  InputForm,
  ButtonSafe,
  ButtonSafeText,
} from "../Customer/styles/RegisterClient";
import GenericPressable from "../../components/PressableSafe/PressableSafe";
import * as ImagePicker from "expo-image-picker";
import {
  ContainerButton,
  PressableContent,
  PressableText,
} from "./styles/NewProcut";
import { yupResolver } from "@hookform/resolvers/yup";
import schemaProduct from "../../validationSchemas/ProductValidation";
import { getRealm } from "../../databases/realm";
import { useNavigation } from "@react-navigation/native";

interface InputProps {
  name: string;
  control: any;
  style?: StyleProp<ViewStyle>;
}

interface ProductProps {
  name: string;
  price: string;
  description: string;
}

function NewProduct(): React.JSX.Element {
  const [image, setImage] = useState(null);
  const isDarkMode = useColorScheme() === "dark";
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [16, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const Input = ({ name, control, style }: InputProps) => {
    const { field } = useController({
      control,
      defaultValue: "",
      name,
    });

    const onChangeText = (text) => {
      field.onChange(text)
    }
    return (
      <InputForm
        value={field.value}
        onChangeText={onChangeText}
        style={style}
      />
    );
  };

  const { control, handleSubmit, formState:{errors} } = useForm({
    resolver: yupResolver(schemaProduct),
  });

  const handleRegisterProduct = async (formData: ProductProps) => {
    const realm = await getRealm();

    try {
      setIsLoading(true);
      realm.write(() => {
        realm.create("Products", {
          ...formData,
        });
      });
      Alert.alert("Produto cadastrado com sucesso");
      realm.close;
      navigation.goBack();
    } catch (error) {
      console.log(error);
      Alert.alert("Ocorreu um erro, tente novamente mais tarde2");
    } finally {
      realm.close();
      setIsLoading(false);
    }
  };
  return (
    <ScrollViewContainer>
      <ContentInputs>
        <ContentInputText>Nome</ContentInputText>
        <Input control={control} name="Nome" />
        {errors.name?.message && (
          <Text style={{ color: "red" }}>{errors?.name?.message}</Text>
        )}
      </ContentInputs>

      <ContentInputs>
        <ContentInputText>Preço</ContentInputText>
        <Input control={control} name="Preco" />
        {errors.name?.message && (
          <Text style={{ color: "red" }}>{errors?.price?.message}</Text>
        )}
      </ContentInputs>

      <ContentInputs>
        <ContentInputText>Descrição</ContentInputText>
        <Input
          control={control}
          name="Descricao"
          style={{ height: 200, flexWrap: "wrap" }}
        />
         {errors.name?.message && (
          <Text style={{ color: "red" }}>{errors?.description?.message}</Text>
        )}
      </ContentInputs>

      <ContainerButton>
        <PressableContent onPress={pickImage}>
          <PressableText>Faça o upload da foto</PressableText>
        </PressableContent>
        <Text>JPG e PNG, somente</Text>
      </ContainerButton>

      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}

      <GenericPressable onPress={handleSubmit(handleRegisterProduct)} text="Salvar" />
    </ScrollViewContainer>
  );
}

export default NewProduct;
