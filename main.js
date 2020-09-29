let convertBtn = document.querySelector('.convert-button');
let URLinput = document.querySelector('.URL-input');

convertBtn.addEventListener('click', () => {

    console.log(`URL: ${URLinput.value}`);
    sendURL(URLinput.value);

    alert("Seu vídeo será baixado em breve!!!")
});

function sendURL(NAME, URL) {
    window.location.href = `http://localhost:4000/download?URL=${URL}`;
}