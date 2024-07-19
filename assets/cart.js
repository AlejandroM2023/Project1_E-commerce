const cartItems = JSON.parse(localStorage.getItem('addedItem'));
function displayCards (){
  const displayArea = document.querySelector('#displayCards');
  for (eachItem of cartItems){
    console.log(eachItem);
    const cartDiv = document.createElement('div');
    cartDiv.innerHTML = eachItem;
    displayArea.appendChild(cartDiv);

  const deleteBtn = cartDiv.querySelector('#add-cart');
  deleteBtn.setAttribute ('class', 'red');
  deleteBtn.innerText = 'Remove Item';
  }
};

function deleteItem (e){
  
  if(e.target.getAttribute('id') == 'add-cart'){
    console.log(e.target);
    //remove from local storage array
    //remove from display
    //updated local storage array 
  }};

window.onload = function (){
  displayCards();
  const displayArea = document.querySelector('#displayCards');
  displayArea.addEventListener('click',deleteItem);
};

