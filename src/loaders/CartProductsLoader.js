import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoaded = async()=>{
    const loadedProducts =await fetch('products.json');
    const products = await loadedProducts.json();

    const storedCartId = getShoppingCart();
    const savedCarts = [];
    for(const id in storedCartId){
        const storedCart = products.find( pd => pd.id === id);
        const Quantity = storedCartId[id];
        storedCart.quantity = Quantity;
        savedCarts.push(storedCart);
    }
    return savedCarts;

};
export default cartProductsLoaded;