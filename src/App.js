import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Header from './Header';
import Tabela from './Tabela';
import Formulario from './Formulario';
import './App.css';
import PopUp from './PopUp';
import ApiService from './ApiService';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      autores: [],
    };
  }

  removeAutor = (id) => {
    const { autores } = this.state;
    this.setState(
      {
        autores: autores.filter((autor) => {
          return autor.id !== id;
        }),
      }
    )
    PopUp.exibeMensagem('success', 'Removido com sucesso');
    ApiService.RemoveAutor(id)
  }

  escutadorDeSubmit = autor => {
    ApiService.CriaAutor(JSON.stringify(autor))
      .then(res => res.data)
      .then(autor => {
        this.setState({ autores: [...this.state.autores, autor] });
        PopUp.exibeMensagem('success', 'Adicionado com sucesso');
      })
  }

  componentDidMount() {
    ApiService.ListaAutores()
      .then(res => {
        this.setState({
          autores: [...this.state.autores, ...res.data]
        })
      });
  }

  render() {
    return (<Fragment>
      <Header />
      <div className="container mb-10">
        <h1>Casa do Código</h1>
        <Tabela autores={this.state.autores} removeAutor={this.removeAutor} colunas={
          [
            {
              nome: 'Autores',
              prop: 'nome',
              remover: null
            },
            {
              nome: 'Livros',
              prop: 'livro',
              remover: null
            },
            {
              nome: 'Preços',
              prop: 'preco',
              remover: null
            },
            {
              nome: 'Remover',
              remover: (i) => this.removeAutor(i)
            }
          ]
        } />
        <Formulario escutadorDeSubmit={this.escutadorDeSubmit} />
      </div>
    </Fragment>);
  }
}

export default App;
