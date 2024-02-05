import React from 'react';
import { ButtonSafe, ButtonSafeText } from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';

const GenericPressable = ({ onPress, text }) => {
  return (
    <ButtonSafe onPress={onPress}>
      <ButtonSafeText>{text}</ButtonSafeText>
    </ButtonSafe>
  );
};

export default GenericPressable