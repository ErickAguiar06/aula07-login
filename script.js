function gerarEmailAleatorio() {
  const dominios = ["gmail.com", "yahoo.com", "outlook.com"];
  const nome = Math.random().toString(36).substring(2, 10);
  const dominio = dominios[Math.floor(Math.random() * dominios.length)];
  return `${nome}@${dominio}`;
}

function gerarSenhaAleatoria(tamanho = 10) {
  const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";
  let senha = "";
  for (let i = 0; i < tamanho; i++) {
    senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  return senha;
}

function fazerLogin() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const emailCorreto = gerarEmailAleatorio();
  const senhaCorreta = gerarSenhaAleatoria();

  console.log("Email correto:", emailCorreto);
  console.log("Senha correta:", senhaCorreta);

  if (email === emailCorreto && senha === senhaCorreta) {
    window.location.href = "home.html";
  } else {
    alert("Dados de email e senha não conferem");
  }
}
