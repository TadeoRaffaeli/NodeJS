import { Badge } from "@material-ui/core";
import { useContext } from 'react';
import { CartContext } from './CartContext';

const CartWidget = () => {
    const test = useContext(CartContext);

    return (
        <Badge badgeContent={test.calcItemsQty()} color="secondary">
        </Badge>
    );
}

export default CartWidget;