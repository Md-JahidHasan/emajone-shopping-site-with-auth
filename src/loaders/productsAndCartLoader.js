import { getFromDb } from "../utilities/fakedb";

export const productsAndCartLoader = async() =>{
    // get product
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    // get cart 
    const savedCart = getFromDb();
    const dataForCart =[];
    for(const id in savedCart){
        const addedProduct = products.find(product => product.id === id);
        if(addedProduct){
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            dataForCart.push(addedProduct);
        }
    }
    return {products:products, dataForCart:dataForCart};
}