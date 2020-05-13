const ApiService = {
    url: 'http://localhost:8000/api/',
    ListaAutores: () => {
        return fetch(`${ApiService.url}autor`)
        .then(res => res.json());
    },
    CriaAutor: autor => {
        return fetch(`${ApiService.url}autor`, {method: 'POST', headers: {
            'content-type': 'application/json'
        }, body: autor})
        .then(res => res.json());
    },
    ListaNomes: () => {
        return fetch(`${ApiService.url}autor/nome`)
        .then(res => res.json());
    },
    ListaLivros: () => {
        return fetch(`${ApiService.url}autor/livro`)
        .then(res => res.json());
    },
    RemoveAutor: id => {
        return fetch(`${ApiService.url}autor/livro${id}`, {method: 'DELETE', headers: {'content-type':'application/josn'}})
        .then(res => res.json());
    }
}

export default ApiService;