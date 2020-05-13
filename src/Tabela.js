import React, { Component } from 'react';

class TableHead extends Component {
    render() {
        const colunas = this.props.colunas.map(v => <th>{v.nome}</th>);
        return (
            <thead>
                <tr key="0">
                    {colunas}
                </tr>
            </thead>);
    }
}

const TableBody = props => {
    const linhas = props.autores.map((l, i) => {
        return (
            <tr key={i}>
                {props.colunas.map(v => {
                    if (v.remover != null) {
                        return <td><button onClick={() => v.remover(i)} className="btn waves-effects waves-light indigo lighten-2">Remover</button></td>
                    }
                    return <td>{l[v.prop]}</td>
                })}
            </tr>
        )
    });
    return (
        <tbody>
            {linhas}
        </tbody>
    )
}

class Tabela extends Component {
    render() {
        const { autores, removeAutor, colunas } = this.props;
        return (<table className="centered highlight">
            <TableHead colunas={colunas} />
            <TableBody autores={autores} removeAutor={removeAutor} colunas={colunas} />
        </table>);
    }
}

export default Tabela;