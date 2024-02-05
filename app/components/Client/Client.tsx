import { View,Text } from "react-native";

type ClientProps = {
  data: any; // Adjust the type of 'data' accordingly
};

const Client: React.FC<ClientProps> = ({ data }) => {
  // Your component logic here
  return (
    <View>
      <Text>{data.name}</Text>
      {/* Add more JSX as needed */}
    </View>
  );
};

export default Client;