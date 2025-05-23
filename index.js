const email = document.getElementById("inputEmail");
const senha = document.getElementById("inputPassword");

function registroCadastro() {
    const valorEmail = email.value.trim();
    const valorSenha = senha.value.trim();

    if (!valorEmail || !valorSenha) {
        console.log("Por favor, preencha todos os campos.");
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(valorEmail)) {
        console.log("E-mail inválido. Por favor, insira um e-mail válido.");
    } else {
        console.log(valorEmail)
    }

    if (valorSenha == "") {
        console.log("As senhas não coincidem.");
    } else {
        console.log(valorSenha)
    }

    window.location.href = "./pages/caracterCriation/index.html";
}