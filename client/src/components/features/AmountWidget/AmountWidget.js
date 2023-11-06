import React, { useState } from 'react';
import styles from './AmountWidget.module.scss';

const AmountWidget = () => {
  const [amount, setAmount] = useState(0);

  // Client doesn't want more than 6 booking to be possible at once
  const increaseAmount = () => {
    if (amount < 6) {
        setAmount(prevAmount => prevAmount + 1);
    }
  }

  const decreaseAmount = () => {
    if (amount > 0) {
      setAmount(prevAmount => prevAmount - 1);
    }
  }

  return (
    <div className={styles.widgetContainer}>
      <button onClick={decreaseAmount}>-</button>
      <input 
        type="number" 
        value={amount} 
        readOnly 
        className={styles.amountInput}
      />
      <button onClick={increaseAmount}>+</button>
    </div>
  );
}

export default AmountWidget;
