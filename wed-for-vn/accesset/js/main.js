/* an hien img  */

const itemsImg = document.querySelectorAll('.js-items-navbar')

const listImg = document.querySelectorAll('.js-img')
const listMenu = document.querySelectorAll('.js-taskbar')
const listNav = document.querySelectorAll('.content__navbar-list')
const listCloumn10 = document.querySelectorAll('.js-column-10')
console.log(listCloumn10)

/* ham xu li  */

listMenu.forEach((itmenu, index) => {
    const itCloumn10 = listCloumn10[index]
    itmenu.onclick = function() {
        document.querySelector('.grid__column-10.js-column-10.active').classList.remove('active')
        document.querySelector('.js-taskbar.taskbar--active ').classList.remove('taskbar--active')

        itCloumn10.classList.add('active')
        this.classList.add('taskbar--active')
    }
})
itemsImg.forEach((itimg, index) => {

    const img = listImg[index]

    itimg.onclick = function() {
        document.querySelector('.content__subsnavbar-nav.js-items-navbar.taskbar--active').classList.remove('taskbar--active')
        document.querySelector('.content__items.js-img.active').classList.remove('active')


        img.classList.add('active')
        this.classList.add('taskbar--active')
    }
})




/* lang nghe click chuot */