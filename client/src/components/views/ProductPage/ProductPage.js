import { useSelector } from 'react-redux';
import PageSlider from '../../common/PageSlider/PageSlider';
import styles from './ProductPage.module.scss'
import { getAllTours } from '../../../redux/toursRedux';
import TripBox from '../../features/TripBox/TripBox';
import PageTitle from '../../common/PageTitle/PageTitle';

const ProdcutPage = () => {

    const tours = useSelector(getAllTours);

    return (
        <div className={styles.root}>
            <PageSlider imageName={'product'} text={'Choose your next adventure!'}/>
            <PageTitle>CHOOSE YOUR DREAM TOUR!</PageTitle>
            <div className={styles.main}>
                <div className={styles.products}>
                    {tours.map(tour => (
                        <div key={tour.id} className={styles.item}>
                            <TripBox {...tour} />
                        </div>
                    ) )}
                </div>
                <div className={styles.filters}>
                </div>
            </div>

        </div>
    )
    
}

export default ProdcutPage;