const navbar = document.querySelector(".nav-list")
const Menu = document.querySelector(".menu")

Menu.addEventListener("click", ()=>{
    navbar.classList.toggle('show')
})

let isLogin = localStorage.getItem('token')

function submit(){
    if( !isLogin ){
        window.location.reload("/pages/logo.html")
    }

}
submit()