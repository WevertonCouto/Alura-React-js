import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Header from '../../Components/Header/Header';
import Tabela from '../../Components/Tabela/Tabela';
import Formulario from '../../Components/Formulario/Formulario';
import './Home.css';
import PopUp from '../../Utils/PopUp';
import ApiService from '../../Services/ApiService';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      autores: [],
    };
  }

  removeAutor = (id) => {
    const { autores } = this.state;

    const autoresAtualizado = autores.filter(autor => {
      return autor.id !== id;
    });
    ApiService.RemoveAutor(id)
      .then(res => {
        if (res.message === 'deleted') {
          PopUp.exibeMensagem('success', 'Removido com sucesso');
          this.setState({ autores: [...autoresAtualizado] });
        }
      })
      .catch(err => {
        PopUp.exibeMensagem('error', 'Erro na comunicação com a Api, não foi possível remover um autor');
      });
  }

  escutadorDeSubmit = autor => {
    ApiService.CriaAutor(JSON.stringify(autor))
      .then(res => {
        if (res.message === 'success') {
          this.setState({ autores: [...this.state.autores, res.data] });
          PopUp.exibeMensagem('success', 'Adicionado com sucesso');
        }
      })
      .catch(err => {
        PopUp.exibeMensagem('error', 'Erro na comunicação com a Api, não foi possível adicionar um autor');
      });
  }

  componentDidMount() {
    ApiService.ListaAutores()
      .then(res => {
        if (res.message === 'success') {
          this.setState({
            autores: [...this.state.autores, ...res.data]
          })
        }
      })
      .catch(err => {
        PopUp.exibeMensagem('error', 'Erro na comunicação com a Api, não foi possível listar os autores');
      });
  }

  render() {
    return (<Fragment>
      <Header />
      <div className="container mb-10">
        <h1>Casa do Código</h1>
        <Formulario escutadorDeSubmit={this.escutadorDeSubmit} />
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
      </div>
    </Fragment>);
  }
}

export default Home;
