import React, { Fragment } from 'react';
import Header from './Header';
import Tabela from './Tabela';

const Autores = () => {
    const autores = [{
        nome: 'Paulo',
    },
    {
        nome: 'Daniel',
    },
    {
        nome: 'Marcos',
    },
    {
        nome: 'Bruno',
    }];

    return (
        <Fragment>
            <Header />
            <div className="container mb-10">
                <h1>Página de autores</h1>
                <Tabela autores={autores} colunas={
                    [
                        {
                            nome: 'Autores',
                            prop: 'nome',
                            remover: null
                        }
                    ]
                } />
            </div>
        </Fragment>
    );
}

export default Autores;