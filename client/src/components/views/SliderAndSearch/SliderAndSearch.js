import { useEffect, useState } from 'react';
import styles from './SliderAndSearch.module.scss'

const SliderAndSearch = ({ images }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex(currentIndex => (currentIndex + 1) % images.length);
        }, 20000);
        return () => clearInterval(interval);
      }, [currentIndex, images.length]);

    return (
        <div>
            <div className={styles.slider}></div>
            <div className={styles.search}></div>
        </div>
    );
};

export default SliderAndSearch;