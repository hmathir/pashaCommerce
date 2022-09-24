const setLocalStorage = (id) => {
    let cart = {};
    const preCart = JSON.parse(localStorage.getItem('shopping-cart'));
    if(preCart){
        cart = preCart;
    }else{
        cart = {};
    }

    const cartQun = cart[id];
    if(cartQun){
        cart[id] = cartQun + 1;
    }else{
        cart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(cart));
}

// const removeTarget = id => {
//     const preCart = localStorage.getItem('shopping-cart');
//     if(preCart){
//         const shoppingCart = JSON.parse(preCart);
//         if(id in shoppingCart){
//             delete shoppingCart[id];
//             localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
//         }
//     }
// }
// const getLocalStorage = (id) => {
//     const preCard = localStorage.getItem(id);
//     let newCard = [];
//     if(preCard){
//         newCard = JSON.parse(preCard);
//     }
// }

export { setLocalStorage };

