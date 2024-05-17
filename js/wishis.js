
const creat = document.querySelector('.all1')
function gitWishis(){
    let wishis = JSON.parse(localStorage.getItem('wishis'))
    let fragmit = document.createDocumentFragment()
    wishis.forEach(el => { 
    const card =document.createElement('div')
    card.classList.add('all-list')
    card.innerHTML = 
    `<div  data-id=${el.id}>
    <div class="all-list" >
            <div class="Creatcard">
                <div class="Creatcard-all">
                    <img name="product-image" class="img" src="${el.thumbnail}" alt="">
                   </div>
                   <div class="Creatcard-all">
                    <div class="all">
                        <img  name="product-heart" src="../img/Fill Heart.png" alt="">
                        
                       </div>
                       <div class="all">
                        <img src="../img/Fill Eye.png" alt="">
                        
                       </div>
                </div>

            </div>
            <div class="btn1">
            <p>Add To Cart</p>
        </div>
            <div class="Creatlist">
                <h1>Breed Dry Dog Food</h1>
              <div class="Creatlist-all">
                <div class="Creat-all">
                    <p class="teg">${el.rating}</p>
                </div>
                <div class="Creat-all">
                    <img src="../img/yul.png" alt="">
                </div>
                <div class="Creat-all">
                    <img src="../img/yul.png" alt="">
                </div>
                <div class="Creat-all">
                    <img src="../img/yul.png" alt="">
                </div>
                <div class="Creat-all">
                    <img src="../img/yul1.png" alt="">
                </div>
                <div class="Creat-all">
                  <img src="../img/yul1.png" alt="">
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
        
    });
    creat.appendChild(fragmit)
}
gitWishis()



