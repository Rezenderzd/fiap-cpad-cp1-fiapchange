import {createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({children})=>{

    const [salas, setSalas] = useState([
        {
        sala:'2ccpo',
        vagas:4
        },
        {
            sala:'2ccpw',
            vagas:5,
        },
    ]);

    const removerVaga =(salaDigitada)=>{
        const salasAtualizadas = salas.map((item)=>{
            if(item.sala === salaDigitada){
                return{...item, vagas: item.vagas - 1};
            }
            return item;
        })
        setSalas(salasAtualizadas);
    }

    const adicionarVaga = (salaDigitada)=>{
        const salasAtualizadas = salas.map((item)=>{
            if(item.sala === salaDigitada){
                return{...item, vagas: item.vagas + 1};
            }
            return item;
        })
        setSalas(salasAtualizadas);
    }

    return(
        <AppContext.Provider value={{salas, setSalas, adicionarVaga, removerVaga}}>
            {children}
        </AppContext.Provider>
    );
}