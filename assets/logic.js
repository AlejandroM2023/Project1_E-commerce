//global variables

//add button
const addBtn = document.querySelector('#addBtn');
//currency selector 
const currencySlct = document.querySelector('select');
//catergory selectors
const ctgr1 = document.querySelector('#category1');
const ctgr2 = document.querySelector('#category2');
const ctgr3 = document.querySelector('#category3');
const ctgr4 = document.querySelector('#category4');

//array for adding cards and converting currency
const cardsArr = [];
let allProducts;
let numItems =5;
//JSON version
async function getAllProducts() {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    allProducts = await response.json();
    addCards();
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

//build cards here
async function addCards (){
  const displayArea = document.querySelector('#displayCards');
  for(let i = 0; i<20; i++){
          
  //create elements for product cards
    const colDiv = document.createElement('div');
    const cardDiv = document.createElement('div');
    const cardContentDiv = document.createElement('div');
    const actionDiv = document.createElement('div');
    const cardImage = document.createElement('div');
    let addtoCart = document.createElement('button');//creating a button for add to cart here
   
    

    //add materialize classes to div for styling
    colDiv.setAttribute('class','col s12 m6');
    cardDiv.setAttribute('class','card large');
    cardImage.setAttribute('class','card-image');
    cardContentDiv.setAttribute('class','card-content');
    actionDiv.setAttribute('class','card-action'); //action div here
    addtoCart.setAttribute('id','add-cart');//adding id to addtoCart
    // addtoCart.setAttribute('class','waves-effect'); can style this better


    //info tags
    const productImg = document.createElement('img');
    const productName = document.createElement('span');
    const productPrice = document.createElement('p');


    //class for title
    productName.setAttribute('class','card-title');

    //add values to elements
    productImg.src = allProducts[i].image;
    productName.textContent = allProducts[i].title;
    productPrice.textContent = allProducts[i].price;
    addtoCart.textContent = 'Add to Cart';

    //image sizing
    productImg.setAttribute('class','image-size');
    
    //add id to price p tag for access in convert currency
    productPrice.setAttribute('id','price');

    //for accesing category
    colDiv.setAttribute('data-category',allProducts[i].category);
    
    //append divs in order
    colDiv.appendChild(cardDiv);
    cardDiv.appendChild(cardImage);
    cardDiv.appendChild(cardContentDiv);
    cardDiv.appendChild(actionDiv);
    actionDiv.appendChild(addtoCart);
     //addtocart append to action div

    //append information
    cardImage.appendChild(productImg);
    cardContentDiv.appendChild(productName);
    cardContentDiv.appendChild(productPrice);


    //add to card array
    cardsArr.push(colDiv);
  //event listener for addtoCart button:
  addtoCart.addEventListener('click',function (event){
    let addedItem = JSON.parse(localStorage.getItem('addedItem'));
    if (addedItem == null){
      addedItem = [];
    }
    addedItem.push(event.target.parentElement.parentElement.outerHTML);//JSON doesn;t allow to string HTML elements, outerHTML gets the shell of the item we want to append. 
    console.log(addedItem);
    localStorage.setItem('addedItem',JSON.stringify(addedItem));
});

  }
  displayCards();
}

function displayCards(){
  const displayArea = document.querySelector('#displayCards');
  for(let i= numItems-5;i<numItems;i++){
    displayArea.appendChild(cardsArr[i]);
  }
  numItems+=5;

}
  

function sortCategory(event){
  const displayArea = document.querySelector('#displayCards');
  displayArea.innerHTML='';
  console.log(event);
  for (let item of cardsArr){
  if (item.getAttribute('data-category') == event.target.getAttribute('data-category')){
    displayArea.appendChild(item); 
  }
}
};



//converting currency
async function fetchConversionRate(fromCurrency, toCurrency) {
  try {
    const response = await fetch(`https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=${fromCurrency}&to=${toCurrency}&amount=1`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY', // Replace API key
        'X-RapidAPI-Host': 'currency-converter5.p.rapidapi.com'
      }
    });
    const data = await response.json();
    return data.rates[toCurrency].rate;
  } catch (error) {
    console.error('Error fetching conversion rate:', error);
    return 1; // Default to 1 if there's an error
  }
}
//functions to load as soon as page loads 


//functions to load as soon as page loads 
window.onload=function load (){
  getAllProducts();
  
//event listners addbtn
  addBtn.addEventListener('click',function(){
    addCards();
  });
//event listener change currency
  currencySlct.addEventListener('change',function(e){
    console.log(e.target.value);
    convertCurrency();
  });
//event listener categories
  ctgr1.addEventListener('click',
    sortCategory
  );
  ctgr2.addEventListener('click',
    sortCategory
  );
  ctgr3.addEventListener('click',
    sortCategory
  );  
  ctgr4.addEventListener('click',
    sortCategory
  );
  
//addcards
};

//send cards array to local storage
// localStorage.setItem('cardsArray',JSON.stringify(cardsArr));
