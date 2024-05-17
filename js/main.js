//////////// Menu /////////////
const navbar = document.querySelector(".nav-list")
const Menu = document.querySelector(".menu")

Menu.addEventListener("click", ()=>{
    navbar.classList.toggle('show')
})

// light-dark
let modeBtn = document.getElementById("light-dark");

modeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});


window.addEventListener('scroll', function () {
  toggleBacktop();
});



// backtop///////

window.addEventListener('scroll', function () {
    toggleBacktop();
  });
  
  let backtop = document.getElementById('backtop');
  
  function toggleBacktop() {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 200
    ) {
      backtop.style.bottom = '20px';
    } else {
      backtop.style.bottom = '-50px';
    }
  }

/////////////Api ///////////////
const Creat =document.querySelector('.all')
const loading =document.querySelector('.loading')

const Api_Url = 'https://dummyjson.com/products'

async function good(api){
    let data = await fetch(api)
    data
    .json()
    .then(ris=> {
        card(ris)
        // createCategory(ris)

    })
    .catch(arr => console.log(arr))
    .finally(()=>{
        loading.style.display = "none"  
    })
}
good(Api_Url)



function card(son){
    let fragmit = document.createDocumentFragment()
    son.products.slice(0,28).forEach(el =>{
        // console.log(el);
        const card = document.createElement('div')
        card.classList.add('all-list')
        card.innerHTML = 
        `
        <div  data-id=${el.id}>
        <div class="all-list" >
                <div class="Creatcard">
                    <div class="Creatcard-all">
                        <img name="product-image" class="img" src="${el.thumbnail}" alt="">
                       </div>
                       <div class="Creatcard-all">
                        <div class="all">
                            <img  name="product-heart" src="./img/Fill Heart.png" alt="">
                            
                           </div>
                           <div class="all">
                            <img src="./img/Fill Eye.png" alt="">
                            
                           </div>
                    </div>
    
                </div>
                <div class="btn" style="padding: 10px 10px ; background-color: black; color: white; display: flex; justify-content: center; align-items: center; font-size: 16px; margin-top: -35px; border-radius: 8px;">
                <p>Add To Cart</p>
            </div>
                <div class="Creatlist">
                    <h1>Breed Dry Dog Food</h1>
                  <div class="Creatlist-all">
                    <div class="Creat-all">
                        <p class="teg">${el.rating}</p>
                    </div>
                    <div class="Creat-all">
                        <img src="./img/yul.png" alt="">
                    </div>
                    <div class="Creat-all">
                        <img src="./img/yul.png" alt="">
                    </div>
                    <div class="Creat-all">
                        <img src="./img/yul.png" alt="">
                    </div>
                    <div class="Creat-all">
                        <img src="./img/yul1.png" alt="">
                    </div>
                    <div class="Creat-all">
                      <img src="./img/yul1.png" alt="">
                    </div>
                    <div class="Creat-all">
                        <p>(${el.stock})</p>
                  </div>
             
                </div>
              </div>
            </div>
            </div>
        
        `
        fragmit.appendChild(card)
    })
    Creat.appendChild(fragmit)

}

const CreatAll=(id)=>{
 window.open(`/pages/Contact.html?id=${id}`, "_self")

}


const  sitWishis=async(id)=>{
    let data = await fetch(`${Api_Url}/${id}`)
    data
    .json()
    .then(ris=> {
     let wishis = JSON.parse(localStorage.getItem('wishis')) || []
     let inx = wishis.findIndex(el => el.id === +id )
     if(inx < 0){
        localStorage.setItem('wishis',JSON.stringify([...wishis,ris]))
     }

    })
    .catch(arr => console.log(arr))
}
Creat.addEventListener('click', (e) =>{
    let {name} = e.target
    if(name === 'product-image'){
        let id = e.target.closest("[data-id]").dataset.id
        CreatAll(id)
    }else if(name === 'product-heart' ){
        let id = e.target.closest("[data-id]").dataset.id
        sitWishis(id);
    }
})


// chek-Admin

const chekAdminAll =document.querySelector('.admin-link')
function chekAdmin(){
    let isLogin = localStorage.getItem('token')
    if(isLogin){
        chekAdminAll.innerHTML = 'Admin'
        chekAdminAll.setAttribute('href', "./pages/logo.html")
    }
    else{
        chekAdminAll.innerHTML = 'Sain up'
        chekAdminAll.setAttribute('href', "./pages/logo.html")

    }
}
chekAdmin()


// category

// const category = document.querySelector('.category')
// function createCategory(data){
//     let categorys = Array.from(new Set(data.map(el => el.category)))
//     categorys.forEach((el) =>{
//         console.log(el);
//         let option =document.createElement('option')
//         option.innerHTML = el
//         option.setAttribute('value',el)
//         category.appendChild(option)
//     })
// }


// const category = document.querySelector('.category')

// function createCategory(data){
//     let categories = Array.from(new Set(data.map(el => el.category)))
//     categories.forEach((el) =>{
//         let option = document.createElement('option')
//         option.innerHTML = el
//         option.setAttribute('value', el)
//         category.appendChild(option)
//     })
// }

// category.addEventListener('change',async(e)=>{
//     let value =e.target.value
//     let data = await fetch(`${Api_Url}/category/${value}`)
//     data
//     .json()
//     .then(ris=> {
//         card(ris)

//     })
//     .catch(arr => console.log(arr))
//     .finally(()=>{
//         loading.style.display = "none"  
//     })
// })