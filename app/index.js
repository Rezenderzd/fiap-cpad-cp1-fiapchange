import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
export default function Home() {
  const router = useRouter();
  return (
    <View style={styles.container}>
        <Image
            source={{uri:"https://www.100security.com.br/images/e-u-br-fiap.png"}}
            style={styles.imagem}
        />
        <Text style={styles.titulo}>Bem vindo ao FiapChange!</Text>
        <Text style ={styles.subtitulo}>O melhor aplicativo para mudar de sala!</Text>  
        <Text style={styles.curso}>Ciências da computação 2º ano</Text>
      <TouchableOpacity style={styles.botao} onPress={() => router.push('/formulario')}>
        <Text style={styles.botaoTexto}>Ir para o formulario</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000' },
  imagem:{ width: 200, height: 200, marginBottom: 14 },
  titulo:    { fontSize: 26, fontWeight: 'bold', marginBottom: 20, color:'#ED145B', alignItems:'center', justifyContent:'center' },
  subtitulo:{fontSize: 22, color:'#ED145B', alignItems:'center', justifyContent:'center', marginBottom:10 },
  curso:{ fontSize:18, color:'#ED145B', alignItems:'center', justifyContent:'center', marginBottom:40 },
  botao:     { backgroundColor: '#ED145B', padding: 16, borderRadius: 12 },
  botaoTexto:{ color: '#000', fontSize: 16, fontWeight: '600' },
});
