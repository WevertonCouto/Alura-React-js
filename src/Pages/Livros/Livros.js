import React, { Fragment, Component } from 'react';
import Header from '../../Components/Header/Header';
import Tabela from '../../Components/Tabela/Tabela';
import ApiService from '../../Utils/ApiService';
import PopUp from '../../Utils/PopUp';

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
            if (res.message === 'success') {
                this.setState(
                    {
                        livros: [...this.state.livros, ...res.data]
                    }
                );
            }
        })
        .catch(err => {
            PopUp.exibeMensagem('error', 'Erro na comunicação com a Api, não foi possível listar os livros');
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