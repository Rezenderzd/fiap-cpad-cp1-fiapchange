import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';
import { useRouter} from 'expo-router';
import { useContext } from 'react';
import { AppContext } from './provider.js';

export default function Home() {
  const router = useRouter();
  const [nome,setNome] = useState('');
  const {salas, removerVaga, adicionarVaga} = useContext(AppContext);
  

  const apagarDados = () => {
    setNome('');
 }
 
 const enviarDados =()=>{
    if(nome.trim() === ''){
      alert('Por favor, preencha o campo nome.');
      return;
    }
    alert(`Dados enviados: ${nome}`);
    setNome('');
 }

  return (
    <View style={styles.container}>
      <View style = {styles.blocoPergunta}>
        <Text style={styles.pergunta}>Nome:</Text>
        <TextInput placeholder="Digite seu nome" style={styles.input} onChangeText={setNome} value={nome}/>
      </View>
      <View style = {styles.campoBotoes}>
        <TouchableOpacity style={styles.botaoApagar} onPress={apagarDados}>
          <Text style={styles.botaoTexto}>Apagar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoEnviar} onPress={enviarDados}>
          <Text style={styles.botaoTexto}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', alignItems:'center'},
  titulo:    { fontSize: 32, fontWeight: 'bold', marginBottom: 24, color: '#ED145B' },
  blocoPergunta: {marginBottom:20, gap:10 },
  pergunta:{color: '#ED145B', fontSize:18},
  input: {width:300, backgroundColor:'#ED145B', borderRadius:8, padding:12, fontSize:14},
  campoBotoes: {alignItems:'center', justifyContent:'space-around', flexDirection:'row', gap:30},
  botaoApagar: { backgroundColor: '#E83D84', padding: 16, borderRadius: 12, alignItems:'center', justifyContent:'center', width:150 },
  botaoEnviar: {backgroundColor: '#0ed145', padding: 16, borderRadius: 12, alignItems:'center', justifyContent:'center', width:150 },
  botaoTexto:{ color: '#000', fontSize: 16, fontWeight: '600' },
});
