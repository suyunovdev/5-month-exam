const navbar = document.querySelector(".nav-list")
const Menu = document.querySelector(".menu")

Menu.addEventListener("click", ()=>{
    navbar.classList.toggle('show')
})
const loading = document.querySelector('.Arr')
const Api_Url = 'https://dummyjson.com/products';
const hammasi =document.querySelector('.hammasi-nav')
async function fitDate(api){
 let path = new URLSearchParams(window.location.search)
    let  id = path.get('id')
    let gitDate = await fetch(`${api}/${id}`)
    gitDate
    .json()
    .then(ris  => creadtData(ris))
    .catch(arr =>{
        console.log(arr)
        loading.style.display = 'block'
    })
    // .finally(()=>{
    // })

}
fitDate(Api_Url)


function creadtData(data){
    hammasi.innerHTML =`
    <div class="container">
<div class="hammasi-nav-link" >
    <div class="hammasi-nav-itim">
        <div class="img">
            <img src="${data.images[0]}" alt="">
        </div>
        <div class="img">
            <img src="${data.images[1]}" alt="rasm yuqligi uchun">
        </div>

        <div class="img">
            <img src="${data.images[2]}" alt="rasm yuqligi uchun">
        </div>
        <div class="img">
            <img src="${data.images[3]}" alt="rasm yuqligi uchun">
        </div>
    </div>

    <div class="imgi">
        <img src="${data.thumbnail}" alt="rasm yuqligi uchun">
    </div>
   <div class="column">
    <div class="imgagi">
        <h1>Havic HV G-92 Gamepad</h1>
        <div class="all3">
        <div class="all1">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgb(220, 226, 42)"><path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path></svg>
    </div>
    <div class="all1">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgb(220, 226, 42)"><path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path></svg>
    </div>
    <div class="all1">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgb(220, 226, 42)"><path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path></svg>
    </div>
        
         <div class="all1">
             <p>(150 Reviews)</p>
          </div>
          <div class="all1">
             <p class="box">In Stock</p>
          </div>
 
        </div>
        <p>$192.00</p>
        <div class="pr-1">
            <p>
            ${data.description}
            </p>
        </div>
        <div class="oni">

        </div>

        <div class="logo">
            <div class="logo-itim">
                <p>Colours:</p>
            </div>
            <div class="logo-itim">
               <img src="../img/oira.png" alt="">
            </div>
            <div class="logo-itim">
                <img src="../img/oira1.png" alt="">
            </div>
        </div>
        <img src="../img/sizi.png" alt="">
        

        <div class="kontainir">
            <div class="kontainir-all">
            <img src="../img/frami.png" alt="">
            </div>
            <div class="kontainir-all">
                <div class="pr-2">
                   <p>Buy Now</p>
                </div>
               </div>
               <div class="kontainir-all">
                <div class="pr-3">
                  <img src="../img/yurak.png" alt="">
                </div>
               </div>
        </div>
        <div class="hiro">
            <div class="hiro-nav">
                <div class="hiro-list">
                    <img src="../img/mashina.png" alt="">
                </div>
                <div class="hiro-list">
                    <h1>Free Delivery</h1>
                    <p>Enter your postal code for Delivery Availability</p>
                </div>
                
               </div>
           <div class="two"></div>

           <div class="hiro-nav">
            <div class="hiro-list">
                <img src="../img/ayla.png" alt="">
            </div>
            <div class="hiro-list">
                <h1>Return Delivery</h1>
                <p>Enter your postal code for Delivery Availability</p>
            </div>
            
           </div>

        </div>
     </div>
   </div>
</div>
</div>
    `
}



