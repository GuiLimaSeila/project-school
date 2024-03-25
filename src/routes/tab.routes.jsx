import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import StackNavigator from "./stack.routes";
import Profile from "../screens/Profile";
import { categories } from "../data/categories";
import Form from "../screens/Form";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator   screenOptions={{
      tabBarStyle: { backgroundColor: "#424549" },
      tabBarActiveTintColor: '#7289da',
    }}>
      {categories.map((category) => (
        <Tab.Screen
          key={category.id}
          name={category.name}
          component={StackNavigator}
          initialParams={{ category }}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name={category.icon} color={color} size={size} />
            ),
          }}
        />
      ))}
      <Tab.Screen name="Cadastro" component={Form} options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="form-select" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Perfil" component={Profile} options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
