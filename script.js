const galleryContainer = document.getElementById('gallery');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const selectorContainer = document.getElementById('selector');

let currentGallery = null;
let currentIndex = 0;

// Laden der Galerien aus der JSON-Datei
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            // Erste Galerie anzeigen
            showGallery(Object.keys(data)[0], data);
            // Buttons für Galerieauswahl erstellen
            createSelectorButtons(Object.keys(data), data);
        } else {
            console.error('Fehler beim Laden der Galerien:', xhr.statusText);
        }
    }
};
xhr.open('GET', 'galleries.json', true);
xhr.send();

// Funktion zur Anzeige einer Galerie
function showGallery(galleryName, data) {
    currentGallery = data[galleryName];
    currentIndex = 0;
    renderImage();
}

// Funktion zum rendern eines Bildes
function renderImage() {
    galleryContainer.style.opacity = '0'; // Set opacity to 0 before changing the image
    setTimeout(() => {
        galleryContainer.innerHTML = '';

        const title = document.createElement('h1');
        title.textContent = currentGallery[currentIndex].title;
        galleryContainer.appendChild(title);

        const slide = document.createElement('img');
        slide.src = currentGallery[currentIndex].src;
        slide.alt = currentGallery[currentIndex].title;
        slide.className = 'slide active';
        galleryContainer.appendChild(slide);

        const text = document.createElement('span');
        text.textContent = currentGallery[currentIndex].txt;
        galleryContainer.appendChild(text);

        galleryContainer.style.opacity = '1'; // Set opacity back to 1 after the image is rendered
    }, 300); // Wait for 0.5 seconds before rendering the image
}

// Event Listener für Vor- und Zurück-Buttons
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = currentGallery.length - 1;
    }
    renderImage();
});

nextButton.addEventListener('click', () => {
    if (currentIndex < currentGallery.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    renderImage();
});

// Funktion zur Erstellung der Galerieauswahl-Buttons
function createSelectorButtons(galleries, data) {
    galleries.forEach(gallery => {
        const button = document.createElement('button');
        button.textContent = gallery;
        button.className = 'selector-btn';
        button.addEventListener('click', () => {
            showGallery(gallery, data);
            // Aktivieren des ausgewählten Buttons
            document.querySelectorAll('.selector-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            button.classList.add('active');
        });
        selectorContainer.appendChild(button);
    });
}
