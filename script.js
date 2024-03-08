function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/images/avatar-light.png")
    img.setAttribute("alt", "Imagem do Mayk Brito sorrindo, usando oculos escuros, com um fundo azul e roxo no modo light")
  } else {
    //se tiver o night mode, manter a imagem normal
    img.setAttribute("src", "./assets/images/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usuando óculos e camisa preta, barba e fundo amarelo."
    )
  }
}