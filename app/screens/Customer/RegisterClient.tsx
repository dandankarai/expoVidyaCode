import React, { useState } from 'react';
import {
  useColorScheme,
  Alert
} from 'react-native';
import uuid from 'react-native-uuid';
import { useController, useForm } from 'react-hook-form';
import { ScrollViewContainer, ContentInputs, ContentInputText, InputForm, ButtonSafe, ButtonSafeText } from './styles/RegisterClient';
import GenericPressable from '../../components/PressableSafe/PressableSafe';
import { useDispatch, useSelector } from 'react-redux';
import { setName, setCnpj, setCellphone, setCep, setState, setCity, setNeighborhood, setAddress, setHouseNumber } from '../../redux/Reducer/clienteReducer';
import { getRealm } from '../../databases/realm';
import { useNavigation } from '@react-navigation/core';

interface formDataProps {
  name: string,
  cnpj: string,
  cellphone: string,
  cep: string,
  state: string,
  city: string,
  neighborhood: string,
  address: string,
  houseNumber: string
}

function RegisterClient() {
  const [isLoading, setIsLoading] = useState(false)
  const { control, handleSubmit } = useForm()

  const navigation = useNavigation()

  function handleBack() {
    navigation.goBack()
  }

  const Input = ({ name, control }) => {
    const { field } = useController({
      control,
      defaultValue: '',
      name
    })

    const onChangeText = (text) => {
      field.onChange(text)
    };


    return (
      <InputForm
        value={field.value} onChangeText={onChangeText} />
    )
  }

  const onSubmit = async (formData: formDataProps) => {
    console.log('formData:', formData);
    const realm = await getRealm()

    try {
      setIsLoading(true)

      realm.write(() => {
        realm.create('Clients', {
          ...formData
        });
        
      })

      Alert.alert('Cliente cadastrado com sucesso!')
      realm.close()
      handleBack()

    } catch (error) {
      console.log(error)
      Alert.alert('Ocorreu um erro ao cadastrar um novo cliente!')

    } finally {
      console.log('caiu aqui no finally')
      realm.close()
      setIsLoading(false)
    }
  }
  return (
    <ScrollViewContainer>

      <ContentInputs>
        <ContentInputText>Nome</ContentInputText>
        <Input name='name' control={control} />
      </ContentInputs>

      <ContentInputs>
        <ContentInputText>CNPJ</ContentInputText>
        <Input name='cnpj' control={control} />
      </ContentInputs>

      <ContentInputs>
        <ContentInputText>Telefone</ContentInputText>
        <Input name='cellphone' control={control} />
      </ContentInputs>

      <ContentInputs>
        <ContentInputText>CEP</ContentInputText>
        <Input name='cep' control={control} />
      </ContentInputs>

      <ContentInputs>
        <ContentInputText>Estado</ContentInputText>
        <Input name='state' control={control} />
      </ContentInputs>

      <ContentInputs>
        <ContentInputText>Cidade</ContentInputText>
        <Input name='city' control={control} />
      </ContentInputs>

      <ContentInputs>
        <ContentInputText>Bairro</ContentInputText>
        <Input name='neighborhood' control={control} />
      </ContentInputs>

      <ContentInputs>
        <ContentInputText>Endereço</ContentInputText>
        <Input name='address' control={control} />
      </ContentInputs>

      <ContentInputs>
        <ContentInputText>Número</ContentInputText>
        <Input name='houseNumber' control={control} />
      </ContentInputs>

      <GenericPressable onPress={handleSubmit(onSubmit)} text='Cadastrar cliente' />
    </ScrollViewContainer>
  );
}

export default RegisterClient;