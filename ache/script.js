const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

togglebutton.addEventlistener('click', ()=> {
    navbarLinks.classlist.toggle('active')
})