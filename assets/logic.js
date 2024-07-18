document.addEventListener('DOMContentLoaded', () => {
  const productsContainer = document.getElementById('displayCards');
  const loadMoreButton = document.getElementById('addBtn');
  const currencySlct = document.getElementById('currencySelect');
  const ctgr1 = document.getElementById('category1');
  const ctgr2 = document.getElementById('category2');
  const ctgr3 = document.getElementById('category3');
  const ctgr4 = document.getElementById('category4');

  let currentPage = 0;
  const itemsPerPage = 5;
  let products = [];
  let targetCurrency = 'USD'; // Default currency

  // Fetch all products initially
  async function fetchProducts() {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      products = await response.json();
      displayProducts();
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  // Fetch conversion rate
  async function fetchConversionRate(fromCurrency, toCurrency) {
    try {
      const response = await fetch(`https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=${fromCurrency}&to=${toCurrency}&amount=1`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY', // Replace API key
          'X-RapidAPI-Host': 'currency-converter5.p.rapidapi.com'
        }
      });
      const data = await response.json();
      return data.rates[toCurrency].rate;
    } catch (error) {
      console.error('Error fetching conversion rate:', error);
      return 1; // Default to 1 if there's an error
    }
  }

  // Function to display products
  async function displayProducts() {
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    const productsToDisplay = products.slice(start, end);

    for (const product of productsToDisplay) {
      const conversionRate = await fetchConversionRate('USD', targetCurrency);
      const convertedPrice = (product.price * conversionRate).toFixed(2);

      const colDiv = document.createElement('div');
      colDiv.classList.add('col', 's12', 'm6');

      const cardDiv = document.createElement('div');
      cardDiv.classList.add('card', 'large');

      const cardImage = document.createElement('div');
      cardImage.classList.add('card-image');

      const productImg = document.createElement('img');
      productImg.src = product.image;
      cardImage.appendChild(productImg);

      const cardContentDiv = document.createElement('div');
      cardContentDiv.classList.add('card-content');

      const productName = document.createElement('span');
      productName.classList.add('card-title');
      productName.textContent = product.title;

      const productPrice = document.createElement('p');
      productPrice.classList.add('price');
      productPrice.textContent = `$${convertedPrice} ${targetCurrency}`;

      cardContentDiv.appendChild(productName);
      cardContentDiv.appendChild(productPrice);

      cardDiv.appendChild(cardImage);
      cardDiv.appendChild(cardContentDiv);

      colDiv.appendChild(cardDiv);

      productsContainer.appendChild(colDiv);
    }

    currentPage++;
  }

  // Event listener for the Load More button
  loadMoreButton.addEventListener('click', () => {
    displayProducts();
  });

  // Event listener for currency selector
  currencySlct.addEventListener('change', (e) => {
    targetCurrency = e.target.value;
    currentPage = 0; // Reset page
    productsContainer.innerHTML = ''; // Clear existing products
    fetchProducts();
  });

  // Event listeners for category selectors
  ctgr1.addEventListener('click', sortCategory);
  ctgr2.addEventListener('click', sortCategory);
  ctgr3.addEventListener('click', sortCategory);
  ctgr4.addEventListener('click', sortCategory);

  // Initial fetch and display of products
  fetchProducts();
});

// Function to sort products by category
function sortCategory(event) {
  const category = event.target.getAttribute('data-category');
  const displayArea = document.getElementById('displayCards');
  displayArea.innerHTML = ''; // Clear existing products

  for (const product of products) {
    if (product.category === category) {
      const colDiv = document.createElement('div');
      colDiv.classList.add('col', 's12', 'm6');
      colDiv.setAttribute('data-category', product.category);

      const cardDiv = document.createElement('div');
      cardDiv.classList.add('card', 'large');

      const cardImage = document.createElement('div');
      cardImage.classList.add('card-image');

      const productImg = document.createElement('img');
      productImg.src = product.image;
      cardImage.appendChild(productImg);

      const cardContentDiv = document.createElement('div');
      cardContentDiv.classList.add('card-content');

      const productName = document.createElement('span');
      productName.classList.add('card-title');
      productName.textContent = product.title;

      const productPrice = document.createElement('p');
      productPrice.classList.add('price');
      productPrice.textContent = `$${product.price} USD`;

      cardContentDiv.appendChild(productName);
      cardContentDiv.appendChild(productPrice);

      cardDiv.appendChild(cardImage);
      cardDiv.appendChild(cardContentDiv);

      colDiv.appendChild(cardDiv);

      displayArea.appendChild(colDiv);
    }
  }
}
