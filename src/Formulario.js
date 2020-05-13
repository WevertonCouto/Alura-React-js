import React, { Component } from 'react';
import FormValidator from './FormValidator';

class Formulario extends Component {

    constructor(props) {
        super(props);
        this.stateInicial = {
            nome: '',
            livro: '',
            preco: ''
        }
        this.state = this.stateInicial;
        this.validador = new FormValidator({
            campo: 'nome',
            metodo: 'isEmpty'
        });
    }

    escutadorDeInput = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    submitFormulario = () => {

        if (this.validador.valida(this.state)) {
            this.props.escutadorDeSubmit(this.state);
            this.setState(
                this.stateInicial
            )
        }
    }

    render() {

        const { nome, livro, preco } = this.state;

        return (<form>
            <div className="row">
                <div className="input-field col s4">
                    <label htmlFor="nome" className="input-field">Nome</label>
                    <input
                        id="nome"
                        type="text"
                        name="nome"
                        value={nome}
                        onChange={this.escutadorDeInput}
                        className="validate"
                    />
                </div>
                <div className="input-field col s4">
                    <label htmlFor="livro" className="input-field">Livro</label>
                    <input
                        id="livro"
                        type="text"
                        name="livro"
                        value={livro}
                        onChange={this.escutadorDeInput}
                        className="validate"
                    />
                </div>
                <div className="input-field col s4">
                    <label htmlFor="preco" className="input-field">Preço</label>
                    <input
                        id="preco"
                        type="text"
                        name="preco"
                        value={preco}
                        onChange={this.escutadorDeInput}
                        className="validate"
                    />
                </div>
            </div>
            <button type="button" onClick={this.submitFormulario} className="btn waves-effects waves-light indigo lighten-2">Salvar
            </button>
        </form>);
    }
}
export default Formulario;