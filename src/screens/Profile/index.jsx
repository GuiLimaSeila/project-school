import { StatusBar, Text, View } from "react-native";

import styles from "./styles";
import { useState } from "react";
import Description from "../../components/Description";


export default function Profile() {
  const [item] = useState([
    { id: 1, image: require('../../../assets/592581c9-21c0-403e-9144-ef5a24ec42a5.jpg'), desc: "Meu nome é guilherme henrique Jerônimo de Lima, mais conhecido como Lima😂, tenho 17 anos, moro em Valinhos, sou estudante do 3 ano do Ensino Médio do SESI e estou cursando Desenvolvimento de Sistema no SENAI" }
]);
  return (
    <View style={styles.container}>
            <Text style={styles.title}>Guilherme Lima</Text>
            {item.map(itens => (
                <Description image={itens.image} description={itens.desc}  id={itens.id}/>
            ))
            }

            <StatusBar style="auto" />
    </View>
  );
}
