//global variables

//add button
const addBtn = document.querySelector('#addBtn');
//currency selector 
const currencySlct = document.querySelector('select');
//catergory selectors
const ctgr1 = document.querySelector('#category1');
const ctgr2 = document.querySelector('#category2');
const ctgr3 = document.querySelector('#category3');

//array for adding cards and converting currency
const cardsArr = [];



//build cards here
function addCards (){
  const displayArea = document.querySelector('#displayCards');
  fetch('https://fakestoreapi.com/products?limit=5')
    .then(function(response){
      return response.json();
    })
    .then(function(data){
        for(let item of data){
          
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
          productImg.src = item.image;
          productName.textContent = item.title;
          productPrice.textContent = item.price;
          
          //add id to price p tag for access in convert currency
          productPrice.setAttribute('id','price');

          //for accesing category
          colDiv.setAttribute('data-category',item.category);
          
          //append divs in order
          colDiv.appendChild(cardDiv);
          cardDiv.appendChild(cardImage);
          cardDiv.appendChild(cardContentDiv);
          cardDiv.appendChild(actionDiv);

          //append information
          cardImage.appendChild(productImg);
          cardContentDiv.appendChild(productName);
          cardContentDiv.appendChild(productPrice);



          //append to card display
          displayArea.appendChild(colDiv);

          //add to card array
          cardsArr.push(colDiv);


        }
    });
  
};

function sortCategory(){

};



//converting currency
async function fetchConversion(formCurrency, toCurrency, amount) {
  const url = 'https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=AUD&to=CAD&amount=1&language=en';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '3be8c18d27msh23a18245b829566p1e9860jsn17e38541da51',
      'x-rapidapi-host': 'currency-converter5.p.rapidapi.com'
    }
  };
  
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
//functions to load as soon as page loads 


//functions to load as soon as page loads 
window.onload=function load (){
  
  addCards();
  
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
  ctgr1.addEventListener('click',function(){
    sortCategory();
  });
  ctgr2.addEventListener('click',function (){
    sortCategory();
  });
  ctgr3.addEventListener('click',function (){
    sortCategory();
  });
//addcards




};


