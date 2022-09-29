

const showMenu = (openId, closeId) => {
     const openBtn = document.getElementById(openId),
          closeBtn = document.getElementById(closeId),
          nav = document.getElementById('nav-list')

     openBtn.addEventListener('click', () => {
          nav.classList.toggle('toggleShow')
          closeBtn.style.display = "block"
          openBtn.style.display = "none"
     })
}
showMenu('open-menu-toggle', 'close-menu-toggle')

const closeMenu = (openId, closeId) => {
     const openBtn = document.getElementById(openId),
          closeBtn = document.getElementById(closeId),
          nav = document.getElementById('nav-list')

     closeBtn.addEventListener('click', () => {
          nav.classList.toggle('toggleShow')
          closeBtn.style.display = "none"
          openBtn.style.display = "block"
     })
}
closeMenu('open-menu-toggle', 'close-menu-toggle')
