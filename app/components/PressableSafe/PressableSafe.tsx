import React from 'react';
import { ButtonSafe, ButtonSafeText } from './style';

const GenericPressable = ({ onPress, text }) => {
  return (
    <ButtonSafe onPress={onPress}>
      <ButtonSafeText>{text}</ButtonSafeText>
    </ButtonSafe>
  );
};

export default GenericPressable