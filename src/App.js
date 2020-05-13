import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Header from './Header';
import Tabela from './Tabela';
import Formulario from './Formulario';
import './App.css';
import PopUp from './PopUp';


class App extends Component {
  state = {
    autores: [{
      nome: 'Paulo',
      livro: 'React',
      preco: '1000'
    },
    {
      nome: 'Daniel',
      livro: 'Java',
      preco: '99'
    },
    {
      nome: 'Marcos',
      livro: 'Design',
      preco: '150'
    },
    {
      nome: 'Bruno',
      livro: 'DevOps',
      preco: '100'
    }],
  };

  removeAutor = (index) => {
    const { autores } = this.state;
    this.setState(
      {
        autores: autores.filter((autor, posAtual) => {
          return posAtual !== index;
        }),
      }
    )
    PopUp.exibeMensagem('success', 'Removido com sucesso');
  }

  escutadorDeSubmit = autor => {
    this.setState({ autores: [...this.state.autores, autor] });
    PopUp.exibeMensagem('success', 'Adicionado com sucesso');
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
