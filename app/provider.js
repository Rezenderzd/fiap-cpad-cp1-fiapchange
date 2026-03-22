import { createContext, useState } from 'react';

export const AppContext = createContext();
export const AppProvider = ({ children }) => {

    const [salas, setSalas] = useState([
        {
            sala: '2CCPO',
            vagas: 2,
            capacidade: 40,
        },
        {
            sala: '2CCPW',
            vagas: 6,
            capacidade: 40,
        },
        {
            sala: '2CCPH',                  //sala flopada
            vagas: 13,
            capacidade: 40,
        },
        {
            sala: '2CCPG',
            vagas: 7,
            capacidade: 40,
        },
        {
            sala: '2CCPI',
            vagas: 8,
            capacidade: 40,
        },

    ]);
    
    const removerVaga = (salaDigitada) => {
        setSalas((prevSalas) =>
            prevSalas.map((item) => {
                if (item.sala.toUpperCase().includes(salaDigitada.toUpperCase().trim())) {
                    return { ...item, vagas: item.vagas - 1 };
                }
                return item;
            })
        );
    }

    const adicionarVaga = (salaDigitada) => {
        setSalas((prevSalas) =>
            prevSalas.map((item) => {
                if (item.sala.toUpperCase().includes(salaDigitada.toUpperCase().trim())) {
                    return { ...item, vagas: item.vagas + 1 };
                }
                return item;
            })
        );
    }

    const totalAlunosGlobal = salas.reduce((soma, item) => {
        const alunosNaSala = item.capacidade - item.vagas;
        return soma + alunosNaSala;
    }, 0);


    const [historico, setHistorico] = useState([]);
    const adicionarAoHistorico = (aluno, salaAntiga, salaAtual) => {
    const novaEntrada = {
        id: Math.random().toString(), // id único para o map, clean code para n ficar cheio de alert
        texto: `${aluno} mudou da ${salaAntiga.toUpperCase()} para ${salaAtual.toUpperCase()} realizada.`,
        data: new Date().toLocaleTimeString(), // date time do js 
    };

  // Usamos o [novo, ...antigos] para o mais recente ficar no TOPO
    setHistorico((prev) => [novaEntrada, ...prev]);
    };


    return (
        <AppContext.Provider value={{ salas, setSalas, adicionarVaga, removerVaga, totalAlunosGlobal, historico, setHistorico, adicionarAoHistorico }}>
            {children}
        </AppContext.Provider>
    );
}