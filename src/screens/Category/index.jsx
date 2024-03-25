import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import styles from "./styles";
import Title from "../../components/Title";
import SchoolsRepository from "../../models/School/SchoolsRepository";

const schoolList = new SchoolsRepository

export default function Category({ route, navigation }) {
  const { category } = route.params;
  const navigation2 = useNavigation();
  const isFocused = useIsFocused();
  const [allSchools, setAllSchools] = useState([]);

  useEffect(() => {
    if (isFocused) {
      const schools = schoolList.getAll();
      setAllSchools(schools);
    }
  }, [isFocused]);


  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate("Detail", { item })}>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Title title="Escolha A Escola" />
      <FlatList
        data={category.items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      {allSchools.length > 0 ? (
        <View style={styles.userList}>
          {allSchools.map((school) => (
            <View key={school.id} style={styles.userItem}>
              <View>
                <Text style={styles.userName}>{school.name}</Text>
              </View>

              <View style={styles.userActions}>
                <TouchableOpacity
                  style={styles.detailsButton}
                  onPress={() => navigation.navigate("Details", { route: school })}
                >
                  <Text>Detalhes</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      ) : (
        <Text>Não há Escolas cadastrados</Text>
      )}
    </View>
  );
}
