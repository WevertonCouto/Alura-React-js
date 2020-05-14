import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

class TableHeader extends Component {
    render() {
        const colunas = this.props.colunas.map(v => <TableCell>{v.nome}</TableCell>);
        return (
            <TableHead>
                <TableRow key="0">
                    {colunas}
                </TableRow>
            </TableHead>);
    }
}

const TableLines = props => {
    const linhas = props.autores.map((l) => {
        return (
            <TableRow key={l.id}>
                {props.colunas.map(v => {
                    if (v.remover != null) {
                        return <TableCell><Button onClick={() => v.remover(l.id)} variant="contained" color="primary">Remover</Button></TableCell>
                    }
                    return <TableCell>{l[v.prop]}</TableCell>
                })}
            </TableRow>
        )
    });
    return (
        <TableBody>
            {linhas}
        </TableBody>
    )
}

class Tabela extends Component {
    render() {
        const { autores, removeAutor, colunas } = this.props;
        return (<Table>
            <TableHeader colunas={colunas} />
            <TableLines autores={autores} removeAutor={removeAutor} colunas={colunas} />
        </Table>);
    }
}

export default Tabela;