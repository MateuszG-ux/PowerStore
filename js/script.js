// --- LIGHTBOX ---
function openLightbox(img) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightboxImg.src = img.src;
  lightbox.style.display = 'flex';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.style.display = 'none';
}

// --- FORMULARZ KONTAKTOWY ---
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Dziękujemy za kontakt! Wkrótce się odezwiemy.');
  this.reset();
});

// --- SMOOTH SCROLL NA NAWIGACJI ---
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetElem = document.getElementById(targetId);
    if (targetElem) {
      const elemRect = targetElem.getBoundingClientRect();
      const elemTop = window.scrollY + elemRect.top;
      // Przewiń tak, by zostawić 20px odstępu od góry
      const scrollTo = elemTop - 40;
      window.scrollTo({
        top: scrollTo,
        behavior: 'smooth'
      });
    }
  });
});


// --- SLIDER GALERII W PĘTLI ---

const galSliderTrack = document.querySelector('.galeria .slider-track');
const galSliderItemsOriginal = document.querySelectorAll('.galeria .slider-item');
const galLeftBtn = document.querySelector('.galeria .left-btn');
const galRightBtn = document.querySelector('.galeria .right-btn');

const galVisibleCount = 3;
const galItemWidth = 370; // 330px zdjęcie + marginesy (dostosuj jeśli trzeba)

let galCurrentIndex = galVisibleCount; // start od pierwszego elementu po klonach

// Klonowanie elementów dla efektu pętli
function cloneItems() {
  // Klon ostatnich na początek
  for (let i = galSliderItemsOriginal.length - galVisibleCount; i < galSliderItemsOriginal.length; i++) {
    const clone = galSliderItemsOriginal[i].cloneNode(true);
    clone.classList.add('clone');
    galSliderTrack.prepend(clone);
  }
  // Klon pierwszych na koniec
  for (let i = 0; i < galVisibleCount; i++) {
    const clone = galSliderItemsOriginal[i].cloneNode(true);
    clone.classList.add('clone');
    galSliderTrack.appendChild(clone);
  }
}
cloneItems();

const galSliderItems = document.querySelectorAll('.galeria .slider-item'); // już z klonami

// Ustawienie szerokości tracka
galSliderTrack.style.width = `${galSliderItems.length * galItemWidth}px`;
// Startowa pozycja slidera
galSliderTrack.style.transform = `translateX(${-galCurrentIndex * galItemWidth}px)`;

// Blokada podczas animacji
let isSliding = false;

function slideToIndex(newIndex) {
  if (isSliding) return;
  isSliding = true;

  galSliderTrack.style.transition = 'transform 0.4s ease';
  galCurrentIndex = newIndex;
  galSliderTrack.style.transform = `translateX(${-galCurrentIndex * galItemWidth}px)`;

  galSliderTrack.addEventListener('transitionend', handleTransitionEnd);
}

function handleTransitionEnd() {
  galSliderTrack.style.transition = 'none';

  if (galCurrentIndex >= galSliderItems.length - galVisibleCount) {
    galCurrentIndex = galVisibleCount;
    galSliderTrack.style.transform = `translateX(${-galCurrentIndex * galItemWidth}px)`;
  } else if (galCurrentIndex < galVisibleCount) {
    galCurrentIndex = galSliderItems.length - 2 * galVisibleCount;
    galSliderTrack.style.transform = `translateX(${-galCurrentIndex * galItemWidth}px)`;
  }

  isSliding = false;
  galSliderTrack.removeEventListener('transitionend', handleTransitionEnd);
}

galLeftBtn.addEventListener('click', () => {
  slideToIndex(galCurrentIndex - 1);
});

galRightBtn.addEventListener('click', () => {
  slideToIndex(galCurrentIndex + 1);
});