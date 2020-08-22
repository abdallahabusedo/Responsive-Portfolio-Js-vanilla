/*)======<o8{Menu Show}8o>======( */

const showMenu = (toggleID, navID) => {
    const Toggle = document.getElementById(toggleID);
    const Nav = document.getElementById(navID);
    if (Toggle && Nav) {
        Toggle.addEventListener("click", () => {
            Nav.classList.toggle("Show");
        });
    }
};

showMenu("NavBar__Toggle", "NavBar__Menu");

const navLink = document.getElementById("NavBar__Link");

function linkAction() {
    navLink.forEach((n) => n.classList.remove("Active"));
    this.classList.add("Active");
    const navMenu = document.getElementById("nav-NavBar__Menu");
    navMenu.classList.remove("Show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true,
});



sr.reveal('.Home__Title', {});
sr.reveal(".Home__Button__Contact", { delay: 200 });
sr.reveal(".Home__img", { delay: 400 });
sr.reveal(".Home__Social__icon", { interval: 200 }); *

sr.reveal('.About__Image', {});
sr.reveal('.About__Subtitle', { delay: 400 });
sr.reveal('.About__Title', { delay: 400 });

/*SCROLL SKILLS*/
sr.reveal('.Skills__Subtitle', {});
sr.reveal('.Skills__Data', { interval: 200 });
sr.reveal('.Skills__IMG', { delay: 600 });

/*SCROLL WORK*/
sr.reveal('.Work__IMG', { interval: 200 });

/*SCROLL CONTACT*/
sr.reveal('.Contact__Input', { interval: 200 });