import styles from './CheckoutPage.module.scss'

import { useSelector } from "react-redux";
import { getAllCart, getAllCartWithTour } from "../../../redux/cartRedux";
import Button from '../../common/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import CheckoutBox from '../../features/CheckoutBox/CheckoutBox';
import { useEffect, useState } from 'react';
import { CalculeteDownPayment } from '../../../utils/CalculeteDownPayment';

const CheckoutPage = () => {
    const navigate = useNavigate();

    const cartData = useSelector(getAllCart)
    console.log(cartData);
    const slideImage = `${process.env.PUBLIC_URL}/photos/headers/checkout.jpg`;


    const goToCart = () => {
        navigate('/cart');
        window.scrollTo(0, 0);
    };

    const [totalPrice, setTotalPrice] = useState(0);
    const cartDetailedData = useSelector(getAllCartWithTour)

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
                <div className={styles.buttonSpace}>
                <div className={styles.button} onClick={goToCart}>
                    <Button>Go back to cart</Button>
                </div>
                    <Link className={styles.button} to={'/thank-you'}>
                        <Button>Make a booking</Button>
                    </Link>
                </div>
            </div>
            )}
        </div>
    );
};

export default CheckoutPage;