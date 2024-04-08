document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault();
    let formDados = new FormData(this);
    let reqXml = new XMLHttpRequest();
    reqXml.open('POST', this.action, true);
    reqXml.onload = function() {
        if (reqXml.status === 200) {
            window.location.href = "index.html";
        } else {
        }
    };
    reqXml.send(formDados);
});