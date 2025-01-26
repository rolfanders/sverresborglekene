async function fetchImagesFromJson(jsonUrl) {
  try {
    // Hent JSON-filen fra serveren
    const response = await fetch(jsonUrl);
    if (!response.ok) throw new Error('Kunne ikke hente JSON-filen.');
    const data = await response.json();
    return data.images || []; // Returner listen over bilder
  } catch (error) {
    console.error('Feil ved henting av bilder:', error);
    return [];
  }
}

function createCarousel(images, containerId) {
  const container = document.getElementById(containerId);
  if (!images.length) {
    container.innerHTML = '<p>Ingen bilder å vise.</p>';
    return;
  }

  // Filtrer ut bilder som mangler URL
  const validImages = images.filter((image) => image.url);
  if (!validImages.length) {
    container.innerHTML = '<p>Ingen gyldige bilder å vise.</p>';
    return;
  }

  // Legg til bilder i karusellen
  validImages.forEach((image, index) => {
    const img = document.createElement('img');
    img.src = image.url;
    img.alt = image.description || 'Bilde';
    if (index === 0) {
      img.classList.add('active'); // Kun første bilde får 'active'
    }
    container.appendChild(img);
  });

  // Bildebytte logikk
  let currentIndex = 0;
  const allImages = container.querySelectorAll('img');

  setInterval(() => {
    allImages[currentIndex].classList.remove('active'); // Fjern aktiv klasse
    currentIndex = (currentIndex + 1) % allImages.length; // Gå til neste bilde
    allImages[currentIndex].classList.add('active'); // Legg til aktiv klasse
  }, 3000); // Bytt bilde hver 3. sekund
}
const jsonUrl =
  'https://grenaderkorpset.no/sverresborglekene/2025/assets/slideshow/bilder.json'; // URL til JSON-filen
fetchImagesFromJson(jsonUrl).then((images) =>
  createCarousel(images, 'carousel')
);