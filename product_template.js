const products = [{
    Product_Name: 'Cat Carrier',
    Product_image: 'img/blue_carrier.jpg',
    Product_color_1: 'g',
    Product_color_2: 'r',
    Product_color_name_1: 'Green',
    Product_color_name_2: 'Red',
    Product_size_value_1: 's',
    Product_size_value_2: 'm',
    Product_size_value_3: 'l',
    Qty_size_1: '30',
    Qty_size_2: '20',
    Qty_size_3: '14',
    Product_size_name_1: 'Small',
    Product_size_name_2: 'Medium',
    Product_size_name_3: 'Large',
    Regular_price: '$50.00',
    Sale_price: '$35.00'

}, {
    Product_Name: 'Dog Carrier',
    Product_image: 'img/blue_carrier.jpg',
    Product_color_1: 'g',
    Product_color_2: 'r',
    Product_color_name_1: 'Yellow',
    Product_color_name_2: 'Purple',
    Product_size_value_1: 's',
    Product_size_value_2: 'm',
    Product_size_value_3: 'l',
    Qty_size_1: '30',
    Qty_size_2: '20',
    Qty_size_3: '14',
    Product_size_name_1: 'Small',
    Product_size_name_2: 'Medium',
    Product_size_name_3: 'Large',
    Regular_price: '$50.00',
    Sale_price: '$35.00'

}
]

function buildProduct(product) {

    let productHTML = document.getElementById('product_template').innerHTML;
    productHTML = productHTML.replace('[Product Name]', product.Product_Name);
    productHTML = productHTML.replace('[Product Image]', product.Product_image);
    productHTML = productHTML.replace('[Product Color_1]', product.Product_color_1);
    productHTML = productHTML.replace('[Product Color_2]', product.Product_color_2);
    productHTML = productHTML.replace('[Product Color_Name_1]', product.Product_color_name_1);
    productHTML = productHTML.replace('[Product Color_Name_2]', product.Product_color_name_2);
    productHTML = productHTML.replace('[Product Size_1]', product.Product_size_value_1);
    productHTML = productHTML.replace('[Product Size_2]', product.Product_size_value_2);
    productHTML = productHTML.replace('[Product Size_3]', product.Product_size_value_3);
    productHTML = productHTML.replace('[Qty Size_1]', product.Qty_size_1);
    productHTML = productHTML.replace('[Qty Size_2]', product.Qty_size_2);
    productHTML = productHTML.replace('[Qty Size_3]', product.Qty_size_3);
    productHTML = productHTML.replace('[Product Size_Name_1]', product.Product_size_name_1);
    productHTML = productHTML.replace('[Product Size_Name_2]', product.Product_size_name_2);
    productHTML = productHTML.replace('[Product Size_Name_3]', product.Product_size_name_3);
    productHTML = productHTML.replace('[Regular_Price]', product.Regular_price);
    productHTML = productHTML.replace('[Sale Price]', product.Sale_price);
    productHTML = productHTML.replace('display: none', "");
    return productHTML;

}

//buildProduct(products[0]);
document.getElementById('products').innerHTML += buildProduct(products[0]);
document.getElementById('products').innerHTML += buildProduct(products[1]);
document.getElementById('products').innerHTML += buildProduct(products[0]);
document.getElementById('products').innerHTML += buildProduct(products[0]);
document.getElementById('products').innerHTML += buildProduct(products[0]);