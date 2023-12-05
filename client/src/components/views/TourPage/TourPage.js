import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './TourPage.module.scss'
import { getTourByURL, getTourLoading } from '../../../redux/toursRedux';
import { Navigate } from 'react-router-dom';
import Button from '../../common/Button/Button';
import AmountWidget from '../../features/AmountWidget/AmountWidget';
import { addToCart } from '../../../redux/cartRedux';
import { useState } from 'react';

const TourPage = () => {
     const { url } = useParams();
    const loading = useSelector(getTourLoading);
    const tourData = useSelector(state => getTourByURL(state, url))
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate()

    const [itemAdded, setItemAdded] = useState(false);
    const [showAddedToCartText, setShowAddedToCartText] = useState(false);

    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addToCart({
            tourId: tourData.id, 
            description: '', 
            quantity: quantity}))
        setItemAdded(true);
        setShowAddedToCartText(true);
    }
    setTimeout(() => {
        setShowAddedToCartText(false);
    }, 6000);

    const goToCart = () => {
        navigate('/cart')
        window.scrollTo(0,0);
    }

    if (loading) return <div>Loading...</div>;
    const slideImage = `${process.env.PUBLIC_URL}/photos/tours/${tourData.url}/main.jpg`;
    const otherImageBase =`${process.env.PUBLIC_URL}/photos/tours/${tourData.url}/`;

    if(!tourData) return <Navigate to="/" />
    const images = [];
    for (let i = 1; i <= 6; i++) {
        images.push(
            <img key={i} className={styles.image} alt={`Tour ${i}`} src={`${otherImageBase}${i}.jpg`} />
        );
    }
    return (
        <div className={styles.root}>
            <div className={styles.slider} style={{backgroundImage: `url(${slideImage})`}}>
                <h2>{tourData.title}</h2>
            </div>
            <div className={styles.container}>
                <div className={styles.main}>
                    <div className={styles.title}>{tourData.title}</div>
                    <div className={styles.description}>{tourData.longDescription}</div>
                    <div className={styles.title}>Duration: {tourData.tourDurationDays} days</div>
                    <div className={styles.icones}> </div>
                    <div className={styles.title}>Price: ${tourData.price}</div>
                    <div className={styles.title}>More photos:</div>
                    <div className={styles.photos}>
                        {images}
                    </div>
                </div>
                <div className={styles.booking}>
                    <div className={styles.title}>BOOK THIS TOUR</div>
                    <div className={styles.downPayment}>Down Payment Only: $300</div>
                    <AmountWidget tourId={tourData.id} quantity={quantity} setQuantity={setQuantity} immediateUpdate={false} />
                    {itemAdded && (
                        <div className={styles.cartNotification}>
                        {showAddedToCartText && <p>Order was just added to cart</p>}
                        <Button colorType="secondary" onClick={goToCart}>Go to cart</Button>
                    </div>
                    )}
                    <Button onClick={() => handleAddToCart()}>Add to cart</ Button>
                </div>

            </div>
        </div>
    );
}

export default TourPage;