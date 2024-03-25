import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import SchoolsRepository from "../../models/School/SchoolsRepository";

const schoolList = new SchoolsRepository()

function DetailScreen({ route }) {
  const { item } = route.params;
  const navigation = useNavigation();

  const editSchool = () => {
    navigation.navigate("Form", { user: item, edit: true });
  };

  const deleteSchool = () => {
    schoolList.remove(item.id);
    navigation.navigate("Category");
  };

  return (
    <View style={styles.container}>

      {item ? (
        <Text>Detalhes do usuário</Text>
      ) : (
        <Text>Selecione um usuário para exibir seus detalhes</Text>
      )}
      <View style={styles.detail}>
        <Text>{item.name}</Text>
        <Text>{item.email}</Text>
        <Text>{item.foundation}</Text>
        <Text>{item.workers}</Text>
        <Text>{item.classes}</Text>
        <Text>{item.addres}</Text>
        <Text>{item.phone}</Text>
        <Text>{item.ceo}</Text>

        <View style={styles.userActions}>
          <TouchableOpacity style={styles.editButton} onPress={editSchool}>
            <Text>Editar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteButton} onPress={deleteSchool}>
            <Text>Excluir</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View >
  );
}

export default DetailScreen;
