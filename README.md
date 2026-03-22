#  Gestão de Mudança de Salas para a FIAP

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=D04A37)
![Context API](https://img.shields.io/badge/Context_API-563D7C?style=for-the-badge&logo=react&logoColor=white)

## 🎯 Sobre o Projeto
Anteriormente, o processo de solicitação e atualização de mudança de salas na **FIAP** era um processo manual e demorado. Este aplicativo foi desenvolvido para modernizar essa gestão, permitindo que alunos e administradores realizem a troca de ambiente com apenas alguns cliques.

O sistema gerencia em tempo real a disponibilidade de vagas, garantindo que nenhuma sala ultrapasse sua capacidade máxima e mantendo o histórico de motivos da troca.

## 🚀 Funcionalidades
* **Formulário Inteligente:** Cadastro de troca com validação de existência de sala e campo de motivo.
* **Gestão de Vagas (Real-time):** Ao realizar uma troca, o app libera 1 vaga na sala de origem e ocupa 1 vaga na sala de destino.
* **Suporte a Identificadores FIAP:** Aceita salas com nomes alfanuméricos (ex: `2ccpo` e `2ccpw`).
* **Visualização de Status:** Listagem dinâmica com `map` de todas as salas e suas respectivas ocupações.

## 🛠️ Tecnologias Utilizadas
* **Framework:** Expo (React Native)
* **Navegação:** Expo Router
* **Gerenciamento de Estado:** React Context API (Provider Pattern)
* **Estilização:** StyleSheet (Design System FIAP: Dark & Pink)

## 🏁 Como Iniciar

### Pré-requisitos
* Node.js instalado.
* Aplicativo **Expo Go** instalado no seu dispositivo móvel.

### Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/Rezenderzd/cp1-react-native.git
2. Instale as dependências:

    ```Bash
    npm install --legacy-peer-deps
    ```
3. Inicie o servidor com limpeza de cache:

    ```Bash
    npx expo start -c
    ```

### 📖 Como Funciona? (Regra de Negócio)
O aplicativo utiliza o Provider para garantir que as atualizações de estado sejam seguras:

1. Validação: O sistema busca as salas no AppContext ignorando diferenças entre maiúsculas e minúsculas.

2. Troca de Vagas: * adicionarVaga(salaAtual): Soma +1 na sala de onde o aluno saiu.

3. Persistência: Os dados são refletidos instantaneamente na aba de listagem de salas.

### 👥 Contribuidores
563415 Fernando Caires Silva

563500 Guilherme Martins Rezende

563567 Raphael Mischiatti de Souza

Desenvolvido para o CP1 - Faculdade de Informática e Administração Paulista (FIAP).
