import Button from '../../common/Button/Button';
import { Link} from 'react-router-dom';
//import { API_URL } from '../../../config';
import styles from "./TripBox.module.scss"


const TripBox = (props) => {
    console.log(props);
    const slideImage = `${process.env.PUBLIC_URL}/photos/tours/${props.url}/main.jpg`;
    return (
        <div className={styles.root}>
            <h2>{props.title}</h2>
            <img
                className={styles.image}
                alt={props.text}
                src={slideImage} />
            <p><b>Price: </b>{props.price}</p>
            <p><b>Type: </b>{props.type}</p>
            <Link className={styles.button} to={'/tour/'+ props.url} ><Button>Read more</Button></Link>
        </div>
    )

}

export default TripBox;