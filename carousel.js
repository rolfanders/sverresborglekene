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

  images.forEach((image, index) => {
    const img = document.createElement('img');
    img.src = image.url;
    img.alt = image.description || 'Bilde';
    img.classList.add(index === 0 ? 'active' : '');
    container.appendChild(img);
  });

  let currentIndex = 0;
  setInterval(() => {
    const images = container.querySelectorAll('img');
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
  }, 3000); // Bytter bilde hvert 3. sekund
}

const jsonUrl =
  'https://grenaderkorpset.no/sverresborglekene/2025/assets/slideshow/bilder.json'; // URL til JSON-filen
fetchImagesFromJson(jsonUrl).then((images) =>
  createCarousel(images, 'carousel')
);
