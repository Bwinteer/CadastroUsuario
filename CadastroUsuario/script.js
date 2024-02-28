const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

// Função para animar o registro se já houver evento de animação armazenado
function DoRegisterAnimate() {
    // Verifica se há um evento de animação armazenado no localStorage
    if (localStorage.getItem("BtnAnimEvent")) {
        container.classList.add("active");
    }
}

// Ao apertar no botão de "Cadastrar", realiza a animação
// do container e salva no localStorage
registerBtn.addEventListener('click', () => {
    localStorage.setItem("BtnAnimEvent", "active");
    container.classList.add("active");
});

// Ao apertar no botão de "Login", realiza a animação
// do container e remove do localStorage
loginBtn.addEventListener('click', () => {
    localStorage.removeItem("BtnAnimEvent");
    container.classList.remove("active");
});

// Chama DoRegisterAnimate no carregamento da página se o usuário estava na tela de cadastro anteriormente
document.addEventListener("DOMContentLoaded", DoRegisterAnimate);

// Função para validar campos de login
function LoginValidator() {

    // Verifica se os campos de email e senha estão preenchidos
    if (!loginPessoa.emailLogin.value || !loginPessoa.senhaLogin.value) {
        alert('Por favor, preencha todos os campos de login.');
        return false;
    }

    // Verifica o formato do email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(loginPessoa.emailLogin.value)) {
        alert('Por favor, insira um endereço de e-mail válido.');
        return false;
    }

    // Verifica o formato da senha
    const senhaPattern = /^.{6,}$/;
    if (!senhaPattern.test(loginPessoa.senhaLogin.value)) {
      alert('A senha deve conter pelo menos 6 caracteres.');
      return false;
    }

    // Limpa os campos de login e remove do armazenamento local
    alert('Tudo certo com seu login!');
    const camposLogin = ['emailLogin', 'senhaLogin'];
    for (const campoId of camposLogin) {
        const campoElement = document.getElementById(campoId);
        campoElement.value = '';
        localStorage.removeItem(campoId);
    }

    return true;
}

// Função para validar campos de cadastro
function RegisterValidator() {

    const camposCadastro = ['nomeCadastro', 'dataNascimentoCadastro', 'emailCadastro', 'senhaCadastro', 'confirmaSenhaCadastro'];

    // Verifica se todos os campos de cadastro estão preenchidos
    for (const campoId of camposCadastro) {
        const campo = document.getElementById(campoId).value;
        if (!campo) {
            alert('Por favor, preencha todos os campos de cadastro.');
            return false;
        }
    }

    // Verifica se foi inserido nome e sobrenome
    const nomeSobrenome = cadastroPessoa.nomeCadastro.value.split(' ');
    if (nomeSobrenome.length < 2) {
        alert('Por favor, insira nome e sobrenome.');
        return false;
    }

    // Verifica o formato do email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(cadastroPessoa.emailCadastro.value)) {
        alert('Por favor, insira um endereço de e-mail válido.');
        return false;
    }

    // Verifica a validade da data de nascimento
    const dataNascimento = new Date(cadastroPessoa.dataNascimentoCadastro.value);
    const dataAtual = new Date();
    const idade = dataAtual.getFullYear() - dataNascimento.getFullYear();

    if (idade > 150 || dataNascimento > dataAtual) {
        alert('Por favor, insira uma data de nascimento válida.');
        return false;
    }

    // Verifica o formato da senha
    const senhaPattern = /^.{6,}$/;
    
    if (!senhaPattern.test(cadastroPessoa.senhaCadastro.value)) {
        alert('A senha deve conter pelo menos 6 caracteres.');
        return false;
    }

    // Verifica se as senhas coincidem
    if (cadastroPessoa.senhaCadastro.value != cadastroPessoa.confirmaSenhaCadastro.value) {
        alert('As senhas devem ser iguais!');
        return false;
    }
    
    alert('Tudo certo com seu cadastro!');

    for (const campoId of camposCadastro) {
        const campoElement = document.getElementById(campoId);
        campoElement.value = '';
        localStorage.removeItem(campoId);
    }

    return true;
}

// Função para armazenar informações de login no localStorage
// e trazer informações do localStorage ao login
function LoginLocalStorage() {

  // Email
  if (localStorage.getItem("emailLogin")) {
      loginPessoa.emailLogin.value = localStorage.getItem("emailLogin");
  }
      emailLogin.addEventListener("change", () => {
      localStorage.setItem("emailLogin", loginPessoa.emailLogin.value);
  });

  // Senha
  if (localStorage.getItem("senhaLogin")) {
      loginPessoa.senhaLogin.value = localStorage.getItem("senhaLogin");
  }
  senhaLogin.addEventListener("change", () => {
      localStorage.setItem("senhaLogin", loginPessoa.senhaLogin.value);
  });
}

// Função para armazenar informações de cadastro no localStorage
// e trazer informações do localStorage ao cadastro
function RegisterLocalStorage() {

  // Nome
  if (localStorage.getItem("nomeCadastro")) {
      cadastroPessoa.nomeCadastro.value = localStorage.getItem("nomeCadastro");
  }
  nomeCadastro.addEventListener("change", () => {
      localStorage.setItem("nomeCadastro", cadastroPessoa.nomeCadastro.value);
  });

  // Data de nascimento
  if (localStorage.getItem("dataNascimentoCadastro")) {
      cadastroPessoa.dataNascimentoCadastro.value = localStorage.getItem("dataNascimentoCadastro");
  }
  dataNascimentoCadastro.addEventListener("change", () => {
      localStorage.setItem("dataNascimentoCadastro", cadastroPessoa.dataNascimentoCadastro.value);
  });

  // Email
  if (localStorage.getItem("emailCadastro")) {
      cadastroPessoa.emailCadastro.value = localStorage.getItem("emailCadastro");
  }
  emailCadastro.addEventListener("change", () => {
      localStorage.setItem("emailCadastro", cadastroPessoa.emailCadastro.value);
  });

  // Senha
  if (localStorage.getItem("senhaCadastro")) {
      cadastroPessoa.senhaCadastro.value = localStorage.getItem("senhaCadastro");
  }
  senhaCadastro.addEventListener("change", () => {
      localStorage.setItem("senhaCadastro", cadastroPessoa.senhaCadastro.value);
  });

  // Confirmar Senha
  if (localStorage.getItem("confirmaSenhaCadastro")) {
      cadastroPessoa.confirmaSenhaCadastro.value = localStorage.getItem("confirmaSenhaCadastro");
  }
  confirmaSenhaCadastro.addEventListener("change", () => {
      localStorage.setItem("confirmaSenhaCadastro", cadastroPessoa.confirmaSenhaCadastro.value);
  });
}

LoginLocalStorage()
RegisterLocalStorage()
