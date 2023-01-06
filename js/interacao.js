function mudarHabilidade(id){
    
    // Mudar a titulo e barra de progresso do elemento
    let titulo = document.getElementById("titulo");
    titulo.innerHTML = "";
    let barra = document.getElementById("barra");
    barra.innerHTML = "";
    
    if(id == "html"){
        titulo.innerHTML = "HTML (Linguagem de Marcação de HiperTexto)";
        barra.innerHTML = "80%";
        barra.style.width = "80%";
    }else if(id == "css"){
        titulo.innerHTML = "CSS (Folhas de Estilo em Cascatas)";
        barra.innerHTML = "70%";
        barra.style.width = "70%";
    }else if(id == "js"){
        titulo.innerHTML = "JavaScript (Linguagem de programação interpretada estruturada)";
        barra.innerHTML = "55%";
        barra.style.width = "55%";
    }else if(id == "sql"){
        titulo.innerHTML = "Sql (É uma linguagem padrão para trabalhar com bancos de dados relacionais)";
        barra.innerHTML = "60%";
        barra.style.width = "60%";
    }else if(id == "git"){
        titulo.innerHTML = "GitHub (É uma plataforma de hospedagem de código-fonte e arquivos em nuvem)";
        barra.innerHTML = "82%";
        barra.style.width = "82%";
    }else if(id == "code"){
    titulo.innerHTML = "Code (É um editor de código-fonte leve, mas poderoso, desenvolvido pela Microsoft)";
    barra.innerHTML = "90%";
    barra.style.width = "90%";
    }
    titulo.animate(([
        { transform: 'translateX(-100px)',opacity: "0" },
        {opacity: "0.2"},
        { transform: 'translateX(0px)', opacity: "1"}
    ]),600)
}
