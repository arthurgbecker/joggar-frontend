import React from 'react';

const FormatoData = ({ dataEvento }) => {
    // Criar um objeto Date na meia-noite (00:00:00) UTC
    const data = new Date(dataEvento + 'T03:00:00Z');

    // Usar toLocaleDateString para formatar a data no fuso horário local
    const dataFormatada = data.toLocaleDateString('pt-BR');

    return (
        <>
            {dataFormatada}
        </>
    );
}

export default FormatoData;