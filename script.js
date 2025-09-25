document.getElementById("form").addEventListener("submit", async function (e) {
  e.preventDefault(); // impede que a página seja redirecionada

  const form = e.target;
  const data = new FormData(form);

  try {
    await fetch("https://api.sheetmonkey.io/form/f6SophHC4fWVcbGvEM4ZLC", {
      method: "POST",
      body: data,
    });

    // Exibe a mensagem de sucesso
    document.getElementById("mensagem-sucesso").style.display = "block";

    // Limpa os campos
    form.reset();
  } catch (error) {
    alert("Houve um erro ao enviar o formulário. Tente novamente.");
  }
});
