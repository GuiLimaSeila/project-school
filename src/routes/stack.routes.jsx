import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Category from "../screens/Category";
import Details from "../screens/Details";
import Form from "../screens/Form";

const Stack = createNativeStackNavigator();

const StackNavigator = ({ route }) => {
  const { category } = route.params;
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Category"
        component={Category}
        initialParams={{ category }}
      />
      <Stack.Screen name="Detail" component={Details} />
      <Stack.Screen name="Form" component={Form} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
