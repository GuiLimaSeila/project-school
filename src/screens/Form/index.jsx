import { View, Button, TextInput, TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import Title from "../../components/Title";
import { useState, useEffect} from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import School from "../../models/School/School";
import SchoolsRepository from "../../models/School/SchoolsRepository";
import { useNavigation } from "@react-navigation/native";

const schoolList = new SchoolsRepository
let schoolId = 1;

export default function Form({ route }) {
  let { school, edit } = 0;

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [foundation, setFoundation] = useState("");
    const [workers, setWorkers] = useState("");
    const [classes, setClasses] = useState("");
    const [addres, setAddres] = useState("");
    const [phone, setPhone] = useState("");
    const [ceo, setCeo] = useState("");
    const [isUpdate, setIsUpdate] = useState(edit);

    const navigation = useNavigation();

    useEffect(() => {
      if (edit) {
        setName(school.name);
        setEmail(school.email);
        setFoundation(school.foundation);
        setWorkers(String(school.workers));
        setClasses(school.classes);
        setAddres(school.addres);
        setPhone(String(school.phone));
        setCeo(school.ceo);
        setIsUpdate(true);
      } else {
        clearInputs();
      }
    }, [school, edit]);

    const handleUserAction = () => {
      if (isUpdate) {
        schoolList.update(school.id, name, email, foundation, parseInt(workers), classes, addres, parseInt(phone), ceo|| 0);
        clearInputs();
      } else {
        const newSchool= new School(schoolId, name, email, foundation, parseInt(workers), classes, addres, parseInt(phone), ceo || 0);
        schoolId++
        schoolList.add(newSchool);
        clearInputs();
      }
      navigation.navigate("Category");
    };
  
    const clearInputs = () => {
      setIsUpdate(false)
      edit = false;
      setName("");
      setEmail("");
      setFoundation("");
      setWorkers("");
      setClasses("");
      setAddres("");
      setPhone("");
      setCeo("");
    };

    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date) => {
      console.warn("A date has been picked: ", date);
      hideDatePicker();
    };
  return (
    <View style={styles.container}>
      <View style={styles.detail}>
      <Title title="Form" />
      <Title title={isUpdate ? "Editar Usuário" : "Novo Usuário"} />
      <Button title="Selecione o ano da fundação da Escola" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        onChange={setFoundation}
        value={foundation}
      />
             <TextInput
          placeholder="Digite o nome da Escola"
          style={styles.userInput}
          onChangeText={setName}
          value={name}
        />
        <TextInput
          placeholder="Digite o email da Escola"
          style={styles.userInput}
          onChangeText={setEmail}
          value={email}
        />
                <TextInput
          placeholder="Digite a quantidade de trabalhadores da Escola"
          style={styles.userInput}
          onChangeText={(text) => setWorkers(text)}
          value={workers}
          keyboardType="numeric"
        />
                <TextInput
          placeholder="Digite as classes da Escola"
          style={styles.userInput}
          onChangeText={setClasses}
          value={classes}
        />
                <TextInput
          placeholder="Digite o endereço da Escola"
          style={styles.userInput}
          onChangeText={setAddres}
          value={addres}
        />
                <TextInput
          placeholder="Digite o numero de telefone da Escola"
          style={styles.userInput}
          onChangeText={(text) => setPhone(text)}
          value={phone}
          keyboardType="numeric"
        />
                <TextInput
          placeholder="Digite ao dono da Escola"
          style={styles.userInput}
          onChangeText={setCeo}
          value={ceo}
        />

<TouchableOpacity style={styles.button} onPress={handleUserAction}>
        <Text>{isUpdate ? "Salvar Alterações" : "Criar Usuário"}</Text>
      </TouchableOpacity>

      {isUpdate && (
        <TouchableOpacity style={styles.button} onPress={clearInputs}>
          <Text>Cancelar Edição</Text>
        </TouchableOpacity>
      )}
      </View>
    </View>
  );
}
