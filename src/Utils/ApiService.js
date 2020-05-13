const ApiService = {
    url: 'http://localhost:8000/api/',
    ListaAutores: () => {
        return fetch(`${ApiService.url}autor`)
        .then(res => ApiService.TrataErros(res));
    },
    CriaAutor: autor => {
        return fetch(`${ApiService.url}autor`, {method: 'POST', headers: {
            'content-type': 'application/json'
        }, body: autor})
        .then(res => ApiService.TrataErros(res));
    },
    ListaNomes: () => {
        return fetch(`${ApiService.url}autor/nome`)
        .then(res => ApiService.TrataErros(res));
    },
    ListaLivros: () => {
        return fetch(`${ApiService.url}autor/livro`)
        .then(res => ApiService.TrataErros(res));
    },
    RemoveAutor: id => {
        return fetch(`${ApiService.url}autor/livro${id}`, {method: 'DELETE', headers: {'content-type':'application/josn'}})
        .then(res => res.json())
        .then(res => ApiService.TrataErros(res));
    },
    TrataErros: res => {
        if (!res.ok) {
            throw Error(res.responseText);
        }
        return res.json();
    }
}

export default ApiService;