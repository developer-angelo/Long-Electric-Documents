const imageLogo = document.getElementById('logo');
const title = document.getElementById('titulo');

function logo() {
    window.location.replace('index.html');
}

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        imageLogo.src = data[0].logotipo;
        title.textContent = data[0].name_empresa;
    })