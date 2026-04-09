const films = [
    {
        title: "Joker",
        genre: "Thriller • Drame • Crime",
        description: "Arthur Fleck, un comédien raté et marginalisé par la société, sombre peu à peu dans la folie et devient le criminel emblématique connu sous le nom de Joker.",
        posterUrl: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
    },
    {
        title: "Inception",
        genre: "Sci-Fi • Action • Thriller",
        description: "Un voleur qui s'infiltre dans les rêves des autres se voit offrir une chance de retrouver sa vie passée en échange d'une mission impossible.",
        posterUrl: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg"
    },
    {
        title: "The Dark Knight",
        genre: "Action • Crime • Drame",
        description: "Batman affronte le Joker, un criminel anarchiste qui plonge Gotham City dans le chaos et met à l'épreuve ses convictions morales.",
        posterUrl: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
    },
    {
        title: "Interstellar",
        genre: "Sci-Fi • Aventure • Drame",
        description: "Un groupe d'astronautes voyage à travers un trou de ver pour trouver une nouvelle planète habitable et sauver l'humanité de l'extinction.",
        posterUrl: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
    },
    {
        title: "Avengers: Endgame",
        genre: "Action • Sci-Fi • Aventure",
        description: "Les Avengers survivants s'unissent pour inverser les actions de Thanos et restaurer l'ordre dans l'univers après la destruction massive.",
        posterUrl: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
    },
    {
        title: "Parasite",
        genre: "Thriller • Drame • Noir",
        description: "Une famille pauvre s'infiltre progressivement dans la vie d'une famille riche, déclenchant une série d'événements inattendus et tragiques.",
        posterUrl: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg"
    },
    {
        title: "The Godfather",
        genre: "Crime • Drame",
        description: "Le patriarche vieillissant d'une dynastie du crime organisé transfère le contrôle de son empire à son fils réticent.",
        posterUrl: "https://image.tmdb.org/t/p/w500/eEslKSwcqmiNS6va24Pbxf2UKmJ.jpg"
    },
    {
        title: "Fight Club",
        genre: "Thriller • Drame • Crime",
        description: "Un homme insomniaque et un vendeur de savon charismatique fondent un club de combat clandestin qui évolue en quelque chose de bien plus dangereux.",
        posterUrl: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg"
    },
    {
        title: "The Grand Budapest Hotel",
        genre: "Comédie • Aventure",
        description: "Les aventures rocambolesques d'un concierge d'hôtel légendaire et de son fidèle groom dans une Europe fictive des années 1930.",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_SX300.jpg"
    },
    {
        title: "Superbad",
        genre: "Comédie",
        description: "Deux lycéens maladroits tentent de profiter de leur dernière soirée avant l'université en cherchant à tout prix à impressionner les filles.",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BMTc0NjIyMjA2OF5BMl5BanBnXkFtZTcwMzIxNDE1MQ@@._V1_SX300.jpg"
    },
    {
        title: "The Hangover",
        genre: "Comédie",
        description: "Trois amis se réveillent à Las Vegas sans aucun souvenir de la nuit précédente et doivent retrouver le marié disparu avant le mariage.",
        posterUrl: "https://image.tmdb.org/t/p/w500/uluhlXubGu1VxU63X9VHCLWDAYP.jpg"
    },
    {
        title: "Mad Max: Fury Road",
        genre: "Action • Sci-Fi • Aventure",
        description: "Dans un monde post-apocalyptique, Max s'allie à Furiosa pour fuir un tyran impitoyable à travers un désert hostile dans une course-poursuite épique.",
        posterUrl: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg"
    },
    {
        title: "John Wick",
        genre: "Action • Thriller • Crime",
        description: "Un ancien tueur à gages sort de sa retraite pour traquer les hommes qui ont tué son chien, le dernier souvenir de sa femme décédée.",
        posterUrl: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg"
    },
    {
        title: "Mission: Impossible",
        genre: "Action • Espionnage • Thriller",
        description: "L'agent Ethan Hunt est accusé d'avoir tué ses coéquipiers lors d'une mission secrète et doit découvrir qui le piège tout en restant en fuite.",
        posterUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3W3Rb5_4ya8FSpRnoSpkt2oMOu2PWyvyBMBCy38m71Lk-zW6CKn5RSko&s"
    },
    {
        title: "The Shawshank Redemption",
        genre: "Drame",
        description: "Un banquier innocent condamné à perpétuité se lie d'amitié avec un détenu chevronné et trouve un moyen de survivre à l'injustice du système carcéral.",
        posterUrl: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg"
    },
    {
        title: "Forrest Gump",
        genre: "Drame • Romance",
        description: "La vie extraordinaire d'un homme au QI limité mais au grand cœur, qui se retrouve mêlé aux grands événements de l'histoire américaine du XXe siècle.",
        posterUrl: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg"
    },
    {
        title: "Schindler's List",
        genre: "Drame • Histoire • Guerre",
        description: "Pendant la Seconde Guerre mondiale, un industriel allemand risque tout pour sauver plus d'un millier de Juifs polonais des camps de la mort nazis.",
        posterUrl: "https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg"
    }
];

