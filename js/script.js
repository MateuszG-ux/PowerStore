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
      const scrollTo = elemTop - 40;
      window.scrollTo({
        top: scrollTo,
        behavior: 'smooth'
      });
    }
  });
});

// --- SLIDER GALERII W PĘTLI I OBSŁUGĄ DOTYKU ---

const galSliderTrack = document.querySelector('.galeria .slider-track');
const galSliderItemsOriginal = document.querySelectorAll('.galeria .slider-item');
const galLeftBtn = document.querySelector('.galeria .left-btn');
const galRightBtn = document.querySelector('.galeria .right-btn');

const galVisibleCount = 3; // liczba widocznych elementów

// Klonowanie elementów na potrzeby efektu pętli
function cloneItems() {
  for (let i = galSliderItemsOriginal.length - galVisibleCount; i < galSliderItemsOriginal.length; i++) {
    const clone = galSliderItemsOriginal[i].cloneNode(true);
    clone.classList.add('clone');
    galSliderTrack.prepend(clone);
  }
  for (let i = 0; i < galVisibleCount; i++) {
    const clone = galSliderItemsOriginal[i].cloneNode(true);
    clone.classList.add('clone');
    galSliderTrack.appendChild(clone);
  }
}
cloneItems();

const galSliderItems = document.querySelectorAll('.galeria .slider-item');

let galCurrentIndex = galVisibleCount;
let isSliding = false;

// Pobierz dynamicznie szerokość elementu (szerokość + margin)
function getItemWidth() {
  const style = getComputedStyle(galSliderItems[0]);
  return galSliderItems[0].offsetWidth + parseInt(style.marginRight);
}

// Ustaw szerokość tracka zależną od ilości elementów i szerokości pojedynczego
function setTrackWidth() {
  galSliderTrack.style.width = `${galSliderItems.length * getItemWidth()}px`;
}

// Ustaw początkową pozycję slidera
function setInitialPosition() {
  galSliderTrack.style.transition = 'none';
  galCurrentIndex = galVisibleCount;
  galSliderTrack.style.transform = `translateX(${-galCurrentIndex * getItemWidth()}px)`;
}

setTrackWidth();
setInitialPosition();

// Przesunięcie slidera do wybranego indeksu z animacją
function slideToIndex(newIndex) {
  if (isSliding) return;
  isSliding = true;

  galSliderTrack.style.transition = 'transform 0.4s ease';
  galCurrentIndex = newIndex;
  galSliderTrack.style.transform = `translateX(${-galCurrentIndex * getItemWidth()}px)`;

  galSliderTrack.addEventListener('transitionend', handleTransitionEnd);
}

function handleTransitionEnd() {
  galSliderTrack.style.transition = 'none';

  if (galCurrentIndex >= galSliderItems.length - galVisibleCount) {
    galCurrentIndex = galVisibleCount;
    galSliderTrack.style.transform = `translateX(${-galCurrentIndex * getItemWidth()}px)`;
  } else if (galCurrentIndex < galVisibleCount) {
    galCurrentIndex = galSliderItems.length - 2 * galVisibleCount;
    galSliderTrack.style.transform = `translateX(${-galCurrentIndex * getItemWidth()}px)`;
  }

  isSliding = false;
  galSliderTrack.removeEventListener('transitionend', handleTransitionEnd);
}

// Obsługa kliknięć w przyciski
galLeftBtn.addEventListener('click', () => {
  slideToIndex(galCurrentIndex - 1);
});

galRightBtn.addEventListener('click', () => {
  slideToIndex(galCurrentIndex + 1);
});

// --- OBSŁUGA DOTYKU (TOUCH) ---

let startX = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let isDragging = false;

galSliderTrack.addEventListener('touchstart', touchStart);
galSliderTrack.addEventListener('touchmove', touchMove);
galSliderTrack.addEventListener('touchend', touchEnd);

function touchStart(event) {
  if (isSliding) return;
  startX = event.touches[0].clientX;
  prevTranslate = -galCurrentIndex * getItemWidth();
  isDragging = true;
  galSliderTrack.style.transition = 'none';
}

function touchMove(event) {
  if (!isDragging) return;
  const currentX = event.touches[0].clientX;
  const diff = currentX - startX;
  currentTranslate = prevTranslate + diff;
  galSliderTrack.style.transform = `translateX(${currentTranslate}px)`;
}

function touchEnd() {
  if (!isDragging) return;
  isDragging = false;
  const movedBy = currentTranslate - prevTranslate;

  if (movedBy < -50) {
    slideToIndex(galCurrentIndex + 1);
  } else if (movedBy > 50) {
    slideToIndex(galCurrentIndex - 1);
  } else {
    slideToIndex(galCurrentIndex);
  }
}

// Dostosowanie slidera po zmianie rozmiaru okna
window.addEventListener('resize', () => {
  setTrackWidth();
  setInitialPosition();
});
