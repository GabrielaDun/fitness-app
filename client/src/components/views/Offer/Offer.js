import { useSelector } from 'react-redux';
import Button from '../../common/Button/Button';
import PageTitle from '../../common/PageTitle/PageTitle';
import styles from './Offer.module.scss'
import { getFourTours } from '../../../redux/toursRedux';
import TripBox from '../../features/TripBox/TripBox';

const Offer = () => {
    const trips = useSelector(getFourTours);
    return (
        <div className={styles.root}>
            <PageTitle>BEST OFFERS THIS MONTH</PageTitle>
            <div className={styles.grid}>
            {trips.map(trip => (
                <div key={trip.id} className={styles.gridItem}>
                    <TripBox {...trip} />
                </div>
            ))}
        </div>
            <div className={styles.moreTours}>
                < Button>See more tours</Button>
            </div>
        </div>
    );
};

export default Offer;