document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault();
    let formDados = new FormData(this);
    let reqXlm = new XMLHttpRequest();
    reqXlm.open('POST', this.action, true);
    reqXlm.onload = function() {
        if (xhr.status === 200) {
            window.location.href = "/index.html";
        } else {
        }
    };
    xhr.send(formDados);
});