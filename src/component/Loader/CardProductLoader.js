import { getShoppingCart } from "../../utilities/fakedb"

const CardProductLoader = async () =>{
    const loadedProducts = await fetch('products.json')
    const loadedData = await loadedProducts.json()
    const savedCart = []
    // console.log(loadedData);

    // if cart data is in database , you have used to asyne await 
    const sotreCart = getShoppingCart()
    for(const id in sotreCart){
        const addedProduct = loadedData.find(p => p.id === id)
        if(addedProduct){
            const quantity = sotreCart[id]
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct)
        }
    }
    return savedCart;

}

export default CardProductLoader;