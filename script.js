// Gestion du thème
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

function toggleTheme() {
    if (themeToggle.checked) {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

themeToggle.addEventListener('change', toggleTheme);

function checkSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        themeToggle.checked = true;
        body.setAttribute('data-theme', 'dark');
    } else {
        themeToggle.checked = false;
        body.setAttribute('data-theme', 'light');
    }
}

document.addEventListener('DOMContentLoaded', checkSavedTheme);




// Effet de défilement fluide pour le lien "scroll-down"
document.querySelector('.scroll-down').addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// Effet de défilement fluide pour les liens de navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

//home // 
window.addEventListener('scroll', () => {
    const homeSection = document.getElementById('home');
    const homeHeight = homeSection.offsetHeight;
    
    // Cacher la vidéo quand on scroll hors de la section Home
    if (window.scrollY > homeHeight) {
        homeSection.style.overflow = 'visible';
    } else {
        homeSection.style.overflow = 'hidden';
    }
});


// Animation pour la section Équipe

const teamCards = document.querySelectorAll('.team-card');

teamCards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
});

const teamObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    },
    { threshold: 0.1 }
);

teamCards.forEach(card => teamObserver.observe(card));

document.querySelectorAll('.team-card').forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    teamObserver.observe(card);
});

// Ajouter la section "Mon Parcours" à l'observateur d'intersection
const parcoursSection = document.getElementById('parcours');
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.classList.remove('hidden');
            } else {
                entry.target.classList.add('hidden');
                entry.target.classList.remove('visible');
            }
        });
    },
    {
        threshold: 0.1, 
    }
);

observer.observe(parcoursSection);

// Gestion du formulaire de contact
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Merci pour votre message ! Je vous répondrai dès que possible.');
    this.reset();
});

// Effet de parallaxe pour la section Home
window.addEventListener('scroll', () => {
    const homeSection = document.getElementById('home');
    const scrollPosition = window.scrollY;
    homeSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`; 
});

// Effet de transition lors du défilement
const sections = document.querySelectorAll('section');

const observerParc = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.classList.remove('hidden');
            } else {
                entry.target.classList.add('hidden');
                entry.target.classList.remove('visible');
            }
        });
    },
    {
        threshold: 0.1, 
    }
);

sections.forEach((section) => {
    observerParc.observe(section);
});

// Ajouter la section "Stage" à l'observateur d'intersection
const stageSection = document.getElementById('stage');
const observerStage = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.classList.remove('hidden');
            } else {
                entry.target.classList.add('hidden');
                entry.target.classList.remove('visible');
            }
        });
    },
    {
        threshold: 0.1, // Déclenche l'effet lorsque 10% de la section est visible
    }
);

observerStage.observe(stageSection);



// Gestion de la barre de navigation sticky avec effet de transparence
const navbar = document.getElementById('navbar');
const homeSection = document.getElementById('home');

window.addEventListener('scroll', () => {
    const homeHeight = homeSection.offsetHeight;
    if (window.scrollY >= homeHeight) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Gestion du formulaire de contact
document.querySelector('.contact-form form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Merci pour votre message ! Je vous répondrai dès que possible.');
    this.reset();
});
