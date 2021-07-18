const form = document.getElementById('formularioCadastro')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('name').value;
    let email = document.getElementById('mail').value;
    let data = {
        nome,
        email,
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData)
    form.nome.value = '';
    form.email.value = '';

    document.getElementById("msg").innerHTML = "<div class='alert alert-info alert-dismissible fade show mt-2 p-2' role='alert'><small><strong>Cadastrado com sucesso!</strong> <br> Verifique seu e-mail!</small><button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button></div>";
    setTimeout(function(){
        let el = document.getElementById('msg');
        el.removeChild(el.childNodes[0]);
    }, 3000);
});