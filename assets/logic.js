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
window.onload=function load (){
  fetchConversion ();
  //event listners currency,addbtn,category
  

  //addcards


};





fetch('https://fakestoreapi.com/products?limit=21')
.then(res=>res.json())
.then()

