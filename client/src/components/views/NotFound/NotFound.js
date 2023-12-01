import React from 'react';
import styles from './NotFound.module.scss';

const NotFound = () => {
    const slideImage = `${process.env.PUBLIC_URL}/photos/headers/not-found.jpg`;
    return (
        <div className={styles.root}>
            <div className={styles.slider} style={{backgroundImage: `url(${slideImage})`}}>
                <h2>404</h2>
                <h2>Page Not Found</h2>
            </div>
            <div className={styles.empty}>
                <p>The page you are looking for does not exist.</p>
            </div>
        </div>
    );
}

export default NotFound;