const frameworks = [
    {
        titulo: "AngularJS", 
        descricao: [
            "Procedimentos bem definidos",
            "Descrição 2 para Algoritmos.",
            "Descrição 3 para Algoritmos.",
            "Descrição 4 para Algoritmos.",
            "Descrição 5 para Algoritmos."
        ],
        imagem: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Fluxogranma02.gif"
    },
    {
        titulo: "Typescript",
        descricao: [
            "Procedimentos bem definidos",
            "Descrição 2 para Algoritmos.",
            "Descrição 3 para Algoritmos.",
            "Descrição 4 para Algoritmos.",
            "Descrição 5 para Algoritmos."
        ],
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
    },
    {   
        titulo: "Laravel",
        descricao: [
            "Procedimentos bem definidos",
            "Descrição 2 para Algoritmos.",
            "Descrição 3 para Algoritmos.",
            "Descrição 4 para Algoritmos.",
            "Descrição 5 para Algoritmos."
        ],
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/CSS3_and_HTML5_logos_and_wordmarks.svg/1280px-CSS3_and_HTML5_logos_and_wordmarks.svg.png"
    },
    {
        titulo: "Spring Boot",
        descricao: [
            "Procedimentos bem definidos",
            "Descrição 2 para Algoritmos.",
            "Descrição 3 para Algoritmos.",
            "Descrição 4 para Algoritmos.",
            "Descrição 5 para Algoritmos."
        ],
        imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png"
    },
    {
        titulo: "ASP.NET Core",
        descricao: [
            "Procedimentos bem definidos",
            "Descrição 2 para Algoritmos.",
            "Descrição 3 para Algoritmos.",
            "Descrição 4 para Algoritmos.",
            "Descrição 5 para Algoritmos."
        ],
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD4rstsLzUrHX2D9_-7PDwCKYGid5JWeOehQ_geDAYiw&s"
    },
    {
        titulo: "React",
        descricao: [
            "Procedimentos bem definidos",
            "Descrição 2 para Algoritmos.",
            "Descrição 3 para Algoritmos.",
            "Descrição 4 para Algoritmos.",
            "Descrição 5 para Algoritmos."
        ],
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/800px-Ruby_logo.svg.png"
    },
    {
        titulo: "Vue.js",
        descricao: [
            "Procedimentos bem definidos",
            "Descrição 2 para Algoritmos.",
            "Descrição 3 para Algoritmos.",
            "Descrição 4 para Algoritmos.",
            "Descrição 5 para Algoritmos."
        ],
        imagem: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
    },
    {
        titulo: "Django",
        descricao: [
            "Procedimentos bem definidos",
            "Descrição 2 para Algoritmos.",
            "Descrição 3 para Algoritmos.",
            "Descrição 4 para Algoritmos.",
            "Descrição 5 para Algoritmos."
        ],
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/C_Sharp_Logo_2023.svg/200px-C_Sharp_Logo_2023.svg.png"
    },
    {
        titulo: "Ruby on Rails",
        descricao: [
            "Procedimentos bem definidos",
            "Descrição 2 para Algoritmos.",
            "Descrição 3 para Algoritmos.",
            "Descrição 4 para Algoritmos.",
            "Descrição 5 para Algoritmos."
        ],
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/800px-Go_Logo_Blue.svg.png"
    },
    {
        titulo: "Rust",
        descricao: [
            "Procedimentos bem definidos",
            "Descrição 2 para Algoritmos.",
            "Descrição 3 para Algoritmos.",
            "Descrição 4 para Algoritmos.",
            "Descrição 5 para Algoritmos."
        ],
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Rustacean-orig-noshadow.svg/220px-Rustacean-orig-noshadow.svg.png"
    },
    {
        titulo: "Symfony",
        descricao: [
            "Procedimentos bem definidos",
            "Descrição 2 para Algoritmos.",
            "Descrição 3 para Algoritmos.",
            "Descrição 4 para Algoritmos.",
            "Descrição 5 para Algoritmos."
        ],
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Webysther_20160423_-_Elephpant.svg/200px-Webysther_20160423_-_Elephpant.svg.png"
    },   
    {
        titulo: "Tailwind",
        descricao: [
            "Procedimentos bem definidos",
            "Descrição 2 para Algoritmos.",
            "Descrição 3 para Algoritmos.",
            "Descrição 4 para Algoritmos.",
            "Descrição 5 para Algoritmos."
        ],
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyQlAY-m5UXpwyX4z78Vpi4WFnNiU7e311PwoZU3kyXQ&shttps://upload.wikimedia.org/wikipedia/pt/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png"
    }
];
const linguagensContainer = document.querySelector("#framework-container");
const buscarButton = document.querySelector("#searchInput");
const mostrarFrameworks = frameworks => {
    linguagensContainer.innerHTML = "";
    let html = '';
    frameworks.forEach((e, index) => {
        const collapseId = `collapse-${index}`;
        const buttonId = `button-${index}`;
        let descricaoHtml = Array.isArray(e.descricao) ? e.descricao.map(desc => `<a href="#" class="link-light">${desc}</a>`).join("<br>") : `<a href="#" class="link-light">${e.descricao}</a>`; 
        html += `
        <div class="col-4">
            <div class="custom-icon-container position-relative">
                <img class="image img-fluid border border-1 rounded-2 border-3 align-top;"
                src="${e.imagem}" style="width: 100%; height: 250px;">
            </div>
            <div class="accordion mt-1">
                <p>
                    <button id="${buttonId}" class="btn btn-dark" type="button" data-bs-toggle="collapse"
                        data-bs-target="#${collapseId}" aria-expanded="false" aria-controls="collapse">
                        ${e.titulo}
                    </button>
                </p>
                <div style="min-height: 120px;">
                    <div class="collapse" id="${collapseId}">
                        <div class="card card-body bg-dark w-100">
                            ${descricaoHtml}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    });
    linguagensContainer.innerHTML = `
    <div class="row">${html}</div>`;
};
buscarButton.addEventListener("keyup", (e) => {
    const busca = frameworks.filter(i => i.titulo.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
    mostrarFrameworks(busca);
})
window.addEventListener("load", mostrarFrameworks.bind(null,frameworks));
