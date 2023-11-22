//import styles from './Cart.module.scss'

import { getAllCart } from "../../../redux/cartRedux";

const CartPage = () => {
    console.log(getAllCart);

    return (
        <div>
            <h1>Order page</h1>
        </div>
    );
};

export default CartPage;