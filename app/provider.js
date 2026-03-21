import { createContext, useState } from 'react';

export const AppContext = createContext();
export const AppProvider = ({ children }) => {

    const [salas, setSalas] = useState([
        {
            sala: '2ccpo',
            vagas: 4
        },
        {
            sala: '2ccpw',
            vagas: 5,
        },
    ]);
    
    const removerVaga = (salaDigitada) => {
        setSalas((prevSalas) =>
            prevSalas.map((item) => {
                if (item.sala.toLowerCase() === salaDigitada.toLowerCase()) {
                    return { ...item, vagas: item.vagas - 1 };
                }
                return item;
            })
        );
    }

    const adicionarVaga = (salaDigitada) => {
        setSalas((prevSalas) =>
            prevSalas.map((item) => {
                if (item.sala.toLowerCase() === salaDigitada.toLowerCase()) {
                    return { ...item, vagas: item.vagas + 1 };
                }
                return item;
            })
        );
    }
    return (
        <AppContext.Provider value={{ salas, setSalas, adicionarVaga, removerVaga }}>
            {children}
        </AppContext.Provider>
    );
}