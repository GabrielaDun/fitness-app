import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './TourPage.module.scss'
import { getTourByURL } from '../../../redux/toursRedux';
import { Navigate } from 'react-router-dom';
import Button from '../../common/Button/Button';
import AmountWidget from '../../features/AmountWidget/AmountWidget';

const TourPage = () => {
     const { url } = useParams();
     console.log({url}, url)

    const loading = useSelector(state => state.tours.loading);

    const tourData = useSelector(state => getTourByURL(state, url))
    console.log(tourData);

    if (loading) return <div>Loading...</div>;
    const slideImage = `${process.env.PUBLIC_URL}/photos/tours/${tourData.url}/main.jpg`;
    const otherImageBase =`${process.env.PUBLIC_URL}/photos/tours/${tourData.url}/`;

    if(!tourData) return <Navigate to="/" />
    else return (
        <div className={styles.root}>
            <div className={styles.slider} style={{backgroundImage: `url(${slideImage})`}}>
                <h2>{tourData.title}</h2>
            </div>
            <div className={styles.container}>
                <div className={styles.main}>
                    <div className={styles.title}>{tourData.title}</div>
                    <div className={styles.description}>{tourData.longDescription}</div>
                    <div className={styles.icones}> </div>
                    <div className={styles.title}>Price: ${tourData.price}</div>
                    <div className={styles.title}>More photos:</div>
                    <div className={styles.photos}>
                    <img className={styles.image} alt={tourData.text} src={`${otherImageBase}1.jpg`} />
                    <img className={styles.image} alt={tourData.text} src={`${otherImageBase}2.jpg`} />
                    <img className={styles.image} alt={tourData.text} src={`${otherImageBase}3.jpg`} />
                    <img className={styles.image} alt={tourData.text} src={`${otherImageBase}4.jpg`} />
                    <img className={styles.image} alt={tourData.text} src={`${otherImageBase}5.jpg`} />
                    <img className={styles.image} alt={tourData.text} src={`${otherImageBase}6.jpg`} />
                    </div>
                </div>
                <div className={styles.booking}>
                    <div className={styles.title}>BOOK THIS TOUR</div>
                    <div className={styles.downPayment}>Down Payment Only: $300</div>
                    <AmountWidget />
                    <Button>Book it Now!</ Button>
                </div>

            </div>
        </div>
    );
}

export default TourPage;