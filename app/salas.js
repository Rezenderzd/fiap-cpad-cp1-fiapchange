import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useContext } from 'react';
export default function Sobre() {
  
  const router = useRouter();
  const {salas} = useContext(AppContext);

  return (
    <View style={styles.container}>
        <View style ={styles.salas}>
            <Text style={styles.sala}>Colocar sala e número baseado em variavel</Text>
        </View>
      <TouchableOpacity onPress={() => router.push('formulario')}>
        <Text style={styles.voltar}>Ir para o formulario</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container:  { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000' },
  salas:      {color: ''},
  sala:       {color: '#ED145B'},
  titulo:     { fontSize: 28, fontWeight: 'bold', marginBottom: 12 },
  descricao:  { fontSize: 16, color: '#555', marginBottom: 24 },
  voltar:     { fontSize: 16, color: '#ED145B', fontWeight: '600' },
});