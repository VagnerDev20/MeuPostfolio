let show = true /*estado inicial do menu esteja mostrando*/

const menuSection = document.querySelector(".menu-section") /*selecionando a div menu-section e armazenando na variavel menuSection*/
const menuBurguer = menuSection.querySelector(".menu-burguer") /*selecionando o menuSection e menu-burguer*/

/*criando a função de click*/
menuBurguer.addEventListener("click", () =>{

    menuSection.classList.toggle("on", show) /* ao clicar adiciona a classe 'on' na div menu-section ficando menu-section on */
    show = !show  /* ao clicar o show muda para falso*/
}

)

