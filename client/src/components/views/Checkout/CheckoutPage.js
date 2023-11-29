import styles from './CheckoutPage.module.scss'

import { useSelector } from "react-redux";
import { getAllCart, getAllCartWithTour } from "../../../redux/cartRedux";
import CheckoutBox from '../../features/CheckoutBox/CheckoutBox';
import { useEffect, useState } from 'react';
import { CalculeteDownPayment } from '../../../utils/CalculeteDownPayment';
import OrderForm from '../../features/OrderForm/OrderForm';

const CheckoutPage = () => {

    const cartData = useSelector(getAllCart)
    console.log(cartData);
    const slideImage = `${process.env.PUBLIC_URL}/photos/headers/checkout.jpg`;


    const [totalPrice, setTotalPrice] = useState(0);
    const cartDetailedData = useSelector(getAllCartWithTour)

    useEffect(() => {
        const timer = setTimeout(() => {
            let newTotalPrice = 0;
            for (let trip of cartDetailedData) {
                newTotalPrice += trip.quantity * CalculeteDownPayment(trip.tourDetails?.price || 0);
            }
            setTotalPrice(newTotalPrice);
        }, 500); // // Delay for 0.5 seconds to enable refreshing of checkout page
    
        return () => clearTimeout(timer); // Cleanup the timer
    }, [cartDetailedData]);

    return (
        <div className={styles.root}>
            <div className={styles.slider} style={{backgroundImage: `url(${slideImage})`}}>
                <h2>Checkout</h2>
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
                    <h2>Your cart is empty. You have nothing to checkout</h2>
                </div>
            )}
            <div className={styles.grid}>
                {cartData.map(cart => (
                    <div key={cart.id} className={styles.gridItem}>
                        <CheckoutBox {...cart} />
                    </div>
                ))}
            </div>
            {cartData.length > 0 &&  (
            <div className={styles.end}>
                <div className={styles.summery}>
                    <div className={styles.blank}></div>
                    <div className={styles.totalPrice}>Total down payment</div>
                    <div className={styles.price}>${totalPrice}</div>
                </div>
                <div className={styles.orderForm}>
                    < OrderForm totalDownPayment={totalPrice} />
                </div>
                <div className={styles.buttonSpace}>
                </div>
            </div>
            )}
        </div>
    );
};

export default CheckoutPage;