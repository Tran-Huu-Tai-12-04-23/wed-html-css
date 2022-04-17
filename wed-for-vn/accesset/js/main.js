/* an hien img  */

const itemsImg = document.querySelectorAll('.js-items-navbar')
const gridRow = document.querySelector('.grid__row.position')


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
        document.querySelector('.content__items.js-img.active__flex').classList.remove('active__flex')


        img.classList.add('active__flex')
        this.classList.add('taskbar--active')
    }
})




/* lang nghe click chuot */
/* an hien modal  */





/* goi du lkioeu vao gôle dioc  */
const modalIput = document.querySelector('.modal')
document.querySelector('#input-content-btn').onclick = function(e) {


    let contentToVn = document.querySelector('#input-content')

    let content = contentToVn.value;

    /* realod laij trang  */

    /* validate form  */
    let required = document.querySelector('.required');
    required.innerText = '';

    if (content.trim() != '') {
        let data = {
            'entry.266544719': content2
        };
        let queryString = new URLSearchParams(data);
        queryString = queryString.toString();



        let xhr = new XMLHttpRequest();
        xhr.open("POST", 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdxO40i-0gywldxoG6UFQSuAbbBqXsKAtr2LTyL8ss_RAvQIw/formResponse', true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(queryString);


    }
    let errors = {};


    if (content.trim() == "") {
        errors['content'] = 'Hông được để trống nghe ';
        contentToVn.parentElement.querySelector('.required').innerText = errors['content'];

    }
    if (content.trim() != '') {
        document.getElementById('input-content').value = ""
    }





}
document.querySelector('#input-content-btn').onclick = function() {
    /* xu ly  modal  */
    modalIput.classList.add('open')
}
const modalClose = document.querySelector('.modal__input-footer')
modalClose.addEventListener('click', function() {
        modalIput.classList.remove('open')
    })
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
btnNo.onmouseleave = function() {
    btnNo.innerHTML = "Không"
}



/* lay du lieu  */

let btnInput = document.querySelector('#input-content-btn2')
btnInput.onclick = function() {
    let content2 = document.querySelector('.form__input-content2')
    let pContent = content2.value
    console.log(pContent)

    if (pContent.trim() != 0) {
        let data2 = {
            'entry.266544719': "subs : " + pContent
        };
        let queryString2 = new URLSearchParams(data2);
        queryString2 = queryString2.toString();



        let xhr = new XMLHttpRequest();
        xhr.open("POST", 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdxO40i-0gywldxoG6UFQSuAbbBqXsKAtr2LTyL8ss_RAvQIw/formResponse', true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(queryString2);


    }
    if (pContent.trim() != '') {
        document.querySelector('.form__input-content2').value = ""
    }
}


/* chueyn canh phan content  */
const navNumbers = document.querySelectorAll('.content__items-hover')
const navContents = document.querySelectorAll('.content__items-content')
console.log(navContents)

navNumbers.forEach((item, index) => {
    const navContent = navContents[index]
    item.onmouseover = function() {
        this.innerHTML = "Bấm Vào Nút Này diiiii"
    }
    item.onclick = function() {
        if (document.querySelector('.content__items-content.active') != null) {

            document.querySelector('.content__items-content.active').classList.remove('active')
        }
        navContent.classList.add('active')
    }
    item.onmouseleave = function() {
        this.innerHTML = "Di vào đi chời ,..."
        document.querySelector('.content__items-content.active').classList.remove('active')
    }





})

/* an hien noi dung can mi loi muon noi  */
/* const contentNav = document.querySelector('content__items-hover') */