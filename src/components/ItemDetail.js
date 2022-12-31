import { Button } from '@material-ui/core';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { DetailContainer, WrapperDetail, ImgContainer, ImageDetail, InfoContainer, Title, Desc, Price } from './styledComponents';
import { CartContext } from './CartContext';
import '../Styles/ItemDetail.css';


const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);
    const test = useContext(CartContext);


    const onAdd = (qty) => {
        setItemCount(qty);
        test.addToCart(item, qty);
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
                        <Title id='FontTitle'>{item.nombre}</Title>
                        <Desc id='FontDesc'>{item.description}</Desc>
                        <Price>$ {item.precio}</Price>
                        <Desc>{item.stock} unidades en stock</Desc>
                    </InfoContainer>
                    {
                    itemCount === 0
                    ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd}/>
                    : <>
                    <Link to='/cart' style={{textDecoration: "none"}}><Button variant='contained' color="secondary">Checkout</Button></Link> 
                    <Link to='/' style={{textDecoration: "none"}}><Button variant='contained' id='ButtonShopping'>Continue Shopping</Button></Link> 
                    </>
                    }
                </WrapperDetail>
            </DetailContainer>
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;