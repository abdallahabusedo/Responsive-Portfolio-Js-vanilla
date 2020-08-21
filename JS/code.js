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