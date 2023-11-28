import Button from '../../common/Button/Button';
import styles from "./TripBox.module.scss"
import { capitalizeCategory } from '../../../utils/CapitalLetter';
import { useNavigate } from 'react-router-dom';


const TripBox = (props) => {

    const navigate = useNavigate();
    const goToTour = () => {
        navigate('/tour/' + props.url)
        window.scrollTo(0, 0);
    }

    console.log(props);
    const image = `${process.env.PUBLIC_URL}/photos/tours/${props.url}/main.jpg`;
    const category = capitalizeCategory(props.category.category);
    
    return (
        <div className={styles.root}>
            <h2>{props.title}</h2>
            <img
                className={styles.image}
                alt={props.text}
                src={image} />
            <p><b>Price: $</b>{props.price}</p>
            <p><b>Category: </b>{category}</p>
            <div className={styles.button} onClick={goToTour} ><Button>Read more</Button></div>
        </div>
    )

}

export default TripBox;