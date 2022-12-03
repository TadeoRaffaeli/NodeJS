import ItemCount from './ItemCount';
import ItemList from './ItemList';
import { Wrapper } from './styledComponents';
import customFetch from "../utils/customFetch";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
const { products } = require('../utils/products');

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { cat } = useParams();

    console.log(cat);

    //componentDidUpdate
    useEffect(() => {
        customFetch(2000, products.filter(item => {
            if (cat === undefined) return item;
            return item.cat === cat
        }))
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [cat]);

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
    }

    return (
        <>  
            <ItemList items={datos} />
        </>
    );
}

export default ItemListContainer;