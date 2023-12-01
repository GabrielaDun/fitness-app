import styles from './CartPage.module.scss'

import { useSelector } from "react-redux";
import {  getAllCart, getAllCartWithTour } from "../../../redux/cartRedux";
import CartBox from '../../features/CartBox/CartBox';
import Button from '../../common/Button/Button';
import { Navigate, useNavigate } from 'react-router-dom';
import { CalculeteDownPayment } from '../../../utils/CalculeteDownPayment';
import { useEffect, useState } from 'react';
import { getTourLoading } from '../../../redux/toursRedux';
import PageSlider from '../../common/PageSlider/PageSlider';

const CartPage = () => {
    const navigate = useNavigate();

    const cartData = useSelector(getAllCart)
    const cartDetailedData = useSelector(getAllCartWithTour)
    const [totalPrice, setTotalPrice] = useState(0);
    const loading = useSelector(getTourLoading);

    const goToCheckout = () => {
        navigate('/checkout');
        window.scrollTo(0, 0);
    };
    
    useEffect(() => {
        const timer = setTimeout(() => {
            let newTotalPrice = 0;
            for (let trip of cartDetailedData) {
                newTotalPrice += trip.quantity * CalculeteDownPayment(trip.tourDetails?.price || 0);
            }
            setTotalPrice(newTotalPrice);
        }, 500); // Delay for 0.5 seconds to enable refreshing of orderpage
    
        return () => clearTimeout(timer); 
    }, [cartDetailedData]);

    if (loading) return <div>Loading...</div>;

    if(!cartData) return <Navigate to="/" />
    else return (
        <div className={styles.root}>
            < PageSlider imageName={'cart'} text='Cart' />
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
                    <div className={styles.price}>${totalPrice}</div>
                </div>
                <div className={styles.buttonSpace}>
                <div className={styles.button} onClick={goToCheckout}>
                    <Button>Go to checkout</Button>
                </div>

                </div>
            </div>
            )}
        </div>
    );
};

export default CartPage;