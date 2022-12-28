import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { db } from '../utils/firebaseConfig';
import { collection, getDocs, where, query, orderBy } from "firebase/firestore";


const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { cat } = useParams();

   
    useEffect(() => {
        const fetchFromFirestore = async() => {
        let q;
        if (cat) {
          q = query(collection(db, 'productos'), where('cat', '==', cat));
        } else{
          q = query(collection(db, 'productos'), orderBy('cat'));
        }
        const querySnapshot = await getDocs(q);
        const list = querySnapshot.docs.map((producto)=>{
          return{
            id:producto.id,
            ...producto.data()
          }
        })
        setDatos(list)
}
fetchFromFirestore ()
    }, [cat]);

    
    return (
        <>  
            <ItemList items={datos} />
        </>
    );
}

export default ItemListContainer;

