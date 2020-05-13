import React, { Component } from 'react';
import FormValidator from './FormValidator';
import PopUp from './PopUp';

class Formulario extends Component {

    constructor(props) {
        super(props);
        this.validador = new FormValidator([{
            campo: 'nome',
            metodo: 'isEmpty',
            validaQuando: false,
            mensagem: 'Entre com um nome'
        }, {
            campo: 'livro',
            metodo: 'isEmpty',
            validaQuando: false,
            mensagem: 'Entre com um livro'
        }, {
            campo: 'preco',
            metodo: 'isInt',
            args: [{ min: 0, max: 99999 }],
            validaQuando: true,
            mensagem: 'Ente com um valor número'
        }]);


        this.stateInicial = {
            nome: '',
            livro: '',
            preco: '',
            validacao: this.validador.valido()
        }

        this.state = this.stateInicial;
    }

    escutadorDeInput = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    submitFormulario = () => {
        const validacao = this.validador.valida(this.state);
        if (validacao.isValid) {
            this.props.escutadorDeSubmit(this.state);
            this.setState(
                this.stateInicial
            )
        } else {
            const { nome, livro, preco } = validacao;
            const campos = [nome, livro, preco];
            const camposInvalidos = campos.filter(elem => {
                return elem.isInvalid;
            });
            camposInvalidos.forEach(campo => {
                console.log(campo);
                PopUp.exibeMensagem('error', campo.message);
            });
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