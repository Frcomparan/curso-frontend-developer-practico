const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const productDetailContainer = document.querySelector('.product-detail-info');
const cardsContainer = document.querySelector('.cards-container');

const toggleDesktopMenu = () => {
  const isAsideClosed = aside.classList.contains('inactive');
  
  if(!isAsideClosed) {
    aside.classList.add('inactive');
  }
  
  desktopMenu.classList.toggle('inactive');
}

const toggleMobileMenu = () => {
  const isAsideClosed = aside.classList.contains('inactive');
  closeProductDetailAside();

  if(!isAsideClosed) {
    aside.classList.add('inactive');
  }
  
  mobileMenu.classList.toggle('inactive')
}

const toggleCarritoAside = () => {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
  
  if(!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive');
  }
  
  if(!isDesktopMenuClosed) {
    desktopMenu.classList.add('inactive');
  }
  
  if(!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  }
  
  aside.classList.toggle('inactive');
}

const openProductDetailAside = () => {
  const isAsideClosed = aside.classList.contains('inactive');
  
  if(!isAsideClosed) {
    aside.classList.add('inactive');
  }

  productDetailContainer.classList.remove('inactive');
}

const closeProductDetailAside = () => {
  productDetailContainer.classList.add('inactive');

}

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

const renderProducts = (array) => {
  for (product of array) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    const productImg = document.createElement('img');
    productImg.src = product.image;
    productImg.addEventListener('click', openProductDetailAside);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = `$ ${product.price}`;
  
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.src = './icons/bt_add_to_cart.svg';
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);
