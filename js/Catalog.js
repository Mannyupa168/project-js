//Catalog
const cards = document.getElementById('cards');
const templateCard = document.getElementById('template-card').content;

const fetchData = async () => {
  try {
      const res = await fetch('../js/products.json');
      const data = await res.json();
      infoProducts(data);
  }
  catch (error){
      console.log(error);
  };
};


const infoProducts = data => {
  data.forEach(product => {
      templateCard.querySelector('h3').textContent = product.productName;
      templateCard.querySelector('div').textContent = product.price;
      templateCard.querySelector('img').setAttribute("src", product.imgRoute);
      const clone = templateCard.cloneNode(true);
      fragment.appendChild(clone);
  });
  cards.appendChild(fragment);
};