// ── Gradients ──
const gradients = [
    { from: '#0f0c29', to: '#302b63' },
    { from: '#134e5e', to: '#71b280' },
    { from: '#c94b4b', to: '#4b134f' },
    { from: '#000428', to: '#004e92' },
    { from: '#1a1a2e', to: '#e94560' },
    { from: '#0f2027', to: '#2c5364' },
    { from: '#373b44', to: '#4286f4' },
    { from: '#642b73', to: '#c6426e' },
    { from: '#1d4350', to: '#a43931' },
    { from: '#003973', to: '#e5e5be' },
    { from: '#200122', to: '#6f0000' },
    { from: '#1a1a1a', to: '#4CAF50' },
];

function getRandomGradient() {
    const g = gradients[Math.floor(Math.random() * gradients.length)];
    return `linear-gradient(to top, ${g.from}, ${g.to})`;
}

// ── Create Card ──
function createCard(film) {
    return `
    <article class="film-card" data-title="${film.title}" style="--poster-url: url('${film.posterUrl}');">
        <div class="card-initial">
            <h3 class="film-card-title">${film.title}</h3>
            <p class="film-card-genre">${film.genre.split(' • ').slice(0, 2).join(' • ')}</p>
        </div>
        <div class="card-details-overlay">
            <p class="film-card-genre">${film.genre}</p>
            <h3 class="film-card-title">${film.title}</h3>
            <p class="film-card-desc">${film.description}</p>
            <div class="card-actions">
                <button class="details-btn">voir les détails</button>
                <span class="heart-icon">❤</span>
            </div>
        </div>
    </article>`;
}

function applyGradients(container) {
    container.querySelectorAll('.film-card').forEach(card => {
        card.style.setProperty('--random-color', getRandomGradient());
    });
}

// ── Containers ──
const filmGrid    = document.querySelector('.film-grid');
const favGrid     = document.querySelector('.fav-film-grid');
const badge       = document.querySelector('.badge');

// ── Render main films ──
filmGrid.innerHTML = films.map(createCard).join('');
applyGradients(filmGrid);

// ── Favorites state ──
let favorites = [];

function updateBadge() {
    badge.textContent = favorites.length;
}

function renderFavGrid() {
    if (favorites.length === 0) {
        favGrid.innerHTML = '<p class="empty-fav">Aucun favori ajouté.</p>';
        return;
    }
    favGrid.innerHTML = favorites.map(createCard).join('');
    applyGradients(favGrid);

    // Remove from fav when clicking heart in fav grid
    favGrid.querySelectorAll('.heart-icon').forEach(icon => {
        icon.style.color = '#e8161e'; // already fav = red
        icon.addEventListener('click', function () {
            const title = this.closest('.film-card').dataset.title;
            favorites = favorites.filter(f => f.title !== title);

            // Reset heart color in main grid
            const mainCard = [...filmGrid.querySelectorAll('.film-card')]
                .find(c => c.dataset.title === title);
            if (mainCard) {
                mainCard.querySelector('.heart-icon').classList.remove('active-fav');
            }

            updateBadge();
            renderFavGrid();
        });
    });
}

// ── Add to favorites from main grid ──
filmGrid.addEventListener('click', function (e) {
    if (e.target.classList.contains('heart-icon')) {
        const card  = e.target.closest('.film-card');
        const title = card.dataset.title;
        const film  = films.find(f => f.title === title);
        const alreadyAdded = favorites.some(f => f.title === title);

        if (!alreadyAdded) {
            favorites.push(film);
            e.target.classList.add('active-fav');
            updateBadge();
            renderFavGrid();
        } else {
            // Toggle off — remove from favorites
            favorites = favorites.filter(f => f.title !== title);
            e.target.classList.remove('active-fav');
            updateBadge();
            renderFavGrid();
        }
    }
});

// ── Search ──
function displayFilms(filmsArray) {
    filmGrid.innerHTML = filmsArray.map(createCard).join('');
    applyGradients(filmGrid);

    // Restore active-fav state on re-render
    filmGrid.querySelectorAll('.film-card').forEach(card => {
        const title = card.dataset.title;
        if (favorites.some(f => f.title === title)) {
            card.querySelector('.heart-icon').classList.add('active-fav');
        }
    });
}

document.querySelector('.search-container input').addEventListener('input', function () {
    const val = this.value.toLowerCase();
    displayFilms(films.filter(f => f.title.toLowerCase().startsWith(val)));
});

// ── Filter buttons ──
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(btn => {
    btn.addEventListener('click', function () {
        filterButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        const filter = this.textContent.trim().toLowerCase();

        filmGrid.querySelectorAll('.film-card').forEach(card => {
            const genre = card.querySelector('.film-card-genre').textContent.toLowerCase();
            card.style.display = (filter === 'tous' || genre.includes(filter)) ? 'block' : 'none';
        });
    });
});

// ── Modal ──
const modal     = document.getElementById('filmModal');
const modalPoster = document.querySelector('.modal-poster');
const modalTitle  = document.querySelector('.modal-title');
const modalGenre  = document.querySelector('.modal-genre');
const modalDesc   = document.querySelector('.modal-description');
const closeModal  = document.querySelector('.close-modal');

document.addEventListener('click', function (e) {
    if (e.target.classList.contains('details-btn')) {
        const title = e.target.closest('.film-card').dataset.title;
        const film  = films.find(f => f.title === title);
        modalPoster.style.backgroundImage = `url(${film.posterUrl})`;
        modalTitle.textContent = film.title;
        modalGenre.textContent = film.genre;
        modalDesc.textContent  = film.description;
        modal.style.display    = 'flex';
    }
});

closeModal.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', e => { if (e.target === modal) modal.style.display = 'none'; });
