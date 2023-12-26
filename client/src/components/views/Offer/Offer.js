import { useSelector } from 'react-redux';
import Button from '../../common/Button/Button';
import PageTitle from '../../common/PageTitle/PageTitle';
import styles from './Offer.module.scss'
import { getFilteredTours } from '../../../redux/toursRedux';
import TripBox from '../../features/TripBox/TripBox';
import { useNavigate } from 'react-router-dom';
import CategoryFilter from '../../features/CategoryFilter/CategoryFilter';
import { getCurrectFilter } from '../../../redux/categoryRedux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Offer = () => {
    const navigate = useNavigate();
    const goToProducts = () => {
        navigate('/products')
        window.scrollTo(0, 0);
    }

    const category = useSelector(getCurrectFilter)
    const trips = useSelector(state => getFilteredTours(state, category, 6));

    return (
        <div className={styles.root}>
            <PageTitle>BEST OFFERS THIS MONTH</PageTitle>
            <CategoryFilter />
            <TransitionGroup component={null}>
                <div className={styles.grid}>
                    {trips.map(trip => (
                        <CSSTransition key={trip.id} timeout={1300} classNames={{
                            enter: styles['gridItem-enter'],
                            enterActive: styles['gridItem-enter-active'],
                            exit: styles['gridItem-exit'],
                            exitActive: styles['gridItem-exit-active'],
                        }}>
                        <div className={styles.gridItem}>
                            <TripBox {...trip} />
                        </div>
                        </CSSTransition>
                    ))}
                </div>
      </TransitionGroup>
            <div className={styles.moreTours}>
                <Button className={styles.btn} colorType="secondary" onClick={goToProducts}>See more tours!</Button>
            </div>
        </div>
    );
};

export default Offer;