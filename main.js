const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');


navEmail.addEventListener('click', toggleDesktopMenu);
menuBurger.addEventListener('click', toggleMobileMenu);
menuCarIcon.addEventListener('click', toogleCarAside);
productDetailCloseIcon.addEventListener ('click', closeProductDetailAside);

function toggleDesktopMenu(){
  const isAsideClose = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClose){ //para que se cierre el aside cuando abramos el desktopMenu.
    shoppingCartContainer.classList.add('inactive');
  }

  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
  const isAsideClose = shoppingCartContainer.classList.contains('inactive'); //Para saber si el aside está abierto.
  if (!isAsideClose){
    shoppingCartContainer.classList.add('inactive'); //Si el aside está abierto, se va a cerrar para que se muestre el mobileMenu.
  }

  closeProductDetailAside();//Para que se cierre el product detail cada que se quiera abrir el menú en mobile.

  mobileMenu.classList.toggle('inactive');
}

function toogleCarAside(){
  const isMobileMenuClose = mobileMenu.classList.contains('inactive'); //Para saber si el menú mobile está abierto.
  
  if(!isMobileMenuClose){ //Si el mobileMenu no está cerrado, cuando se de click en el carrito, se va a cerrar para mostrar el menuCarIcon.
    mobileMenu.classList.add('inactive');
  }

  const isProductDetailClosed = productDetailContainer.classList.contains('inactive'); //para que al abrir el carrito, el product detail se cierre.
  
  if(!isProductDetailClosed){ 
    productDetailContainer.classList.add('inactive');
  }

  shoppingCartContainer.classList.toggle('inactive'); 
}

function openProductDetailAside(){
  shoppingCartContainer.classList.add('inactive');   //para que si alguien abrió primero el carrito de compras y luego abrió el product detail, si desea volver a abrir el carrito de compras, este sea abierto, en lugar de cerrase.
  productDetailContainer.classList.remove('inactive') //para que se abra el product detail cuando se le haga click a una imagen.

}

function closeProductDetailAside(){
  productDetailContainer.classList.add('inactive')
}

const productList = [];
productList.push({
  name:'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name:'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name:'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name:'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name:'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name:'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
/* 
<div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>
*/

productList.map(function (product){ 
  const productCard = document.createElement('div'); //Con createElement creamos la etiqueta de HTML que se necesita.
  productCard.classList.add('product-card'); // Después se le agrega en la const a la que se le agregó la etiqueta HTML el nombre de su clase.

  const productImg = document.createElement('img');
  productImg.setAttribute('src', product.image);
  productImg.addEventListener('click', openProductDetailAside);

  const productInfo = document.createElement('div');
  productInfo.classList.add('product-info');  

  const productInfoDiv = document.createElement('div');

  const productPrice = document.createElement('p');
  productPrice.innerText = '$' + product.price;//En este caso se usó innerText para escribir dentro del p lo que se necesita.
  const productName = document.createElement('p');
  productName.innerText = product.name;

  productInfoDiv.appendChild(productPrice); //En esta parte, se usa appendChild para meter ciertos contenidos dentro de otros, en este caso el precio del producto en el div que se tenía previsto junto con el nombre del producto.
  productInfoDiv.appendChild(productName);

  const productInfoFigure = document.createElement('figure');
  const productImgCart = document.createElement('img');
  productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');//Con setAttribute se edita el atributo por dentro, en este caso se agregó la url de la imagen (ya sea que esté dentro del equipo o en una página de Internet.).

  productInfoFigure.appendChild(productImgCart); //Se metió la imagen del carrito dentro de la etiqueta figure.

  productInfo.appendChild(productInfoDiv);// Se metió el div que tiene dentro el nombre y precio del producto en el div de Info.
  productInfo.appendChild(productInfoFigure);//Se metió la figura del carrito dentro del div de info.

  productCard.appendChild(productImg); //Se metio la imagen del producto en el div padre (que sí está escrito en el HTML).
  productCard.appendChild(productInfo);//También donde se tiene escrita la info.

  cardsContainer.appendChild(productCard);//Finalmente entra el productCard padre en el container principal que es cardsContainer.
});