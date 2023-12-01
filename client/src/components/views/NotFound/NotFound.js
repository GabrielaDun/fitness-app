import React from 'react';
import styles from './NotFound.module.scss';
import PageSlider from '../../common/PageSlider/PageSlider';

const NotFound = () => {
    return (
        <div className={styles.root}>
            < PageSlider imageName={'not-found'} text='404 Page Not Found' />
            <div className={styles.empty}>
                <p>The page you are looking for does not exist.</p>
            </div>
        </div>
    );
}

export default NotFound;