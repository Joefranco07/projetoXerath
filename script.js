function toggleMode() {
  const body = document.body
  body.classList.toggle("light")
  // pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (body.classList.contains("light")) {
    //se tiver light mode, adicionar imagem light
    img.setAttribute("src", "./assets/Avatarxerath.png")
  } else {
    // se tiver sem light mode, manter imagem normal
    img.setAttribute("src", "./assets/xerath-dark-mode.png")
  }
  if (body.classList.contains("light")) {
    img.setAttribute("alt", "imagem do xerath, padrão, sem skin")
  } else {
    img.setAttribute("alt", "xerath, com a skin arcana")
  }
}
