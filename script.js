 function fazerLogin() {
      const email = document.getElementById("email").value;
      const senha = document.getElementById("senha").value;

      // Credenciais corretas de exemplo
      const emailCorreto = "lizziedsousa@email.com";
      const senhaCorreta = "Amendoim13_";

      if (email === emailCorreto && senha === senhaCorreta) {
        window.location.href = "home.html";
      } else {
        alert("Dados de email e senha não conferem");
      }
    }