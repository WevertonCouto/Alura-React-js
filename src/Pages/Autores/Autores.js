import React, { Fragment, Component } from 'react';
import Header from '../../Components/Header/Header';
import Tabela from '../../Components/Tabela/Tabela';
import ApiService from '../../Utils/ApiService';
import PopUp from '../../Utils/PopUp';

class Autores extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nomes: [],
        }
    }

    componentDidMount() {
        ApiService.ListaNomes()
        .then(res => {
            if (res.message === 'success') {
                this.setState({
                    nomes: [...this.state.nomes, ...res.data]
                })
            }
        }).catch(err => {
            PopUp.exibeMensagem('error', 'Erro na comunicação com a Api, não foi possível listar os autores');
        });
    }

    render() {
        return (
            <Fragment>
                <Header />
                <div className="container mb-10">
                    <h1>Página de autores</h1>
                    <Tabela autores={this.state.nomes} colunas={
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
}
export default Autores;