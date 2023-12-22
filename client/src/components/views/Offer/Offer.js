import { useSelector } from 'react-redux';
import Button from '../../common/Button/Button';
import PageTitle from '../../common/PageTitle/PageTitle';
import styles from './Offer.module.scss'
import { getFourTours } from '../../../redux/toursRedux';
import TripBox from '../../features/TripBox/TripBox';
import { useNavigate } from 'react-router-dom';

const Offer = () => {
    const navigate = useNavigate();
    const goToProducts = () => {
        navigate('/products')
        window.scrollTo(0, 0);
    }
    const trips = useSelector(getFourTours);
    return (
        <div className={styles.root}>
            <PageTitle>BEST OFFERS THIS MONTH</PageTitle>
            <div className={styles.categories}>
            <div className={styles.subCategories}>
                    <div className={styles.button}>
                        <Button colorType='tertiary'>Everything</Button>
                    </div>
                </div>
                <div className={styles.subCategories}>
                    <div className={styles.button}>
                        <Button colorType='tertiary'>Weekend</Button>
                    </div>
                    <div className={styles.button}>
                        <Button colorType='tertiary'>Sightseeing</Button>
                    </div>
                </div>
                <div className={styles.subCategories}>
                    <div className={styles.button}>
                        <Button colorType='tertiary'>Cycling</Button>
                    </div>
                    <div className={styles.button}>
                        <Button colorType='tertiary'>Hiking</Button>
                    </div>
                </div>
            </div>
            <div className={styles.grid}>
            {trips.map(trip => (
                <div key={trip.id} className={styles.gridItem}>
                    <TripBox {...trip} />
                </div>
            ))}
        </div>
            <div className={styles.moreTours}>
                <Button className={styles.btn} colorType="secondary" onClick={goToProducts}>See more tours!</Button>
            </div>
        </div>
    );
};

export default Offer;