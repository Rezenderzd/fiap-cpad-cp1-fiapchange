import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { useContext } from 'react';
import { AppContext } from './provider.js';

export default function Sobre() {
  const router = useRouter();
  const { salas } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Salas Disponíveis</Text>
      
      <ScrollView contentContainerStyle={styles.listaSalas}>
        {salas.map((item, index) => (
          <View key={index} style={styles.cardSala}>
            <Text style={styles.salaTexto}>Sala: {item.sala}</Text>
            <Text style={styles.vagasTexto}>Vagas: {item.vagas}</Text>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.botaoVoltar} onPress={() => router.push('/')}>
        <Text style={styles.voltarTexto}>Ir para o formulário</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center', 
    backgroundColor: '#000', 
    paddingTop: 60 
  },
  titulo: { 
    fontSize: 32, 
    fontWeight: 'bold', 
    marginBottom: 24, 
    color: '#ED145B' 
  },
  listaSalas: { 
    alignItems: 'center', 
    gap: 15,
    paddingBottom: 20
  },
  cardSala: {
    width: 320,
    backgroundColor: '#1A1A1A', 
    borderLeftWidth: 5,
    borderLeftColor: '#ED145B', 
    padding: 20,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  salaTexto: { 
    color: '#fff', 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
  vagasTexto: { 
    color: '#ED145B', 
    fontSize: 16 
  },
  botaoVoltar: {
    marginVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#ED145B'
  },
  voltarTexto: { 
    fontSize: 16, 
    color: '#ED145B', 
    fontWeight: '600' 
  },
});