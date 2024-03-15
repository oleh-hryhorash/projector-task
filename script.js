const artistInput = document.getElementById('artistInput');
const lengthWarning = document.getElementById('lengthWarning');

artistInput.addEventListener('input', function() {
    const maxLength = 50; // Максимальна довжина тексту
    const currentLength = artistInput.value.length;
    
    if (currentLength > maxLength) {
        lengthWarning.classList.remove('hidden');
    } else {
        lengthWarning.classList.add('hidden');
    }
});

  document.getElementById('backButton').addEventListener('click', function() {
    window.history.back();
});

/* JSON additional */

// Отримати дані з localStorage
let collection = JSON.parse(localStorage.getItem('collection')) || [];

function addToCollection(item) {
    collection.push(item);
    localStorage.setItem('collection', JSON.stringify(collection));
}

document.querySelector('.button').addEventListener('click', function() {
    let item = {
        name: "Let There Be Rock",
        artist: "AC/DC",
        year: 1990,
        style: "Punk, Dub, Funk",
        country: "USA"
    };
    addToCollection(item);
});