import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282b30",
    alignItems: "center",
    justifyContent: "center",
    color: 'white'
  },
  detail: {
    backgroundColor: '#424549',
    padding: 24,
    borderRadius: 8,
    height: '60%',
    width: 'auto',
  },
  editButton:{
    padding: 10,
    backgroundColor: "#7289da",
    borderRadius: 5,
    marginBottom: 5,
  },
  deleteButton: {
    padding: 10,
    backgroundColor: "#7289da",
    borderRadius: 5,
  }
});

export default styles;