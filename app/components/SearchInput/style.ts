import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: "center";
  align-items: "center";
  margin: 10px;
  margin-bottom: 80px;
  flex-direction: "row";
`;

export const InputContent = styled.TextInput`
  flex: 1;
  width: 343px;
  height: 50px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  display: flex;
  flex-direction: "row";
  /* justify-content: "center"; */
  /* align-items: "center"; */
  background-color: "#fff";
  border-width: 0.5px;
  border-color: "#000";
  height: 40px;
  margin: 10px;
`;
