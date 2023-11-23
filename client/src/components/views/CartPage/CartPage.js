import styles from './CartPage.module.scss'

import { useSelector } from "react-redux";
import {  getAllCart, getAllCartWithTour } from "../../../redux/cartRedux";
import CartBox from '../../features/CartBox/CartBox';
import Button from '../../common/Button/Button';
import { Link } from 'react-router-dom';
import { CalculeteDownPayment } from '../../../utils/CalculeteDownPayment';
import { useEffect, useState } from 'react';

const CartPage = () => {
    const cartData = useSelector(getAllCart)
    console.log(cartData);
    const slideImage = `${process.env.PUBLIC_URL}/photos/headers/cart.jpg`;

    const cartDetailedData = useSelector(getAllCartWithTour)
    console.log(cartDetailedData);

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let newTotalPrice = 0;
        for (let trip of cartDetailedData) {
            newTotalPrice += trip.quantity * CalculeteDownPayment(trip.tourDetails.price);
        }
        setTotalPrice(newTotalPrice);
    }, [cartDetailedData])

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
                    <div className={styles.total}><p>Total down payment</p></div>
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
                        <CartBox {...cart} />
                    </div>
                ))}
            </div>
            {cartData.length > 0 &&  (
            <div className={styles.end}>
                <div className={styles.summery}>
                    <div className={styles.blank}></div>
                    <div className={styles.totalPrice}>Total down payment</div>
                    <div className={styles.price}>{totalPrice}</div>
                </div>
                <div className={styles.buttonSpace}>
                    <Link className={styles.button} to={'/checkout'}>
                        <Button>Go to checkout</Button>
                    </Link>
                </div>
            </div>
            )}
        </div>
    );
};

export default CartPage;