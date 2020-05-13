import React, { Fragment, Component } from 'react';
import Header from './Header';
import Tabela from './Tabela';
import ApiService from './ApiService';


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
            this.setState({
                nomes: [...this.state.nomes, ...res.data]
            })
        })
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