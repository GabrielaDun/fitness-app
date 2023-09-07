import Categories from '../Categories/Categories';
import FollowUs from '../FollowUs/FollowUs';
import Map from '../Map/Map';
import Offer from '../Offer/Offer';
import Quote from '../Quote/Quote';
import SliderAndSearch from '../SliderAndSearch/SliderAndSearch';
import styles from './Home.module.scss'

const Home = () => {
    return (
        <div>
            <h1 className={styles.title}>Home</h1>
            < SliderAndSearch />
            < Map />
            < Quote />
            < Offer />
            < Quote />
            < Categories />
            < FollowUs />
        </div>
    );
};

export default Home;