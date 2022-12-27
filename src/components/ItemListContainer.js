import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { db } from '../utils/firebaseConfig';
import { collection, getDocs } from "firebase/firestore";


const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { cat } = useParams();

   
    useEffect(() => {
        const fetchFromFirestore = async() => {
        
        const querySnapshot = await getDocs(collection(db, "products"));
        const list = querySnapshot.docs.map((producto)=>{
          return{
            id:producto.id,
            ...producto.data()
          }
        })
        setDatos(list)
}
fetchFromFirestore ()
    }, []);

 
    
    return (
        <>  
            <ItemList items={datos} />
        </>
    );
}

export default ItemListContainer;