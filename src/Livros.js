import React, { Fragment } from 'react';
import Header from './Header';
import Tabela from './Tabela';

const Livros = () => {
    const autores = [{
        livro: 'React'
    },
    {
        livro: 'Java',
    },
    {
        livro: 'Design',
    },
    {
        livro: 'DevOps',
    }];

    return (
        <Fragment>
            <Header />
            <div className="container">
                <h1>Página de Livros</h1>
                <Tabela autores={autores} colunas={
                    [
                        {
                            nome: 'Livros',
                            prop: 'livro',
                            remover: null
                        }
                    ]
                } />
            </div>
        </Fragment>
    );
}

export default Livros;