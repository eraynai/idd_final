/* set up variables */
let itemsInCart = 0;

// all the functions - things we need the application to do
function addItemsToTheCart(curr, qty) {
    console.log('you added ${qty} item(s).  There are now: ${curr + qty}.');
    return curr + qty;
}


//execution start

itemsInCart = addItemsToTheCart(0, 1);//1
itemsInCart = addItemsToTheCart(1, 5); //6