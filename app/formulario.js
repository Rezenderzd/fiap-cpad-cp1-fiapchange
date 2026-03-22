import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { useContext } from 'react';
import { AppContext } from './provider.js';

export default function Home() {
  const router = useRouter();
  const [nome, setNome] = useState('');
  const [salaAtual, setSalaAtual] = useState('');
  const [salaDestino, setSalaDestino] = useState('');
  const [motivo, setMotivo] = useState('');

  const { salas, removerVaga, adicionarVaga, adicionarAoHistorico } = useContext(AppContext);

  const apagarDados = () => {
    setNome('');
    setSalaAtual('');
    setSalaDestino('');
    setMotivo('');
  }

  const enviarDados = () => {
  if (nome.trim() === '' || salaAtual.trim() === '' || salaDestino.trim() === '' || motivo.trim() === '') {
    Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    return;
  }

  // const existeSalaOrigem = salas.find(s => s.sala.toUpperCase() === salaAtual.toUpperCase());
  // const existeSalaDestino = salas.find(s => s.sala.toUpperCase() === salaDestino.toUpperCase()); 
  // caso queiram usar sem include coloque "=== salaDigitada.toUpperCase())" nas funcoes de adicionar 

  
  const existeSalaOrigem = salas.find(s => s.sala.toUpperCase().includes(salaAtual.toUpperCase().trim()));
  const existeSalaDestino = salas.find(s => s.sala.toUpperCase().includes(salaDestino.toUpperCase().trim()));
  

  if (!existeSalaOrigem || !existeSalaDestino) {
    Alert.alert('Erro', 'Sala não encontrada. Verifique os nomes digitados.');
    return;
  }

  if (existeSalaDestino.vagas <= 0) {
    Alert.alert('Erro', 'A sala de destino não possui mais vagas.');
    return;
  }

  const chance = Math.random();
  const motivosFalha = [
  "Seu Motivo não foi aceito.",
  "Existem muitos alunos com interesse nessa sala, tente novamente nos proximos meses.",
  "Devido ao seu baixo desempenho academico sua solicitação foi negada.",
  "Atualmente a mudança de sala está fora do ar.",
  "Solicitação negada: o coordenador do curso precisa validar esta troca manualmente.",
  "Aluno já possui uma solicitação de troca pendente de aprovação."
];

  if (chance > 0.7) {
  const motivoAleatorio = motivosFalha[Math.floor(Math.random() * motivosFalha.length)];
  Alert.alert('Erro', motivoAleatorio);
  return;
}
  adicionarAoHistorico(nome, salaAtual, salaDestino);
  adicionarVaga(existeSalaOrigem.sala);
  removerVaga(existeSalaDestino.sala);

  Alert.alert('Sucesso', `Mudança de ${nome} processada para ${salaDestino.toUpperCase()}!\nMotivo: ${motivo}`);
  apagarDados();
};

  return (
    <View style={styles.container}>
      <View style={styles.blocoPergunta}>
        <Text style={styles.pergunta}>Nome:</Text>
        <TextInput 
          placeholder="Seu nome" 
          style={styles.input} 
          onChangeText={setNome} 
          value={nome} 
        />
      </View>

      <View style={styles.blocoPergunta}>
        <Text style={styles.pergunta}>Sala Atual:</Text>
        <TextInput 
          placeholder="Ex: 2CCPO" 
          style={styles.input} 
          onChangeText={setSalaAtual} 
          value={salaAtual} 
          autoCapitalize="none"
        />
      </View>

      <View style={styles.blocoPergunta}>
        <Text style={styles.pergunta}>Sala Destino:</Text>
        <TextInput 
          placeholder="Ex: 2CCPW" 
          style={styles.input} 
          onChangeText={setSalaDestino} 
          value={salaDestino} 
          autoCapitalize="none"
        />
      </View>

      <View style={styles.blocoPergunta}>
        <Text style={styles.pergunta}>Motivo da Troca:</Text>
        <TextInput 
          placeholder="Explique o motivo" 
          style={[styles.input, { height: 80 }]} 
          onChangeText={setMotivo} 
          value={motivo} 
          multiline={true}
        />
      </View>

      <View style={styles.campoBotoes}>
        <TouchableOpacity style={styles.botaoApagar} onPress={apagarDados}>
          <Text style={styles.botaoTexto}>Apagar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoEnviar} onPress={enviarDados}>
          <Text style={styles.botaoTexto}>Enviar</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={{ marginTop: 20 }} onPress={() => router.push('/salas')}>
        <Text style={styles.pergunta}>Ver lista de salas →</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', alignItems: 'center', paddingTop: 30 },
  blocoPergunta: { marginBottom: 15, gap: 5 },
  pergunta: { color: '#ED145B', fontSize: 16 },
  input: { width: 300, backgroundColor: '#ED145B', borderRadius: 8, padding: 12, fontSize: 14, color: '#000' },
  campoBotoes: { alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row', gap: 20 },
  botaoApagar: { backgroundColor: '#ED145B', padding: 16, borderRadius: 12, alignItems: 'center', width: 140 },
  botaoEnviar: { backgroundColor: '#0ed145', padding: 16, borderRadius: 12, alignItems: 'center', width: 140 },
  botaoTexto: { color: '#000', fontSize: 16, fontWeight: '600' },
});