import styled from "styled-components/native";

export const ScrollViewContainer = styled.ScrollView`
  flex: 1;
  margin: 24px;
  display: flex;
`;

export const ContentInputs = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ContentInputText = styled.Text`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
`;

export const InputForm = styled.TextInput`
  gap: 8px;
  height: 48px;
  border-radius: 12px;
  border: 1px;
  border-color: "#C5C6CC";
  margin-bottom: 12px;
  padding-left: 12px;
`;

export const ButtonSafe = styled.Pressable`
  width: 300px;
  height: 48px;
  border: 1px solid;
  border-radius: 12px;
  margin-bottom: 120px;
  margin-top: 42px;
  justify-content: center;
  align-items: center;
  background-color: blue;
  margin-left: 22px;
`;

export const ButtonSafeText = styled.Text`
  color: white;
`;
