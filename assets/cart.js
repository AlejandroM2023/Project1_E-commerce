const cartItems = JSON.parse(localStorage.getItem('addedItem')) || [];

function displayCards() {
  const displayArea = document.querySelector('#displayCards');
  displayArea.innerHTML = ''; // Clear previous content
  
  cartItems.forEach((itemHTML, index) => {
    const cartDiv = document.createElement('div');
    cartDiv.innerHTML = itemHTML;
    cartDiv.setAttribute('data-index', index); // Add an index for identification
    displayArea.appendChild(cartDiv);

    const deleteBtn = cartDiv.querySelector('#add-cart');
    if (deleteBtn) {
      deleteBtn.setAttribute('class', 'red');
      deleteBtn.innerText = 'Remove Item';
    }
  });
}

function deleteItem(e) {
  if (e.target.getAttribute('id') === 'add-cart') {
    const cartDiv = e.target.closest('div[data-index]');
    
    if (cartDiv) {
      const index = cartDiv.getAttribute('data-index'); // Get the index of the item
      
      // Remove the item from the cartItems array
      const updatedCartItems = cartItems.filter((_, i) => i !== parseInt(index, 10));
      localStorage.setItem('addedItem', JSON.stringify(updatedCartItems));
      
      // Update the cartItems variable
      cartItems.length = 0; // Clear the current array
      cartItems.push(...updatedCartItems); // Update the array

      // Remove the item from the display
      cartDiv.remove();
    }
  }
}

window.onload = function() {
  displayCards();
  const displayArea = document.querySelector('#displayCards');
  displayArea.addEventListener('click', deleteItem);
};
