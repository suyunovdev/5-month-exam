const navbar = document.querySelector(".nav-list")
const Menu = document.querySelector(".menu")

Menu.addEventListener("click", ()=>{
    navbar.classList.toggle('show')
})

const h1 =document.querySelector('.h1')
const form =document.querySelector('.form')
const nameAll =document.querySelector('.name')
const password =document.querySelector('.password')
const ApiUrl = 'https://fakestoreapi.com/auth/login'
form.addEventListener('submit' , async (e) =>{
    e.preventDefault()
    let user ={
        username: nameAll.value,
        password: password.value

    }
   await fetch(ApiUrl,{
    method: "POST",
    headers:{
        "Content-Type": "application/json"
    },
    body:JSON.stringify(user)
   })
   .then(ris =>ris.json())
   .then(ris =>{
    console.log(ris.token)
    localStorage.setItem('token',ris.token)
    window.open("../pages/admin.html","_self")
})
   .catch(()=> {
    h1.style.display = 'block'
   })
})

