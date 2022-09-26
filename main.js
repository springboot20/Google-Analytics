/*********************************************
 * SHOW MENU HANDLER METHOD
**********************************************/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        navMenu = document.getElementById(navId)

    if (toggle && navMenu) {
        toggle.addEventListener('click', () => {
            navMenu.classList.add('show')
        })
    }
}
showMenu('toggle', 'nav-menu');

/*********************************************
 * LINK ACTION HANDLER METHOD
**********************************************/
const navLinks = document.querySelectorAll('.nav--link')
function linkAction() {
    navLinks.forEach(n => n.classList.remove('active'))
    let active = this;
    active.classList.add('active')

    document.getElementById('nav-menu').classList.remove('show')
}
navLinks.forEach(n => n.addEventListener('click', linkAction))
