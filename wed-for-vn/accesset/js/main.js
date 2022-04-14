/* an hien img  */

const itemsImg = document.querySelectorAll('.js-items-navbar')

const listImg = document.querySelectorAll('.js-img')
const listMenu = document.querySelectorAll('.js-taskbar')
const listNav = document.querySelectorAll('.content__navbar-list')
const listCloumn10 = document.querySelectorAll('.js-column-10')

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

/* goi du lkioeu vao gôle dioc  */

document.querySelector('#input-content-btn').onclick = function(e) {

    let contentToVn = document.querySelector('#input-content')

    let content = contentToVn.value;
    /* realod laij trang  */

    /* validate form  */
    let required = document.querySelector('.required');
    if (content.trim() != '') {
        let data = {
            'entry.266544719': content
        };
        let queryString = new URLSearchParams(data);
        queryString = queryString.toString();
        console.log(queryString)



        let xhr = new XMLHttpRequest();
        xhr.open("POST", 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdxO40i-0gywldxoG6UFQSuAbbBqXsKAtr2LTyL8ss_RAvQIw/formResponse', true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(queryString);

        required.innerText = '';
    }
    let errors = {};


    if (content.trim() == '') {
        errors['content'] = 'Hông được để trống nghe ';
        contentToVn.parentElement.querySelector('.required').innerText = errors['content'];

    }


    if (content.trim() != '') {
        document.getElementById('input-content').value = ""
    }
}

/* xu ly phan heart hien thi  */

const heartItems = document.querySelectorAll('.js-heart')
for (const item of heartItems) {
    const i = 0
    item.addEventListener('click', function() {

        document.querySelector('.js-heart.active').classList.remove('active')

        heartItems[1].classList.add('active')


    })
}


/* hover thẻ btn  */

const btnNo = document.querySelector('.js-form-no')
btnNo.onmouseover = function() {
    btnNo.innerHTML = "Có"
}