import { Badge } from "@material-ui/core";
import { useContext } from 'react';
import { CartContext } from './CartContext';

const CartWidget = () => {
    const CartAmount = useContext(CartContext);
    return (
        <Badge badgeContent={CartAmount.calcItemsQty()} color="secondary">
        </Badge>
    );
}

export default CartWidget;