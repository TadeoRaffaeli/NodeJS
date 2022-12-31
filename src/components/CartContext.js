import { createContext, useState } from "react";


export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item, qty) => {
        let found = cartList.find(product => product.idItem === item.id);
        if ( found === undefined) {
            setCartList([
                ...cartList,
                {
                    idItem: item.id,
                    imgItem: item.image[0],
                    nameItem: item.nombre,
                    costItem: item.precio,
                    qtyItem: qty
                }
            ]);
        } else {
            found.qtyItem += qty;
            setCartList([
                ...cartList
            ]);
            
        };
    }
    
    const clear = () => {
        setCartList([]);
    }

    const deleteItem = (id) => {
        let result = cartList.filter(item => item.idItem != id);
        setCartList(result);
    }

    const calcTotalPerItem = (idItem) => {
        let index = cartList.map(item => item.idItem).indexOf(idItem);
        return cartList[index].costItem * cartList[index].qtyItem;
    }

    const calcSubTotal = () => {
        let totalPerItem = cartList.map(item => calcTotalPerItem(item.idItem));
        return totalPerItem.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    const calcTaxes = () => {
        return calcSubTotal() * 0.21;
    }

    const calcTotal = () => {
        return calcSubTotal() + calcTaxes();
    }

    const calcItemsQty = () => {
        let qtys = cartList.map(item => item.qtyItem);
        return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }

    const calcEnvio = () => {
        if(calcSubTotal() != 0){
        if(calcSubTotal() <= 50000){
            return 1500
        }
        else if(calcSubTotal() > 50000){
            return 0
        }
    }}


    return (
        <CartContext.Provider value={{
            cartList, 
            addToCart, 
            clear, 
            deleteItem, 
            calcTotalPerItem, 
            calcSubTotal, 
            calcTaxes, 
            calcTotal,
            calcItemsQty,
            calcEnvio,
        }}>
            { children }
        </CartContext.Provider>
    );
}

export default CartContextProvider;