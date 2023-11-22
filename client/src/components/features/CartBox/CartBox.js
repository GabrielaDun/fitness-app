import { useSelector } from 'react-redux';
import { getTourById } from '../../../redux/toursRedux';
import AmountWidget from '../AmountWidget/AmountWidget';
import styles from './CartBox.module.scss';
import { useState } from 'react';

const CartBox = (props) => {
  const tourData = useSelector(state => getTourById(state, props.tourId))
  console.log(tourData);
  const [quantity, setQuantity] = useState(props.quantity);
  const downPayment = Math.round(tourData.price / 1000) * 100
  const totalPrice = quantity * downPayment;

  const image = `${process.env.PUBLIC_URL}/photos/tours/${tourData.url}/main.jpg`
  return (
    <div className={styles.root}>
      <div className={styles.product}>
        <div className={styles.x}>X</div>
        <img 
          className={styles.image}
          alt={tourData.title}
          src={image}
        />
        <div className={styles.title}>{tourData.title} </div>
      </div>
      <div className={styles.price} ><p>${tourData.price}</p></div>
      <div className={styles.downPayment}><p>${downPayment}</p></div>
      <div className={styles.amount}><AmountWidget quantity={quantity} setQuantity={setQuantity}/></div>
      <div className={styles.total}><p>${totalPrice}</p></div>
    </div>
  );
}
export default CartBox;