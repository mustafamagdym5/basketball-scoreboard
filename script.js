let scoreNum = document.getElementById("score-num");
let homeEl = document.getElementById("home-el");
let guestEl = document.getElementById("guest-el");
let restartBtn = document.getElementById("restart-btn");
let homeFoulEl = document.getElementById("home-fouls-el");
let guestFoulEl = document.getElementById("guest-fouls-el");
let homeCount = 0;
let guestCount = 0;
let homeFoulCount = 0;
let guestFoulCount = 0;

homeEl.textContent = homeCount;
guestEl.textContent = guestCount;
homeFoulEl.textContent = homeFoulCount;
guestFoulEl.textContent = guestFoulCount;

function restart() {
    homeCount = 0;
    guestCount = 0;
    homeFoulCount = 0;
    guestFoulCount = 0;
    homeEl.textContent = homeCount;
    guestEl.textContent = guestCount;
    homeFoulEl.textContent = homeFoulCount;
    guestFoulEl.textContent = guestFoulCount;
}

function add1Home() {
    homeCount += 1;
    homeEl.textContent = homeCount;    
}

function add2Home() {
    homeCount += 2;
    homeEl.textContent = homeCount;    
}

function add3Home() {
    homeCount += 3;
    homeEl.textContent = homeCount;    
}

function add1Guest() {
    guestCount += 1;
    guestEl.textContent = guestCount;    
}

function add2Guest() {
    guestCount += 2;
    guestEl.textContent = guestCount;    
}

function add3Guest() {
    guestCount += 3;
    guestEl.textContent = guestCount;    
}

function addFoulHome() {
    homeFoulCount += 1;
    homeFoulEl.textContent = homeFoulCount;
}

function addFoulGuest() {
    guestFoulCount += 1;
    guestFoulEl.textContent = guestFoulCount;
}