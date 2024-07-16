//global variables

//build cards here
function addCards (){};
//converting currency
function convertCurrency (){};

//functions to load as soon as page loads 
window.onload=function load (){
  //function addCards ();

};

fetch('https://fakestoreapi.com/products?limit=21')
.then(res=>res.json())
.then(json=>console.log(json))