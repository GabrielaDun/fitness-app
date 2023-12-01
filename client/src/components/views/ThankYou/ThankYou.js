import React from 'react';
import styles from './ThankYou.module.scss';
import PageSlider from '../../common/PageSlider/PageSlider';

const ThankYou = () => {
    return (
        <div className={styles.root}>
            < PageSlider imageName={'thank-you'} text='Your booking was successful!' />
            <div className={styles.empty}>
                <p>We will send you the payment methods shortly.</p>
            </div>
        </div>
    );
}

export default ThankYou;