const showMenu = (toggleId, menuId) => {
     const toggleBtn = document.getElementById(`${toggleId}`)
     const menuBar = document.getElementById(`${menuId}`)

     if (toggleBtn && menuBar) {
          toggleBtn.addEventListener('click', () => {
               menuBar.classList.add('show')
          })
     }
}
showMenu('toggle', 'nav-menu')
