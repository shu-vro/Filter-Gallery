var marker = document.getElementById('marker');
var menu = document.querySelectorAll('button');
var allImage = document.querySelectorAll('.image');
var computer = document.querySelectorAll('.computer');
var people = document.querySelectorAll('.people');
var nature = document.querySelectorAll('.nature');
var sites = document.querySelectorAll('.sites');

// Navigation marker animation.
function indicator(e) {
    marker.style.left = e.offsetLeft + 'px';
    marker.style.width = e.offsetWidth + 'px';
}

menu.forEach(link => {
    link.addEventListener('click', (e) => {
        indicator(e.target);
    })
});

// Main function.
function allVisible() {
    allImage.forEach(image => {
        if (!image.classList.contains('visible')) {
            image.classList.add('visible');
        }
    });
    computer.forEach(comp => {
        if (!comp.classList.contains('visible')) {
            comp.classList.add('visible');
        }
    });
}

function compVisible() {
    allImage.forEach((image) => {
        if (image.classList.contains('visible')) {
            image.classList.remove('visible');
        }
    })
    computer.forEach(comp => {
        if (!comp.classList.contains('visible')) {
            comp.classList.add('visible');
        }
    });
}

function peopleVisible() {
    allImage.forEach((image) => {
        if (image.classList.contains('visible')) {
            image.classList.remove('visible');
        }
    })
    people.forEach(people => {
        if (!people.classList.contains('visible')) {
            people.classList.add('visible');
        }
    });
}

function natureVisible() {
    allImage.forEach((image) => {
        if (image.classList.contains('visible')) {
            image.classList.remove('visible');
        }
    })
    nature.forEach(nature => {
        if (!nature.classList.contains('visible')) {
            nature.classList.add('visible');
        }
    });
}

function sitesVisible() {
    allImage.forEach((image) => {
        if (image.classList.contains('visible')) {
            image.classList.remove('visible');
        }
    })
    sites.forEach(sites => {
        if (!sites.classList.contains('visible')) {
            sites.classList.add('visible');
        }
    });
}