//get items from local storage
window.onload = function (){}
  const cardsArr = [];
  let allProducts;
  let numItems =5;

  const cartItems = JSON.parse(localStorage.getItem('addedItem'));
  console.log(cartItems);
  async function addCards (){
    const displayArea = document.querySelector('#displayCards');
    for(addedItem of addedItems){ 
  //create elements for product cards
    const colDiv = document.createElement('div');
    const cardDiv = document.createElement('div');
    const cardContentDiv = document.createElement('div');
    const actionDiv = document.createElement('div');
    const cardImage = document.createElement('div');
    let remoteItembtn = document.createElement('button');}};

// //add materialize classes to div for styling
//   colDiv.setAttribute('class','col s12 m6');
//   cardDiv.setAttribute('class','card large');
//   cardImage.setAttribute('class','card-image');
//   cardContentDiv.setAttribute('class','card-content');
//   actionDiv.setAttribute('class','card-action'); //action div here
//   remoteItembtn.setAttribute('id','remove-item');


//       //info tags
//       const productImg = document.createElement('img');
//       const productName = document.createElement('span');
//       const productPrice = document.createElement('p');
  
  
//       //class for title
//       productName.setAttribute('class','card-title');
  
//       //add values to elements
//       productImg.src = allProducts[i].image;
//       productName.textContent = allProducts[i].title;
//       productPrice.textContent = allProducts[i].price;
//       removeItembtn.textContent = 'Remove Item';}}

//        //image sizing
//     productImg.setAttribute('class','image-size');
    
//     //add id to price p tag for access in convert currency
//     productPrice.setAttribute('id','price');

//     //for accesing category
//     colDiv.setAttribute('data-category',allProducts[i].category);
    
//     //append divs in order
//     colDiv.appendChild(cardDiv);
//     cardDiv.appendChild(cardImage);
//     cardDiv.appendChild(cardContentDiv);
//     cardDiv.appendChild(actionDiv);
//     actionDiv.appendChild(addtoCart);
//      //addtocart append to action div

//     //append information
//     cardImage.appendChild(productImg);
//     cardContentDiv.appendChild(productName);
//     cardContentDiv.appendChild(productPrice);


//     //add to card array
//     cardsArr.push(colDiv);
