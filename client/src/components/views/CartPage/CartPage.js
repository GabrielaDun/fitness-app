import styles from './CartPage.module.scss'

import { useSelector } from "react-redux";
import { getAllCart } from "../../../redux/cartRedux";

const CartPage = () => {
    const cartData = useSelector(getAllCart)
    console.log(cartData);
    const slideImage = `${process.env.PUBLIC_URL}/photos/headers/cart.jpg`;

    return (
        <div className={styles.root}>
            <div className={styles.slider} style={{backgroundImage: `url(${slideImage})`}}>
                <h2>Cart</h2>
            </div>
            <div className={styles.cart}>
                <div>
                    
                </div>
            </div>
            <h1>Order page</h1>
        </div>
    );
};

export default CartPage;