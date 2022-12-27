import { Button } from '@material-ui/core';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { DetailContainer, WrapperDetail, ImgContainer, ImageDetail, InfoContainer, Title, Desc, Price } from './styledComponents';
import { CartContext } from './CartContext';
import { YoutubeSearchedForTwoTone } from '@material-ui/icons';


const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);
    const test = useContext(CartContext);


    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
        setItemCount(qty);
        test.addToCart(item);
    }

    return (
        <>
        {
            item && item.image
            ? 
            <DetailContainer>
                <WrapperDetail>
                    <ImgContainer>
                        <ImageDetail src={item.image[0]} />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.nombre}</Title>
                        <Desc>{item.description}</Desc>
                        <Price>$ {item.precio}</Price>
                        <Desc>{item.stock} unidades en stock</Desc>
                    </InfoContainer>
                    {
                    itemCount === 0
                    ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd}/>
                    : <Link to='/cart' style={{textDecoration: "none"}}><Button variant='contained' color="secondary">Checkout</Button></Link>
                    }
                </WrapperDetail>
            </DetailContainer>
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;