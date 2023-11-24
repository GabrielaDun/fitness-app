import { useDispatch, useSelector } from 'react-redux';
import { getTourById } from '../../../redux/toursRedux';
import AmountWidget from '../AmountWidget/AmountWidget';
import styles from './CartBox.module.scss';
import { useState } from 'react';
import { CalculeteDownPayment } from '../../../utils/CalculeteDownPayment';
import { addDesciption } from '../../../redux/cartRedux';

const CartBox = ({tourId, quantity}) => {
  const dispatch = useDispatch()
  const tourData = useSelector(state => getTourById(state, tourId))

  const [amount, setAmount] = useState(quantity);
  const downPayment = CalculeteDownPayment(tourData.price)
  const singleItemTotalPrice = amount * downPayment;
  

  const [description, setDescription] = useState('')

  const handleDeleteTour = (event) => {

  }

  const handleDescription = (event) => {
    setDescription(event.target.value)
    dispatch(addDesciption({
      tourId: tourId,
      description: description
    }))

  }

  const image = `${process.env.PUBLIC_URL}/photos/tours/${tourData.url}/main.jpg`
  return (
    <div className={styles.root}>
      <div className={styles.main}>
        <div className={styles.product}>
          <div className={styles.x}>
            <button onClick={handleDeleteTour}>X</button>
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