const products = [{
    Title: "Space Capsule Cat Carrier",
    Type: "Anti-Allergic",
    Construction: "Machine Made",
    Warranty: "3 Year Warranty",
    Price: "$29.99",
    Image: "img/carrier_1.jpeg",
    Promotion: true,
    Filter: "space capsules"
}, {
    Title: "Mesh Bag Cat Carrier",
    Type: "Soft",
    Construction: "Hand Made",
    Warranty: "1 Year Warranty",
    Price: "$29.99",
    Image: "img/carrier_2.jpg",
    Promotion: false,
    Filter: "mesh bags"
}, {
   Title: "Space Capsule Cat Carrier",
   Type: "Anti-Allergic",
   Construction: "Machine Made",
   Warranty: "3 Year Warranty",
   Price: "$34.99",
   Image: "img/carrier_3.jpg",
   Promotion: false,
   Filter: "space capsules"
}, {

    Title: "Space Capusle Cat Carrier",
    Type: "Anti-Allergic",
    Construction: "Machine Made",
    Warranty: "3 Year Warranty",
    Price: "$29.99",
    Image: "img/carrier_4.jpg",
    Promotion: true,
    Filter: "space capsules"
}, {
    Title: "Space Capusle Cat Carrier",
    Type: "Anti-Allergic",
    Construction: "Machine Made",
    Warranty: "3 Year Warranty",
    Price: "$29.99",
    Image: "img/carrier_5.jpg",
    Promotion: true,
    Filter: "space capsules" 

},{
    Title: "Space Capusle Cat Carrier",
    Type: "Anti-Allergic",
    Construction: "Machine Made",
    Warranty: "3 Year Warranty",
    Price: "$29.99",
    Image: "img/carrier_6.jpg",
    Promotion: true,
    Filter: "space capsules"

},{
    Title: "Hard Case Cat Carrier",
    Type: "Durable",
    Construction: "Mold Enjection",
    Warranty: "5 Year Warranty",
    Price: "$79.99",
    Image: "img/carrier_7.jpg",
    Promotion: false,
    Filter: "hard case"
},{
    Title: "Mesh Bag Cat Carrier",
    Type: "Soft",
    Construction: "Hand Made",
    Warranty: "2 Year Warranty",
    Price: "$39.99",
    Image: "img/carrier_8.jpg",
    Promotion: false,
    Filter: "mesh bags"

},{
    Title: "Mesh Bag Cat Carrier",
    Type: "Leather",
    Construction: "Hand Made",
    Warranty: "2 Year Warranty",
    Price: "$49.99",
    Image: "img/carrier_9.jpg",
    Promotion: false,
    Filter: "mesh bags"

},{

    Title: "Mesh Bag Cat Carrier",
    Type: "Soft",
    Construction: "Hand Made",
    Warranty: "2 Year Warranty",
    Price: "$49.99",
    Image: "img/carrier_10.jpg",
    Promotion: false,
    Filter: "mesh bags"
},{
    Title: "Mesh Bag Cat Carrier",
    Type: "Soft",
    Construction: "Hand Made",
    Warranty: "2 Year Warranty",
    Price: "$19.99",
    Image: "img/carrier_11.jpg",
    Promotion: true,
    Filter: "mesh bags"

},{

    Title: "Mesh Bag Cat Carrier",
    Type: "Soft",
    Construction: "Hand Made",
    Warranty: "3 Year Warranty",
    Price: "$39.99",
    Image: "img/carrier_12.jpg",
    Promotion: false,
    Filter: "mesh bags"

},{

    Title: "Mesh Bag Cat Carrier",
    Type: "Soft",
    Construction: "Hand Made",
    Warranty: "3 Year Warranty",
    Price: "$59.99",
    Image: "img/carrier_13.jpg",
    Promotion: false,
    Filter: "mesh bags"
},{
    Title: "Mesh Bag Cat Carrier",
    Type: "Soft",
    Construction: "Hand Made",
    Warranty: "3 Year Warranty",
    Price: "$19.99",
    Image: "img/carrier_14.jpg",
    Promotion: true,
    Filter: "mesh bags"

},{

    Title: "Space Capusle Cat Carrier",
    Type: "Anti-Allergic",
    Construction: "Machine Made",
    Warranty: "3 Year Warranty",
    Price: "$24.99",
    Image: "img/carrier_15.jpeg",
    Promotion: true,
    Filter: "space capsules"

},{
    Title: "Space Capusle Cat Carrier",
    Type: "Anti-Allergic",
    Construction: "Machine Made",
    Warranty: "3 Year Warranty",
    Price: "$34.99",
    Image: "img/carrier_16.jpg",
    Promotion: false,
    Filter: "space capsules"

},{
    Title: "Mesh Bag Cat Carrier",
    Type: "Soft",
    Construction: "Hand Made",
    Warranty: "3 Year Warranty",
    Price: "$19.99",
    Image: "img/carrier_17.jpg",
    Promotion: true,
    Filter: "mesh bags"
},{

    Title: "Mesh Bag Cat Carrier",
    Type: "Soft",
    Construction: "Hand Made",
    Warranty: "3 Year Warranty",
    Price: "$29.99",
    Image: "img/carrier_18.jpg",
    Promotion: true,
    Filter: "mesh bags"

},{

    Title: "Hard Case Cat Carrier",
    Type: "Durable",
    Construction: "Hard Plastic with Metal Parts",
    Warranty: "5 Year Warranty",
    Price: "$79.99",
    Image: "img/carrier_19.jpg",
    Promotion: false,
    Filter: "hard case"
},{
    Title: "Hard Case Cat Carrier",
    Type: "Durable",
    Construction: "Hard Plastic with Metal Parts",
    Warranty: "5 Year Warranty",
    Price: "$59.99",
    Image: "img/carrier_20.jpg",
    Promotion: true,
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