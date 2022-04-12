const openSignUp = document.querySelector('.js-modal__signup')
const signUpModal = document.querySelector('.js-header__sign-modal')
const closeSignup = document.querySelector('.js-modal__close')
const modal = document.querySelector('.header__modal')

const openLogin = document.querySelector('.js-modal__login')
const closeLogin = document.querySelector('.js-modal__close2')

const modal2 = document.querySelector('.header__modal-two')
const loginModal = document.querySelector('.js-header__sign-modal-two')
const loginIn = document.querySelector('.js-login-in')
const signIn = document.querySelector('.js-sign-in')
    /* lay nut tim cau san pham trong danh muc content  */
const heartNo = document.querySelectorAll('.js-heart-no-active')
console.log(heartNo)
const heartYes = document.querySelectorAll('.js-heart-active')
console.log(heartYes)
    /* js header phan subs select in shop */

/* ham xu lis trai tim  */


openSignUp.addEventListener('click', showModalSignup)
closeSignup.addEventListener('click', closeModalSignUp)
modal.addEventListener('click', closeModalSignUp)

/* Ngăn tính nỗi bọt của các the modal cha  */
signUpModal.addEventListener('click', function(event) {
    event.stopPropagation()
})




closeLogin.addEventListener('click', closeModalLogin)
openLogin.addEventListener('click', showModalLogin)
modal2.addEventListener('click', closeModalLogin)
loginModal.addEventListener('click', stopCloseModal)

/* ham  */
function stopCloseModal(event) {
    event.stopPropagation()
}


function showModalLogin() {
    modal2.classList.remove('close')
}

function closeModalLogin() {
    modal2.classList.add('close')
}

function showModalSignup() {
    modal.classList.remove('close')
}

function closeModalSignUp() {
    modal.classList.add('close')
}
/* bat qua laij giua form dang ki va form dang nhap*/

loginIn.addEventListener('click', showModalLogin)
loginIn.addEventListener('click', closeModalSignUp)


signIn.addEventListener('click', showModalSignup)
signIn.addEventListener('click', closeModalLogin)

/* js for select in shop and out shop of header css  */