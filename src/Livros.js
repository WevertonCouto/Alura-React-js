import React, { Fragment, Component } from 'react';
import Header from './Header';
import Tabela from './Tabela';
import ApiService from './ApiService';


class Livros extends Component {
    constructor(props) {
        super(props);
        this.state = {
            livros: []
        }
    }

    componentDidMount() {
        ApiService.ListaLivros()
        .then(res => {
            this.setState(
                {
                    livros: [...this.state.livros, ...res.data]
                }
            )
        });
    }

    render() {
        return (
            <Fragment>
                <Header />
                <div className="container">
                    <h1>Página de Livros</h1>
                    <Tabela autores={this.state.livros} colunas={
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
}
export default Livros;