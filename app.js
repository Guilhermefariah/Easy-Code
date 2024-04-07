const dados = [
    {
        titulo: "Algoritmos", 
        descricao: [
           '<a href="https://www.youtube.com/@CursoemVideo/playlists" target="_blank">Curso em Video</a>',
           '<a href="https://www.youtube.com/@freecodecamp" target="_blank">freeCodeCamp</a>',
    
        ],
        imagem: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Fluxogranma02.gif"
    },
    {
        titulo: "GIT", 
        descricao: [
           '<a href="https://www.youtube.com/@CursoemVideo/playlists" target="_blank">Curso em Video</a>',
           '<a href="https://www.youtube.com/@RBtechinfo" target="_blank">RBtech</a>',
           '<a href="https://www.youtube.com/@MaykBrito/playlists" target="_blank">Mayk Brito</a>',
           
    
        ],
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp_PW86idrpZvwGCgzhmlMgV8O0RNnPOGcFqT5VcNO&s"
    },
    {
        titulo: "JavaScript",
        descricao: [
            '<a href="https://www.youtube.com/@CursoemVideo/playlists" target="_blank">Curso em Video</a>',
            '<a href="https://www.youtube.com/@freecodecamp" target="_blank">freeCodeCamp</a>',
            '<a href="https://www.youtube.com/@MatheusBattisti" target="_blank">Matheus Battisti - Hora de Codar</a>',
        ],
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
    },
    {   
        titulo: "HTML e CSS",
        descricao: [
            '<a href="https://www.youtube.com/@CursoemVideo/playlists" target="_blank">Curso em Video</a>',
            '<a href="https://www.youtube.com/@freecodecamp" target="_blank">freeCodeCamp</a>',
            '<a href="https://www.youtube.com/@MatheusBattisti" target="_blank">Matheus Battisti - Hora de Codar</a>',
        ],
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/CSS3_and_HTML5_logos_and_wordmarks.svg/1280px-CSS3_and_HTML5_logos_and_wordmarks.svg.png"
    },
    {   
        titulo: "AWS",
        descricao: [
            '<a href="https://www.youtube.com/@academind/playlists" target="_blank">Academind</a>', 
        ],
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-OuCjtlwCSqkhF6lxWXwIE0Ll9aFJdL5qSirjj8BD5A&s"
    },
    {
        titulo: "Estrutura de Dados",
        descricao: [
            '<a href="https://www.youtube.com/@ProfessorDouglasMaioli/playlists" target="_blank">Professor Douglas Maioli</a>',
            '<a href="https://www.youtube.com/@pgdinamica/playlists" target="_blank">Programação Dinâmica</a>',
            
            "Procedimentos bem definidos",
        ],
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROfFyupWm3g-BNBQ0sZ2GYiNchEcF8BcPW_N-5ZhQBKw&s"
    },
    {
        titulo: "Java",
        descricao: [
            '<a href="https://www.youtube.com/@CursoemVideo/playlists" target="_blank">Curso em Video</a>',
            '<a href="https://www.youtube.com/@freecodecamp" target="_blank">freeCodeCamp</a>',
            '<a href="https://www.youtube.com/user/Loianeg" target="_blank">Loiane Groner</a>',
            '<a href="https://www.youtube.com/@DevDojoBrasil" target="_blank">DevDojo</a>',
        ],
        imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png"
    },
    {
        titulo: "Mongodb",
        descricao: [
            '<a href="https://www.youtube.com/@LuizTools/playlists" target="_blank">LuizTools</a>',
            '<a href="https://www.youtube.com/@freecodecamp" target="_blank">freeCodeCamp</a>',
            '<a href="https://www.youtube.com/user/Loianeg" target="_blank">Loiane Groner</a>',
            '<a href="https://www.youtube.com/@DevDojoBrasil" target="_blank">DevDojo</a>',
        ],
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKiU8cooMJrijZ9Lk6kiI1UIykuuFrQ3XWGBnGwYUb&s"
    },
    {
        titulo: "Kotlin",
        descricao: [
            '<a href="https://www.youtube.com/@weverton.santiago/playlists" target="_blank">Weverton Santiago</a>',
        ],
        imagem: "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png"
    },
    {
        titulo: "C++",
        descricao: [
            '<a href="https://www.youtube.com/@TheCherno" target="_blank">The Cherno</a>',
            '<a href="https://www.youtube.com/@codebreakthrough/playlists" target="_blank">Caleb Curry</a>',
            '<a href="https://www.youtube.com/@ProgrammingKnowledge/playlists" target="_blank">ProgrammingKnowledge</a>',
            
        ],
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD4rstsLzUrHX2D9_-7PDwCKYGid5JWeOehQ_geDAYiw&s"
    },
    {
        titulo: "Linux",
        descricao: [
            '<a href="https://www.youtube.com/@TheCherno" target="_blank">The Cherno</a>',
            '<a href="https://www.youtube.com/@codebreakthrough/playlists" target="_blank">Caleb Curry</a>',
            '<a href="https://www.youtube.com/@ProgrammingKnowledge/playlists" target="_blank">ProgrammingKnowledge</a>',
            
        ],
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv9Ag8dd4NXlLHE1Z6dxVPiXwB-CClkdQ0kIlZwHhmEA&s"
    },
    {
        titulo: "Web 3.0",
        descricao: [
            '<a href="https://www.youtube.com/@LuizTools/playlists" target="_blank">LuizTools</a>',
            '<a href="https://www.youtube.com/@javascriptmastery/playlists" target="_blank">JavaScript Mastery</a>',
            
            '<a href="https://www.youtube.com/@codebreakthrough/playlists" target="_blank">Caleb Curry</a>',
            '<a href="https://www.youtube.com/@ProgrammingKnowledge/playlists" target="_blank">ProgrammingKnowledge</a>',
            
        ],
        imagem: "https://upload.wikimedia.org/wikipedia/commons/f/fa/LogoWeb3-v1-2-Pragma-sc.png"
    },
    {
        titulo: "mySQL",
        descricao: [
            '<a href="https://www.youtube.com/@CursoemVideo/playlists" target="_blank">Curso em Video</a>',
            '<a href="https://www.youtube.com/@freecodecamp" target="_blank">freeCodeCamp</a>',
        ],
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi5MGLQ9vV_5kEj09gb1zP1GU2tTb-hRQd-7Snw021og&s"
    },
    {
        titulo: "Figma",
        descricao: [
            '<a href="https://www.youtube.com/@Figma/playlists" target="_blank">Figma</a>',
            '<a href="https://www.youtube.com/@DesignCourse/playlists" target="_blank">DesignCourse</a>',
            '<a href="https://www.youtube.com/@BringYourOwnLaptop/playlists" target="_blank">Bring Your Own Laptop</a>',
            
        ],
        imagem: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
    },
    {
        titulo: "C#",
        descricao: [
            '<a href="https://www.youtube.com/c/Baltaio" target="_blank">balta.io</a>',
            '<a href="https://www.youtube.com/@rocketseat/playlists" target="_blank">Rocketseat</a>',
            '<a href="https://www.youtube.com/@freecodecamp/playlists" target="_blank">freeCodeCamp.org</a>',
            '<a href="https://www.youtube.com/@NetNinja/playlists" target="_blank">Net Ninja</a>',
            '<a href="https://www.youtube.com/@Brackeys/playlists" target="_blank">Brackeys</a>',
        ],
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/C_Sharp_Logo_2023.svg/200px-C_Sharp_Logo_2023.svg.png"
    },
    {
        titulo: "Go",
        descricao: [
            '<a href="https://www.youtube.com/@PauloKellerDev" target="_blank">Paulo Keller</a>',
            '<a href="https://www.youtube.com/user/rodrigobranas/playlists" target="_blank">Rodrigo Branas</a>',
            '<a href="https://www.youtube.com/@JustForFunc/playlists" target="_blank">justforfunc: Programming in Go </a>',
            '<a href="https://www.youtube.com/@toddmcleod-learn-to-code/playlists target="_blank">Learn To Code</a>',    
        ],
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/800px-Go_Logo_Blue.svg.png"
    },
    {
        titulo: "Rust",
        descricao: [
            '<a href="https://www.youtube.com/@TechWithTim/playlists" target="_blank">Tech With Tim</a>',
            '<a href="https://www.youtube.com/@letsgetrusty/playlists" target="_blank">Lets Get Rusty</a>',
            '<a href="https://www.youtube.com/@TrevorSullivan" target="_blank">Trevor Sullivan</a>',
        ],
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Rustacean-orig-noshadow.svg/220px-Rustacean-orig-noshadow.svg.png"
    },
    {
        titulo: "PHP",
        descricao: [
            '<a href="https://www.youtube.com/@CursoemVideo/playlists" target="_blank">Curso em Video</a>',
            '<a href="https://www.youtube.com/@GaryClarkeTech/playlists" target="_blank">Gary Clarke</a>',
            '<a href="https://www.youtube.com/@Brackeys/playlists" target="_blank">Brackeys</a>',
        ],
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Webysther_20160423_-_Elephpant.svg/200px-Webysther_20160423_-_Elephpant.svg.png"
    },  
    {
        titulo: "Power BI",
        descricao: [
            '<a href="https://www.youtube.com/@Empowerdata/videos" target="_blank">Empowerdata</a>',
            '<a href="https://www.youtube.com/@HashtagTreinamentos" target="_blank">Hashtag Treinamentos</a>',
        ],
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/2048px-New_Power_BI_Logo.svg.png"
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
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyQlAY-m5UXpwyX4z78Vpi4WFnNiU7e311PwoZU3kyXQ&shttps://upload.wikimedia.org/wikipedia/pt/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png"
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
    const busca = dados.filter(i => i.titulo.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
    mostrarDados(busca);
})
window.addEventListener("load", mostrarDados.bind(null,dados));
