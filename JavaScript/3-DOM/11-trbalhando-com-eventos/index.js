function register(ev){
    console.log(ev)

    const sectionElement = ev.currentTarget.parentNode
    
    const username = sectionElement.children.username.valeu
    const password = sectionElement.children.password.valeu
    const passwordConfirmation = sectionElement.children.passwordConfirmation.valeu

    if(password === passwordConfirmation){
        alert('Usuário ' + username + ' registrado!')
    }else{
        alert('As senhas não conferem!')
    }
}

const button = document.getElementById('register-button')

button.addEventListener('click', register)

function removeEvent(){
    button.removeEventListener('click', register)
}