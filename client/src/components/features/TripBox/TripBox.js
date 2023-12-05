import Button from '../../common/Button/Button';
import styles from "./TripBox.module.scss"
import { capitalizeCategory } from '../../../utils/CapitalLetter';
import { useNavigate } from 'react-router-dom';
import { shortenString } from '../../../utils/ShortenString';


const TripBox = (props) => {

    const navigate = useNavigate();
    const goToTour = () => {
        navigate('/tour/' + props.url)
        window.scrollTo(0, 0);
    }

    const image = `${process.env.PUBLIC_URL}/photos/tours/${props.url}/main.jpg`;
    const category = capitalizeCategory(props.category.category);
    const description = shortenString(props.longDescription, 90)
    
    return (
        <div className={styles.root}>
            <img
                className={styles.image}
                alt={props.text}
                src={image} />
            <h2>{props.title}</h2>
            <p><b>Price: $</b>{props.price} /<b> Category: </b>{category}</p>
            <p>{description}</p>
            <div className={styles.button} onClick={goToTour} ><Button>Read more</Button></div>
        </div>
    )

}

export default TripBox;