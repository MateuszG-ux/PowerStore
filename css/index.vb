<div class="container">
      <h2>Oferta</h2>
      <div class="oferta-grid dwa-kafelki">
        <a href="motocrossy.html" class="oferta-link">
        <div class="oferta-item">
          <div class="arrow"></div>
          <img src="img/moto.png" alt="Motocykle crossowe" />
          <h3>Motocykle</h3>
        </div>
      </a>
      <a href="quady.html" class="oferta-link">
        <div class="oferta-item">
          <div class="arrow"></div>
          <img src="img/quad.png" alt="Quady terenowe" />
          <h3>Mx</h3>
        </div>
        </a>
        <a href="supermot.html" class="oferta-link">
          <div class="oferta-item">
            <div class="arrow"></div>
            <img src="img/supermoto.png" alt="MSupermoto" />
               <h3>Supermoto</h3>
          </div>
        </a>

        <a href="atv.html" class="oferta-link">
         <div class="oferta-item">
           <div class="arrow"></div>
           <img src="img/atv.png" alt="ATV" />
           <h3>ATV</h3>
         </div>
        </a>
      </div>
    </div>

    /* Ustawienie kafelków pionowo oraz dodanie strzałki po lewej */
.oferta-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
  justify-items: center;
  max-width: 1200px; /* lub inna szerokość odpowiednia do projektu */
  margin: 0 auto;
}

.oferta-item {
  position: relative;
  padding: 20px 20px 20px 70px; /* zwiększony padding po lewej na strzałkę */
  background: #dad6d1;
  border-radius: 8px;
  text-align: left;
  width: 100%;
  cursor: default;
  transition: transform 0.3s;
}

.oferta-item:hover {
  transform: scale(1.03);
}

/* Strzałka po lewej */
.oferta-item .arrow {
  position: absolute;
  left: 20px; /* wcześniej było -50px, teraz wewnątrz kafelka */
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background-image: url('data:image/svg+xml;utf8,<svg fill="%23FF6600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M9.29 6.71a1 1 0 011.42 0L15 11l-4.29 4.29a1 1 0 01-1.42-1.42L12.17 12 9.29 9.12a1 1 0 010-1.41z"/></svg>');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  transition: background-color 0.3s;
}

.oferta-item:hover .arrow {
  background-image: url('data:image/svg+xml;utf8,<svg fill="%23FF4500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M9.29 6.71a1 1 0 011.42 0L15 11l-4.29 4.29a1 1 0 01-1.42-1.42L12.17 12 9.29 9.12a1 1 0 010-1.41z"/></svg>');
}

/* Oferta item images */
.oferta-item img {
  width: 400px;
  height: 310px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 10px;
}

.oferta-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.oferta-link .oferta-item {
  cursor: pointer;
}