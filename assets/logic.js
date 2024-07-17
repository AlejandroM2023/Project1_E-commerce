//global variables

//add button
const addBtn = document.querySelector('#addBtn');
//currency selector 
const currencySlct = document.querySelector('selector');
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
          cardDiv.setAttribute('class','card');
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


        }
    });
  
};

function sortCategory(){

};



//converting currency
function convertCurrency (){

};


//functions to load as soon as page loads 
window.onload=function load (){
  
  //event listners currency,addbtn,category
  fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>console.log(json))

  //addcards
  addCards ();

};





fetch('https://fakestoreapi.com/products?limit=21')
.then(res=>res.json())
.then()

