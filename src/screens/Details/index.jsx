import { View, Text } from "react-native";

import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import SchoolsRepository from "../../models/School/SchoolsRepository";

function DetailScreen({ route }) {
  const { item } = route.params;
  const navigation = useNavigation();

  const editUser = () => {
    navigation.navigate("Form", { user: item, edit: true });
  };

  const deleteUser = () => {
    SchoolsRepository.remove(item.id);
    navigation.navigate("Category");
  };

  return (
    <View style={styles.container}>
      {item ? (
        <Text>Detalhes do usuário</Text>
      ) : (
        <Text>Selecione um usuário para exibir seus detalhesaaaa</Text>
      )}
      <Text>{item.name}</Text>
      <Text>{item.description}</Text>
    </View>
  );
}

export default DetailScreen;
