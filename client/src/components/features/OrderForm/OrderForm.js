import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './OrderForm.module.scss';

const OrderForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.inputGroup}>
                <input 
                    type="text" 
                    placeholder="First Name" 
                    {...register("firstName", { required: "First Name is required" })} 
                />
                {errors.firstName && <span className={styles.error}>{errors.firstName.message}</span>}
            </div>
            
            <div className={styles.inputGroup}>
                <input 
                    type="text" 
                    placeholder="Your surname" 
                    {...register("surname", { required: "Surname is required" })} 
                />
                {errors.surname && <span className={styles.error}>{errors.surname.message}</span>}
            </div>
            
            <div className={styles.inputGroup}>
                <input 
                    type="text" 
                    placeholder="Country" 
                    {...register("country", { required: "Country is required" })} 
                />
                {errors.country && <span className={styles.error}>{errors.country.message}</span>}
            </div>

            {/* Add other input fields here with similar structure */}

            <button type="submit">Submit</button>
        </form>
    );
}

export default OrderForm;