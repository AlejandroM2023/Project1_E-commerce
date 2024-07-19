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

    //add materialize classes to div for styling
    colDiv.setAttribute('class','col s12 m6');
    cardDiv.setAttribute('class','card large');
    cardImage.setAttribute('class','card-image');
    cardContentDiv.setAttribute('class','card-content');
    actionDiv.setAttribute('class','card-action')


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

    //image sizing
    productImg.setAttribute('class','image-size');
    
    //add id to price p tag for access in convert currency
    productPrice.setAttribute('id','price');
    productPrice.setAttribute('data-currency','USD');


    //for accesing category
    colDiv.setAttribute('data-category',allProducts[i].category);
    
    //append divs in order
    colDiv.appendChild(cardDiv);
    cardDiv.appendChild(cardImage);
    cardDiv.appendChild(cardContentDiv);
    cardDiv.appendChild(actionDiv);

    //append information
    cardImage.appendChild(productImg);
    cardContentDiv.appendChild(productName);
    cardContentDiv.appendChild(productPrice);


    //add to card array
    cardsArr.push(colDiv);


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
async function fetchConversionRate(fromCurrency,toCurrency,amount) {

  const url = `https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=${fromCurrency}&to=${toCurrency}&amount=${amount}&language=en`;
  const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '8db156f28bmsh0a5ef060af93bd0p1a17f3jsn8536742e36b7',
		'x-rapidapi-host': 'currency-converter5.p.rapidapi.com'
	}
};

try {
  console.log(fromCurrency,toCurrency,amount);
	const response = await fetch(url, options);
	const result = await response.json();
  let rate;
  
  if(toCurrency == 'JPY'){
    rate = await result.rates.JPY.rate;
  }else if(toCurrency == 'USD'){
    rate = await result.rates.USD.rate;
  }else {
    rate = await result.rates.EUR.rate;
  }
  console.log(result,rate);
	return rate;

} catch (error) {
	console.error(error);
}
}

async function currencyConvert(event){
  //query options for api
  const itemPrice = cardsArr[0].querySelector('#price').textContent;
  const fromC = cardsArr[0].querySelector('#price').getAttribute('data-currency');
  const toC = event.target.value;
  const rate = await fetchConversionRate(fromC,toC,itemPrice);

  for(let item of cardsArr){
    console.log(item.querySelector('#price').textContent);
    console.log(rate);
    const newPrice = Number(rate) * Number(item.querySelector('#price').textContent.split(" ")[0]);
    console.log(newPrice);
    item.querySelector('#price').textContent = newPrice + " " + event.target.value;
    item.querySelector('#price').setAttribute('data-currency',event.target.value);
  }
  

  
}


//display conversion


//functions to load as soon as page loads 
window.onload=function load (){
  getAllProducts();
  
//event listners addbtn
  addBtn.addEventListener('click',function(){
    addCards();
  });
//event listener change currency
  currencySlct.addEventListener('change',currencyConvert);
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


