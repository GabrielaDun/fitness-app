import styles from './CheckoutPage.module.scss'

import { useSelector } from "react-redux";
import { getAllCart, getAllCartWithTour } from "../../../redux/cartRedux";
import CheckoutBox from '../../features/CheckoutBox/CheckoutBox';
import { useEffect, useState } from 'react';
import { CalculeteDownPayment } from '../../../utils/CalculeteDownPayment';
import OrderForm from '../../features/OrderForm/OrderForm';
import PageSlider from '../../common/PageSlider/PageSlider';
import Button from '../../common/Button/Button';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {

    const cartData = useSelector(getAllCart);

    const navigate = useNavigate();
    const goToProducts = () => {
        navigate('/products')
        window.scrollTo(0, 0);
    }

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
            < PageSlider imageName={'checkout'} text='Checkout' />
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
                    <h1>Your cart is empty. You have nothing to checkout</h1>
                    <p>See our amazing tours:</p>
                    <div className={styles.moreTours}>
                        <Button colorType="secondary" onClick={goToProducts}>See more tours!</Button>
                    </div>
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
                    < OrderForm cartData={cartData} totalDownPayment={totalPrice} />
                </div>
                <div className={styles.buttonSpace}>
                </div>
            </div>
            )}
        </div>
    );
};

export default CheckoutPage;