import M from 'materialize-css';
const PopUp = {
    exibeMensagem: (status, msg) => {
        let classes = '';
        if (status === 'success') classes = 'green';
        if (status === 'error') classes = 'red'
        M.toast({
            html: msg,
            classes,
            displayLength: 2000
        });
    }
}

export default PopUp;