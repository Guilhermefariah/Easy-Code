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
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNihduhoYKcZekkz26w5Esg5WGzZUPvj8ZUIXDmj1-TQ&s"
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
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
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
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAxfdv1vwo3BHv9lcfeVcCRWHao_uj4oSm7EXHq-6Smw&s"
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
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Spring_Boot.svg/1200px-Spring_Boot.svg.png"
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
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKh3TBmwA4QWDrifoSZtLl9B1yKA4mtPYjo6Z0xTxp9w&s"
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
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiyIK6lw7E4PWgSvrHUftodq9HVvl5ZPkHnvV-xW5d2w&s"
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
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"
    },
    {
        titulo: "Noje.js",
        descricao: [
            "Procedimentos bem definidos",
            "Descrição 2 para Algoritmos.",
            "Descrição 3 para Algoritmos.",
            "Descrição 4 para Algoritmos.",
            "Descrição 5 para Algoritmos."
        ],
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"
    },
    {
        titulo: "Ruby on Rails",
        descricao: [
            '<a href="https://www.youtube.com/@rubyverso/videos" target="_blank">rubyverso</a>',
            "Descrição 2 para Algoritmos.",
            "Descrição 3 para Algoritmos.",
            "Descrição 4 para Algoritmos.",
            "Descrição 5 para Algoritmos."
        ],
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Ruby_On_Rails_Logo.svg/1200px-Ruby_On_Rails_Logo.svg.png"
    },
    {
        titulo: "jQuery",
        descricao: [
            "Procedimentos bem definidos",
            "Descrição 2 para Algoritmos.",
            "Descrição 3 para Algoritmos.",
            "Descrição 4 para Algoritmos.",
            "Descrição 5 para Algoritmos."
        ],
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuBXgjjpLy0fLWCAoMATiKX9r8BkPhWJmwezGY92RwLA&s"
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
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC9IH-bnHp9oCPz2mXnaVpRiT4iujHnh23P4jDbxTy&s"
    },   
    {
        titulo: "NestJS",
        descricao: [
            "Procedimentos bem definidos",
            "Descrição 2 para Algoritmos.",
            "Descrição 3 para Algoritmos.",
            "Descrição 4 para Algoritmos.",
            "Descrição 5 para Algoritmos."
        ],
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/NestJS.svg/640px-NestJS.svg.png"
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
