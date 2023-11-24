
import styles from './AmountWidget.module.scss';
import { useDispatch } from 'react-redux';
import { changeCartAmount } from '../../../redux/cartRedux';

const AmountWidget = ({ tourId, quantity, setQuantity, immediateUpdate = false }) => {
  const dispatch = useDispatch();

  const changeQuantity = (newQuantity) => {
    setQuantity(newQuantity);
    if (immediateUpdate) {
      dispatch(changeCartAmount({
        tourId: tourId, 
        plusMinus: newQuantity > quantity ? 'increase' : 'decrease'
      }));
    }
  };

  const increaseQuantity = () => {
    if (quantity < 10) {
      changeQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      changeQuantity(quantity - 1);
    }
  };

  return (
    <div className={styles.widgetContainer}>
      <button onClick={decreaseQuantity}>-</button>
      <input 
        type="number" 
        value={quantity} 
        readOnly 
        className={styles.quantityInput}
      />
      <button onClick={increaseQuantity}>+</button>
    </div>
  );
}

export default AmountWidget;
