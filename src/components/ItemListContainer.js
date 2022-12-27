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
        querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
}
fetchFromFirestore ()
    }, [cat]);

    useEffect(() => {
        return (() => {
            setDatos([]);
        })
    }, []);
    
    return (
        <>  
            <ItemList items={datos} />
        </>
    );
}

export default ItemListContainer;