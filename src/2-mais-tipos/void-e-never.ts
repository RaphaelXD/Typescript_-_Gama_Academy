// void = são para funçoes que tem retorno MAS o retorno é undefined ( não é exolicito no codigo)
function principal() {
    console.log('executando')
}

principal();


// never = laços ou funçoes infinitos ou funçoes que disparam erros
function funcaoQueNuncaRetorna(): never {
    while(true) {

    }
}

funcaoQueNuncaRetorna();