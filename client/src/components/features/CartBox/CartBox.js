import { useDispatch, useSelector } from 'react-redux';
import { getTourById, getTourLoading } from '../../../redux/toursRedux';
import AmountWidget from '../AmountWidget/AmountWidget';
import styles from './CartBox.module.scss';
import { useEffect, useState } from 'react';
import { CalculeteDownPayment } from '../../../utils/CalculeteDownPayment';
import { addDesciption, deleteOrderItem, getOrderItemDescription } from '../../../redux/cartRedux';
import { Navigate } from 'react-router-dom';

const CartBox = ({tourId, quantity, id}) => {
  const dispatch = useDispatch()
  const tourData = useSelector(state => getTourById(state, tourId))

  const orderDescription = useSelector(state => getOrderItemDescription(state, id))
  console.log(orderDescription);

  const [amount, setAmount] = useState(quantity);
  const [description, setDescription] = useState('')

  useEffect(() => {
    setDescription(orderDescription || '');
  }, [orderDescription]);

  const handleDeleteTour = (event) => {
    console.log(tourId);
    dispatch(deleteOrderItem({
      tourId: tourId
    }))
  }

  const handleDescription = (event) => {
    const newDescription = event.target.value
    setDescription(newDescription)
    dispatch(addDesciption({
      tourId: tourId,
      description: newDescription
    }))
  }

  const loading = useSelector(getTourLoading);
  
  if (loading) return <div>Loading...</div>;
  const downPayment = CalculeteDownPayment(tourData.price)
  const singleItemTotalPrice = amount * downPayment;
  const image = `${process.env.PUBLIC_URL}/photos/tours/${tourData.url}/main.jpg`
  
  if(!tourData) return <Navigate to="/" />
    else return (
      <div className={styles.root}>
        <div className={styles.main}>
          <div className={styles.product}>
            <div className={styles.x}>
              <button onClick={handleDeleteTour}><i className="fa-solid fa-x"></i></button>
            </div>
            <img 
              className={styles.image}
              alt={tourData.title}
              src={image}
            />
            <div className={styles.title}>{tourData.title} </div>
          </div>
          <div className={styles.price} ><p>${tourData.price}</p></div>
          <div className={styles.downPayment}><p>${downPayment}</p></div>
          <div className={styles.amount}><AmountWidget tourId={tourId} quantity={amount} setQuantity={setAmount} immediateUpdate={true}/></div>
          <div className={styles.total}><p>${singleItemTotalPrice}</p></div>
        </div>
        <div className={styles.description}>
          <input  
            type="text" 
            onChange={handleDescription} 
            placeholder="Tell us if you need us to customize your trip (for example: do you have any diatery restrictions?)"
            value={description}
            >
          </input>
        </div>
      </div>
  );
}
export default CartBox;