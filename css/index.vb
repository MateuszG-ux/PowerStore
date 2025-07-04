<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>PowerStore - Motory, Quady i Akcesoria</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <header>
    <div class="container header-container">
      <img src="img/logo.png" alt="PowerStore logo" class="logo-img" />
      <nav>
        <ul>
          <li><a href="#oferta">Oferta</a></li>
          <li><a href="#galeria">Galeria</a></li>
          <li><a href="#kontakt">Kontakt</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <section class="hero">
    <div class="container">
      <h2>Pełna moc. Zero kompromisów.</h2>
      <p>Motory crossowe, quady i najlepsze akcesoria do jazdy w terenie.</p>
      <a href="#oferta" class="btn">Zobacz ofertę</a>
    </div>
  </section>

  <section id="oferta" class="oferta">
    <div class="container">
      <h2>Nasza oferta</h2>
      <div class="oferta-grid">
        <div class="oferta-item">
          <img src="img/moto.jpg" alt="Motocykle crossowe" />
          <h3>Motocykle Cross</h3>
        </div>
        <div class="oferta-item">
          <img src="img/quad.jpg" alt="Quady terenowe" />
          <h3>Quady</h3>
        </div>
        <div class="oferta-item">
          <img src="img/akcesoria.jpg" alt="Akcesoria motocyklowe" />
          <h3>Akcesoria</h3>
        </div>
      </div>
    </div>
  </section>

  <section id="galeria" class="galeria">
    <div class="container">
      <h2>Galeria</h2>
      <div class="galeria-grid">
        <img src="img/1.jpg" alt="Galeria 1" onclick="openLightbox(this)" />
        <img src="img/2.jpg" alt="Galeria 2" onclick="openLightbox(this)" />
        <img src="img/3.jpg" alt="Galeria 3" onclick="openLightbox(this)" />
        <img src="img/4.jpg" alt="Galeria 4" onclick="openLightbox(this)" />
      </div>
    </div>
  </section>

  <section id="kontakt" class="kontakt">
    <div class="container">
      <h2>Kontakt</h2>
      <form id="contactForm">
        <input type="text" placeholder="Imię i nazwisko" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Wiadomość" required></textarea>
        <button type="submit" class="btn">Wyślij</button>
      </form>
      <div class="info">
        <p><strong>Telefon:</strong> +48 123 456 789</p>
        <p><strong>Email:</strong> kontakt@powerstore.pl</p>
        <p><strong>Adres:</strong> Rzecko 23A, 73-200 Choszczno</p>
      </div>
    </div>
  </section>

  <footer>
    <div class="container">
      <p>© 2025 PowerStore. Wszelkie prawa zastrzeżone.</p>
    </div>
  </footer>

  <div id="lightbox" class="lightbox" onclick="closeLightbox()">
    <img id="lightbox-img" src="" alt="Lightbox" />
  </div>

  <script src="script.js"></script>
</body>
</html>