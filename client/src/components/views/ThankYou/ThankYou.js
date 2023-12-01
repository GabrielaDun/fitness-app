import React from 'react';
import styles from './ThankYou.module.scss';

const ThankYou = () => {
    const slideImage = `${process.env.PUBLIC_URL}/photos/headers/thank-you.jpg`;
    return (
        <div className={styles.root}>
            <div className={styles.slider} style={{backgroundImage: `url(${slideImage})`}}>
                <h2>Your booking was succcesful!</h2>
            </div>
            <div className={styles.empty}>
                <p>We will send you the payment methods shortly.</p>
            </div>
        </div>
    );
}

export default ThankYou;