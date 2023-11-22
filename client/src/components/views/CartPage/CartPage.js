import styles from './CartPage.module.scss'

import { useSelector } from "react-redux";
import { getAllCart } from "../../../redux/cartRedux";
import CartBox from '../../features/CartBox/CartBox';

const CartPage = () => {
    const cartData = useSelector(getAllCart)
    console.log(cartData);
    const slideImage = `${process.env.PUBLIC_URL}/photos/headers/cart.jpg`;

    return (
        <div className={styles.root}>
            <div className={styles.slider} style={{backgroundImage: `url(${slideImage})`}}>
                <h2>Cart</h2>
            </div>
            {cartData.length > 0 && (
            <div className={styles.cart}>
                <div className={styles.categories}>
                    <div className={styles.product}>Chosen Trip</div>
                    <div className={styles.price} ><p>Price</p></div>
                    <div className={styles.downPayment}><p>Down Payment</p></div>
                    <div className={styles.amount}>Qunatity</div>
                    <div className={styles.total}><p>Total Price</p></div>
                </div>
            </div>
            )}
            {cartData.length === 0 && (
                <div className={styles.empty}>
                    <h2>Your cart is empty</h2>
                </div>
            )}
            <div className={styles.grid}>
                {cartData.map(cart => (
                    <div key={cart.id} className={styles.gridItem}>
                        <CartBox {... cart} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CartPage;