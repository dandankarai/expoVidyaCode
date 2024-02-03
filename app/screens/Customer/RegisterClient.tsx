import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
  Text,
  Pressable,
  TextInput,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import SearchInput from '../../components/SearchInput/SearchInput';
import { useController, useForm } from 'react-hook-form';
import { ScrollViewContainer, ContentInputs, ContentInputText, InputForm, ButtonSafe, ButtonSafeText } from './styles/RegisterClient';
import GenericPressable from '../../components/PressableSafe/PressableSafe';

function RegisterClient(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const Input = ({ name, control }) => {
    const { field } = useController({
      control,
      defaultValue: '',
      name
    })
    return (
      <InputForm
        value={field.value} onChangeText={field.onChange} />
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
        <ContentInputText>Name</ContentInputText>
        <Input name='Nome' control={control} />
      </ContentInputs>

      <ContentInputs>
        <ContentInputText>CNPJ</ContentInputText>
        <Input name='CNPJ' control={control} />
      </ContentInputs>

      <ContentInputs>
        <ContentInputText>Telefone</ContentInputText>
        <Input name='Telefone' control={control} />
      </ContentInputs>

      <ContentInputs>
        <ContentInputText>CEP</ContentInputText>
        <Input name='CEP' control={control} />
      </ContentInputs>

      <ContentInputs>
        <ContentInputText>Estado</ContentInputText>
        <Input name='Estado' control={control} />
      </ContentInputs>

      <ContentInputs>
        <ContentInputText>Cidade</ContentInputText>
        <Input name='Cidade' control={control} />
      </ContentInputs>

      <ContentInputs>
        <ContentInputText>Bairro</ContentInputText>
        <Input name='Bairro' control={control} />
      </ContentInputs>

      <ContentInputs>
        <ContentInputText>Endereço</ContentInputText>
        <Input name='Endereço' control={control} />
      </ContentInputs>

      <ContentInputs>
        <ContentInputText>Número</ContentInputText>
        <Input name='Número' control={control} />
      </ContentInputs>

      <GenericPressable onPress={handleSubmit(onSubmit)} text='Cadastrar cliente' />
    </ScrollViewContainer>
  );
}

export default RegisterClient;