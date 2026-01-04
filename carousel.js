async function fetchImagesFromJson(jsonUrl) {
  try {
    // Hent JSON-filen fra serveren
    const response = await fetch(jsonUrl);
    if (!response.ok) {
      console.error(`HTTP-feil: ${response.status} ${response.statusText}`);
      throw new Error(`Kunne ikke hente JSON-filen: ${response.status}`);
    }
    const data = await response.json();
    console.log('Hentet bilder:', data.images?.length || 0);
    return data.images || []; // Returner listen over bilder
  } catch (error) {
    console.error('Feil ved henting av bilder:', error);
    return [];
  }
}

function createCarousel(images, containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container med id "${containerId}" ble ikke funnet`);
    return;
  }

  if (!images.length) {
    console.warn('Ingen bilder å vise');
    container.innerHTML = '<p>Ingen bilder å vise.</p>';
    return;
  }

  // Filtrer ut bilder som mangler URL
  const validImages = images.filter((image) => image.url);
  if (!validImages.length) {
    console.warn('Ingen gyldige bilder (mangler URL)');
    container.innerHTML = '<p>Ingen gyldige bilder å vise.</p>';
    return;
  }

  console.log(`Lager karusell med ${validImages.length} bilder`);

  // Legg til bilder i karusellen
  validImages.forEach((image, index) => {
    const img = document.createElement('img');
    img.src = image.url;
    img.alt = image.description || 'Bilde';
    img.loading = 'lazy'; // Lazy loading for bedre ytelse
    
    // Håndter feil ved lasting av bilder
    img.onerror = () => {
      console.error(`Kunne ikke laste bilde: ${image.url}`);
    };
    
    img.onload = () => {
      console.log(`Bilde lastet: ${image.url}`);
    };
    
    if (index === 0) {
      img.classList.add('active'); // Kun første bilde får 'active'
    }
    container.appendChild(img);
  });

  // Bildebytte logikk
  let currentIndex = 0;
  const allImages = container.querySelectorAll('img');
  
  if (allImages.length === 0) {
    console.error('Ingen bilder ble lagt til i karusellen');
    return;
  }

  setInterval(() => {
    if (allImages.length > 1) {
      allImages[currentIndex].classList.remove('active'); // Fjern aktiv klasse
      currentIndex = (currentIndex + 1) % allImages.length; // Gå til neste bilde
      allImages[currentIndex].classList.add('active'); // Legg til aktiv klasse
    }
  }, 3000); // Bytt bilde hver 3. sekund
}
// Vent til DOM-en er klar
function initCarousel() {
  // Bruk lokal JSON-fil for utvikling (unngår CORS-problemer)
  // I produksjon kan du bytte tilbake til den eksterne URL-en
  const jsonUrl = './bilder.json'; // Lokal fil for utvikling
  // const jsonUrl = 'https://grenaderkorpset.no/sverresborglekene/2025/assets/slideshow/bilder.json'; // Produksjon
  fetchImagesFromJson(jsonUrl).then((images) => {
    console.log('Bilder hentet, oppretter karusell...');
    createCarousel(images, 'carousel');
  });
}

// Kjør når DOM-en er klar
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCarousel);
} else {
  // DOM-en er allerede klar
  initCarousel();
}