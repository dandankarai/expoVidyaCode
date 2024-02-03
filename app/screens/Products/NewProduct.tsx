import React, { useState } from 'react';
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
  Image
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useController, useForm } from 'react-hook-form';
import { ScrollViewContainer, ContentInputs, ContentInputText, InputForm, ButtonSafe, ButtonSafeText } from '../Customer/styles/RegisterClient';
import GenericPressable from '../../components/PressableSafe/PressableSafe';
import * as ImagePicker from 'expo-image-picker';
import { ContainerButton, PressableContent, PressableText } from './styles/NewProcut';


interface InputProps {
  name: string;
  control: any;
  style?: StyleProp<ViewStyle>;
}


function NewProduct(): React.JSX.Element {
  const [image, setImage] = useState(null);
  const isDarkMode = useColorScheme() === 'dark';


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
      defaultValue: '',
      name
    })
    return (
      <InputForm
        value={field.value} onChangeText={field.onChange} style={style} />
    )
  }

  const { control, handleSubmit } = useForm()
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    // < SafeAreaView style={backgroundStyle} >
    <ScrollViewContainer>
      <ContentInputs>
        <ContentInputText>Nome</ContentInputText>
        <Input control={control} name='Nome' />
      </ContentInputs>

      <ContentInputs>
        <ContentInputText>Preço</ContentInputText>
        <Input control={control} name='Preco' />
      </ContentInputs>

      <ContentInputs>
        <ContentInputText>Descrição</ContentInputText>
        <Input control={control} name='Descricao' style={{ height: 200, flexWrap: 'wrap' }} />
      </ContentInputs>

      <ContainerButton>
        <PressableContent onPress={pickImage}>
          <PressableText>Faça o upload da foto</PressableText>
        </PressableContent>
        <Text>
          JPG e PNG, somente
        </Text>
      </ContainerButton>

      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}


      <GenericPressable onPress={() => alert('clicou')} text='Salvar' />

    </ScrollViewContainer>
  );
}

export default NewProduct;