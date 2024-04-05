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
