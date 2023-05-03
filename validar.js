const usuarios = [
    {
        login: 'gustavo',
        pass: 'gustavo'
    },
    {
        login: 'admin',
        pass: 'admin'
    }
]

let botao = document.getElementById('btnLogar')

botao.addEventListener('click', function logar(){

    let pegaUsuario = document.getElementById('usuario').value 
    let pegaSenha = document.getElementById('senha').value
    let validaLogin = false

    for(let i in usuarios){
        if(pegaUsuario == usuarios[i].login && pegaSenha == usuarios[i].pass){
            validaLogin = true
            break
        }else{
            validaLogin = false
        }
    }
    if(validaLogin == true){
        alert('acesso concedido')
        location.href = 'index.html'
    }else{
        alert('Usuario ou senha incorreta')
    }
})