import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../utils/firebaseConfig';


const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        const fetchOneFromFirestore = async () => {
        const docRef = doc(db, "productos", idItem);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return {
                id: idItem,
                ...docSnap.data()
            }
        } 
}
    fetchOneFromFirestore()
    .then(result => setDato(result))
    }, []);
    
    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;