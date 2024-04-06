function exbirPesquisa(results) {
    const containerPesquisa = document.querySelector("#search-results");
    containerPesquisa.innerHTML = "";

    if (results.length === 0) {
        containerPesquisa.innerHTML = "<p>Nenhum Resultado!</p>";
    } else {
        results.forEach(function (result) {
            const resultItem = document.createElement("div");
            resultItem.textContent = result.textContent;
            containerPesquisa.appendChild(resultItem);
        });
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form[role='search']");
    const input = form.querySelector("input[type='search']");

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const buscaLower = input.value.toLowerCase();
        const buscaResults = [];
        const buscaItem = document.querySelectorAll('.busca'); 
        buscaItem.forEach(function (item) {
            const text = item.textContent.toLowerCase();
            if (text.includes(buscaLower)) {
                buscaResults.push(item);
            }
        });
        exbirPesquisa(buscaResults);
        
    });

});