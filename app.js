const dados = [
    {
        titulo: "Algoritmos", 
        descricao: [
            "Procedimentos bem definidos",
            "Descrição 2 para Algoritmos.",
            "Descrição 3 para Algoritmos.",
            "Descrição 4 para Algoritmos.",
            "Descrição 5 para Algoritmos."
        ],
        imagem: "https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto&cs=tinysrgb&w=1260&h=427&dpr=1"
    },
    {
        titulo: "JavaScript",
        descricao: [
            "Procedimentos bem definidos",
            "Descrição 2 para Algoritmos.",
            "Descrição 3 para Algoritmos.",
            "Descrição 4 para Algoritmos.",
            "Descrição 5 para Algoritmos."
        ],
        imagem: "https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto&cs=tinysrgb&w=1260&h=427&dpr=1"
    },
    {
        titulo: "Python",
        descricao: [
            "Procedimentos bem definidos",
            "Descrição 2 para Algoritmos.",
            "Descrição 3 para Algoritmos.",
            "Descrição 4 para Algoritmos.",
            "Descrição 5 para Algoritmos."
        ],
        imagem: "https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto&cs=tinysrgb&w=1260&h=427&dpr=1"
    },
    {
        titulo: "Java",
        descricao: [
            "Procedimentos bem definidos",
            "Descrição 2 para Algoritmos.",
            "Descrição 3 para Algoritmos.",
            "Descrição 4 para Algoritmos.",
            "Descrição 5 para Algoritmos."
        ],
        imagem: "https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto&cs=tinysrgb&w=1260&h=427&dpr=1"
    },
    {
        titulo: "C++",
        descricao: [
            "Procedimentos bem definidos",
            "Descrição 2 para Algoritmos.",
            "Descrição 3 para Algoritmos.",
            "Descrição 4 para Algoritmos.",
            "Descrição 5 para Algoritmos."
        ],
        imagem: "https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto&cs=tinysrgb&w=1260&h=427&dpr=1"
    },
    {
        titulo: "Ruby",
        descricao: [
            "Procedimentos bem definidos",
            "Descrição 2 para Algoritmos.",
            "Descrição 3 para Algoritmos.",
            "Descrição 4 para Algoritmos.",
            "Descrição 5 para Algoritmos."
        ],
        imagem: "https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto&cs=tinysrgb&w=1260&h=427&dpr=1"
    },
    {
        titulo: "Swift",
        descricao: [
            "Procedimentos bem definidos",
            "Descrição 2 para Algoritmos.",
            "Descrição 3 para Algoritmos.",
            "Descrição 4 para Algoritmos.",
            "Descrição 5 para Algoritmos."
        ],
        imagem: "https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto&cs=tinysrgb&w=1260&h=427&dpr=1"
    },
    {
        titulo: "C#",
        descricao: [
            "Procedimentos bem definidos",
            "Descrição 2 para Algoritmos.",
            "Descrição 3 para Algoritmos.",
            "Descrição 4 para Algoritmos.",
            "Descrição 5 para Algoritmos."
        ],
        imagem: "https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto&cs=tinysrgb&w=1260&h=427&dpr=1"
    },
    {
        titulo: "Go",
        descricao: [
            "Procedimentos bem definidos",
            "Descrição 2 para Algoritmos.",
            "Descrição 3 para Algoritmos.",
            "Descrição 4 para Algoritmos.",
            "Descrição 5 para Algoritmos."
        ],
        imagem: "https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto&cs=tinysrgb&w=1260&h=427&dpr=1"
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
        imagem: "https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto&cs=tinysrgb&w=1260&h=427&dpr=1"
    },
    {
        titulo: "PHP",
        descricao: [
            "Procedimentos bem definidos",
            "Descrição 2 para Algoritmos.",
            "Descrição 3 para Algoritmos.",
            "Descrição 4 para Algoritmos.",
            "Descrição 5 para Algoritmos."
        ],
        imagem: "https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto&cs=tinysrgb&w=1260&h=427&dpr=1"
    },   
    {
        titulo: "UX",
        descricao: [
            "Procedimentos bem definidos",
            "Descrição 2 para Algoritmos.",
            "Descrição 3 para Algoritmos.",
            "Descrição 4 para Algoritmos.",
            "Descrição 5 para Algoritmos."
        ],
        imagem: "https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto&cs=tinysrgb&w=1260&h=427&dpr=1"
    }
];
const linguagensContainer = document.querySelector("#card-container");
const buscarButton = document.querySelector("#searchInput");
const mostrarDados = dados => {
    linguagensContainer.innerHTML = "";
    let html = '';
    dados.forEach((e, index) => {
        const collapseId = `collapse-${index}`;
        const buttonId = `button-${index}`;
        let descricaoHtml = Array.isArray(e.descricao) ? e.descricao.map(desc => `<a href="#" class="link-light">${desc}</a>`).join("<br>") : `<a href="#" class="link-light">${e.descricao}</a>`; 
        html += `
        <div class="col-4">
            <div class="custom-icon-container position-relative">
                <img class="image img-fluid border border-1 rounded-1"
                    src="${e.imagem}">
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
    const busca = dados.filter(i => i.titulo.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
    mostrarDados(busca);
})
window.addEventListener("load", mostrarDados.bind(null,dados));