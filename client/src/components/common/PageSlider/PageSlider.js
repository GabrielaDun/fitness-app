import React from 'react';
import styles from './PageSlider.module.scss';


const PageSlider = ({imageName, text}) => {
    const slideImage = `${process.env.PUBLIC_URL}/photos/headers/${imageName}.jpg`;
    
    return (
        <div className={styles.root}>
            <div className={styles.slider} style={{backgroundImage: `url(${slideImage})`}}>
                <h2>{text}</h2>
            </div>
        </div>
    )
}
export default PageSlider;