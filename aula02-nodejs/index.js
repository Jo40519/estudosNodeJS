/*
    0 Obter um usuario
    1 Obter número de telefone de um usuário a partir de seu id
    2 Obter endereço do usuario pelo id
*/

function obterUsuario(callback){
    setTimeout(() => {
        return callback (null, {
            id: 1,
            nome: 'Aladin',
            dtNascimento: new Date()
        })
    }, 1000)
}

function obterTelefone(idUsuario) {
    setTimeout(() => {
        return {
            telefone: '1100092',
            ddd: '11'
        }
    }, 2000)
}

function obterEndereco(idUsuario) {

}

function resolverUsuario(erro, usuario) {
    console.log('usuario', usuario)
}

obterUsuario(resolverUsuario);
// const telefone = obterTelefone(usuario.id)

