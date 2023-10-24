import { useSelector } from "react-redux";
import { getAllTours } from "../../../redux/toursRedux";
import styles from "./Trip.module.scss"
import TripBox from "../TripBox/TripBox";


const Trip = () => {

    const trips = useSelector(getAllTours)
    console.log(trips);

    return (
        <div className={styles.grid}>
            {trips.map(trip => (
                <div key={trip._id} className={styles.gridItem}>
                    <TripBox {...trip} />
                </div>
            ))}
        </div>
    )
    
}

export default Trip;