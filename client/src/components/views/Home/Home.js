import Quote from '../../features/Quote/Quote';
import Offer from '../Offer/Offer';
import SliderAndSearch from '../SliderAndSearch/SliderAndSearch';

const Home = () => {
    const imageUrlOne = `${process.env.PUBLIC_URL}/photos/quotes/1.jpg`;

    return (
        <div>
            <SliderAndSearch />
            <Offer />
            <Quote title={'Enjoy the wildness'} subtitle={'MONTIANS'} image={imageUrlOne} />
        </div>
    );
};

export default Home;