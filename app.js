const dados = [
    {
        titulo: "Algoritmos", 
        descricao: [
            "Procedimentos bem definidos",
            "Descrição 2 para Algoritmos.",
            "Descrição 3 para Algoritmos.",
            "Descrição 4 para Algoritmos.",
            "Descrição 5 para Algoritmos."
        ]
    },
    {
        titulo: "JavaScript",
        descricao: "JavaScript é uma linguagem de programação de alto nível, interpretada e orientada a objetos."
    },
    {
        titulo: "Python",
        descricao: "Python é uma linguagem de programação interpretada, de alto nível, multiparadigma e de tipagem dinâmica."
    },
    {
        titulo: "Java",
        descricao: "Java é uma linguagem de programação orientada a objetos e plataforma computacional."
    },
    {
        titulo: "C++",
        descricao: "C++ é uma linguagem de programação compilada, multi-paradigma, de alto nível e general-purpose."
    },
    {
        titulo: "Ruby",
        descricao: "Ruby é uma linguagem de programação interpretada, de alto nível e de uso geral."
    },
    {
        titulo: "Swift",
        descricao: "Swift é uma linguagem de programação desenvolvida pela Apple para o desenvolvimento de aplicativos iOS e macOS."
    },
    {
        titulo: "C#",
        descricao: "C# (C Sharp) é uma linguagem de programação orientada a objetos, desenvolvida pela Microsoft."
    },
    {
        titulo: "Go",
        descricao: "Go é uma linguagem de programação compilada, concorrente e de código aberto, desenvolvida pelo Google."
    },
    {
        titulo: "Rust",
        descricao: "Rust é uma linguagem de programação de sistema que é focada em segurança, concorrência e velocidade."
    },
    {
        titulo: "PHP",
        descricao: "PHP é uma linguagem de script open-source amplamente usada, especialmente adequada para o desenvolvimento web."
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
                    src="https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto&cs=tinysrgb&w=1260&h=427&dpr=1">
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
                        <div class="card card-body bg-dark" style="width: 100%;">
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