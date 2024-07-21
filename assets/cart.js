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
    function removeItemFromCart () {
      fetch('https://fakestoreapi.com/carts/1/items/${add-cart}',{
        method:"DELETE"
    })

        .then(res=>res.json())
        .then(localStorage=>console.log(`Item removed:`, localStorage));
    };
    
    //KEEP EVERYTHING INSIDE THE IF STATEMENT
    //remove from local storage array - the array is initialized in line 1
    //brin in display area - look at line 3
    //remove from display - look up how to remove from parent elemenents
    //updated local storage array - look at line 103 in logic.js file
  }};

window.onload = function (){
  displayCards();
  const displayArea = document.querySelector('#displayCards');
  displayArea.addEventListener('click',deleteItem);
};

