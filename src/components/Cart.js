import { Link } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { CartContext } from './CartContext';
import { WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice, Top, TopButton, TopText, Bottom, Info1, Summary, SummaryTitle, SummaryItem } from './styledComponents';
import { serverTimestamp, doc, setDoc, collection, updateDoc, increment } from "firebase/firestore";
import styled from "styled-components";
import { db } from '../utils/firebaseConfig';
import Swal from 'sweetalert2';
import '../Styles/Cart.css';
import Form from './Form';


const FormatNumber = ({number}) => {
    return <span>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number)}</span>
}

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;



const Cart = () => {
    const [timedPopup, setTimedPopup] = useState(false);
    const test = useContext(CartContext);

    useEffect (() =>{
        setTimeout( () => {
        setTimedPopup(true)
    }, 3000);
    }, []);

    const createOrder = () => {
        const order ={
            buyer: {
                name: 'Comprador',
                email: 'mail@mail.com',
                phone: '11-5555-4444'
            },
            date: serverTimestamp(),
            item: test.cartList.map(item => ({
                id: item.idItem,
                title: item.nameItem,
                price: item.costItem,
                qty: item.qtyItem
            })),
            total: test.calcTotal()
        }
        const createOrderInFirestore = async () => {
            const newOrderRef = doc(collection(db, "orders"))
        await setDoc(newOrderRef, order);
        return newOrderRef;
     
    };

    createOrderInFirestore()
      .then(result => alert('Tu orden fue creada, por favor anota el Order ID para hacer el seguimiento de la misma! \n\nOrder ID: ' + result.id + '\n\n'))
      .catch(err => console.log(err));
  
    test.clear();
   
    }
    const PopUp = () =>{       
        Swal.fire({
            title: 'Seguro que no querés seguir comprando?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Finalizar compra',
            denyButtonText: `Seguir comprando`,
            }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Se creó tu compra!', '', 'success')
                return createOrder()
            } else if (result.isDenied) {
                Swal.fire('Puedes seguir comprando sin perder tu carrito!', '', 'error')
            }
            })
            }

    
    return (
        <WrapperCart>
            <TitleCart>YOUR CART</TitleCart>
            <Top>
                <Link to='/'><TopButton>CONTINUE SHOPPING</TopButton></Link>
                {
                    (test.cartList.length > 0)
                    ? <TopButton type="filled" onClick={test.clear}>DELETE ALL PRODUCTS</TopButton>
                    : <TopText>Your cart is empty</TopText>
                }
            </Top>
            <ContentCart>
            <Bottom>
                <Info1>
                    {
                        test.cartList.length > 0 &&
                            test.cartList.map(item => 
                            <Product key={item.idItem}>
                            <ProductDetail>
                                <ImageCart src={item.imgItem} />
                                <Details>
                                <span id='ProdSize'>
                                    <b >Product:</b> {item.nameItem}
                                </span>
                                <TopButton type="filled" onClick={() => test.deleteItem(item.idItem)}>Remove All</TopButton>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                <ProductAmount>{item.qtyItem} item(s)</ProductAmount>
                                /
                                <ProductAmount>$ {item.costItem} each</ProductAmount>
                                </ProductAmountContainer>
                                <ProductPrice>$ {test.calcTotalPerItem(item.idItem)} </ProductPrice>
                            </PriceDetail>
                            </Product>
                            )
                    }
                </Info1>
                {
                    test.cartList.length > 0 &&
                        <Summary>
                            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                            <SummaryItem>
                                <SummaryItemText>Subtotal</SummaryItemText>
                                <SummaryItemPrice><FormatNumber number={test.calcSubTotal()} /></SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Taxes</SummaryItemText>
                                <SummaryItemPrice><FormatNumber number={test.calcTaxes()} /></SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Delivery Fees</SummaryItemText>
                                <SummaryItemPrice><FormatNumber number={test.calcEnvio()} /></SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem type="total">
                                <SummaryItemText>Total</SummaryItemText>
                                <SummaryItemPrice><FormatNumber number={test.calcTotal()} /></SummaryItemPrice>
                            </SummaryItem>
                            <Button onClick={PopUp}>CHECKOUT NOW</Button>
                        </Summary>
                }
            </Bottom>
            </ContentCart>

            <Form trigger={timedPopup} setTrigger={setTimedPopup}>
                    <h3>My Timed popup</h3>
            </Form>

        </WrapperCart>
    );
}

export default Cart;