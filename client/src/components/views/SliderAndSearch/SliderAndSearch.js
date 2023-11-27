import { useEffect, useState } from 'react';
import styles from './SliderAndSearch.module.scss'

const SliderAndSearch = () => {

    const baseURL = `${process.env.PUBLIC_URL}/photos/slider/`;

    const images = [
        { url: `${baseURL}1.jpg`, caption: 'Astonishing Wildlife' },
        { url: `${baseURL}4.jpg`, caption: 'Majestic Mountains' },
        { url: `${baseURL}3.jpg`, caption: 'Captivating Cultures' },
        { url: `${baseURL}2.jpg`, caption: 'Spectacular Sunsets' },
        { url: `${baseURL}5.jpg`, caption: 'Dazzling Beaches' },
        { url: `${baseURL}6.jpg`, caption: 'Beautiful Nature' },
        { url: `${baseURL}7.jpg`, caption: 'Breathtaking Views' },

    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex(currentIndex => (currentIndex + 1) % images.length);
        }, 8000);
        return () => clearInterval(interval);
      }, []);

      return (
        <div className={styles.imageSlider}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
            >
              <img src={image.url} alt={image.caption} />
              <h2>{image.caption}</h2>
            </div>
          ))}
        </div>
      );
    };

export default SliderAndSearch;