const products = [{
    Title: "Space Capsule Cat Carrier",
    Type: "Anti-Allergic",
    Construction: "Durable",
    Warranty: "3 Year Warranty",
    Price: "$29.99",
    Image: "img/carrier_1.jpeg",
    Promotion: true,
    Filter: "space capsules"
}, {

    Title: "Mesh Bag Cat Carrier",
    Type: "Soft",
    Construction: "Hand Made",
    Price: "$49.99",
    Image: "img/carrier_10.jpg",
    Promotion: false,
    Filter: "mesh bags"
}, {

    Title: "Hard Case Cat Carrier",
    Type: "Durable",
    Constuction: "Hard Plastic with Metal Parts",
    Warranty: "5 Years",
    Price: "$79.99",
    Image: "img/carrier_19.jpg",
    Promotion: false,
    Filter: "hard case"
}
];

function buildProduct(product) {

    let productHTML = document.getElementById('product_template').innerHTML;
    productHTML = productHTML.replace('[Title]', product.Title);
    productHTML = productHTML.replace('[Type]', product.Type);
    productHTML = productHTML.replace('[Construction]', product.Construction);
    productHTML = productHTML.replace('[Warranty]', product.Warranty);
    productHTML = productHTML.replace('[Price]', product.Price);
    productHTML = productHTML.replace('[Image]', product.Image);
    if (product.Promotion) {
        productHTML = productHTML.replace('[Promotion]', '<small class="callout urgent">Great Deal!</small>');
    }
    else {
        productHTML = productHTML.replace('[Promotion]', '');

    }
    productHTML = productHTML.replace('display: none', "");
    return productHTML;

};

function isInThisCategory(prod) {
    // The variable "this" is filled with the 2nd filter argument
    if (this == 'all carriers') {
      return true;
    } else if (prod.Filter == this) {
      return true;
    } else {
      return false;
    }
  };

  function loadCarrier(event) {
    // Runs every time the dropdown changes
    const carrierImSearchingFor = event.target.value; // Get the new option from the dropdown/select
    processList(products.filter(isInThisCategory, carrierImSearchingFor)); // Print only courses in a category
  }

  document.getElementById('select_carrier').addEventListener('change', loadCarrier);

function processList (listOfProducts) {
    document.getElementById('products').innerHTML='';
    for (i = 0; i < listOfProducts.length; i++) {

        document.getElementById('products').innerHTML += buildProduct(listOfProducts[i]);
    }

};

processList(products);


//buildProduct(products[0]);

/* <small class="callout urgent">Great Deal!</small> */