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
  
};

function sortCategory(){

};



//converting currency
function convertCurrency (){

};

//functions to load as soon as page loads 
window.onload=function load (){
  
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





    }
;





fetch('https://fakestoreapi.com/products?limit=21')
.then(res=>res.json())
.then()

