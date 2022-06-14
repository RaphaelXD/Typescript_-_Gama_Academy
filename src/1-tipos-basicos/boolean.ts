let estaAtivo: boolean;

estaAtivo = true;

function mapearStatus(status: boolean) {
    if (status) {
        return 'Usuario esta ativo';
    } else {
        return 'Usuario nã oesta ativo';
    }
}

mapearStatus(false);