import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
export default function Layout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#ED145B', tabBarStyle:{backgroundColor:'#000'}, headerStyle:{backgroundColor:'#000'}, headerTitleStyle:{color:'#ED145B'} }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="formulario"
        options={{
          title: 'Formulario',
          tabBarIcon: ({ color }) => <AntDesign name="form" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="salas"
        options={{
          title: 'Salas',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="google-classroom" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}