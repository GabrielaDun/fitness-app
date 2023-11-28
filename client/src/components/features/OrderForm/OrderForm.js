import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './OrderForm.module.scss';
import Button from '../../common/Button/Button';
import {  useNavigate } from 'react-router-dom';

const OrderForm = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
    };
    const goToCart = () => {
        navigate('/cart');
        window.scrollTo(0, 0);
    };
    const makeABooking = () => {
        navigate('/thank-you');
        window.scrollTo(0, 0);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.inputGroupRow}>
                <div className={styles.inputGroup}>
                    <p>First Name</p>
                    <input 
                        type="text" 
                        placeholder="First name" 
                        {...register("firstName", { required: "First Name is required" })} 
                    />
                    {errors.firstName && <span className={styles.error}>{errors.firstName.message}</span>}
                </div>
                
                <div className={styles.inputGroup}>
                    <p>Surname</p>
                    <input 
                        type="text" 
                        placeholder="Your surname" 
                        {...register("surname", { required: "Surname is required" })} 
                    />
                    {errors.surname && <span className={styles.error}>{errors.surname.message}</span>}
                </div>
            </div>
            
            <div className={styles.inputGroup}>
                <p>Country</p>
                <input 
                    type="text" 
                    placeholder="Country" 
                    {...register("country", { required: "Country is required" })} 
                />
                {errors.country && <span className={styles.error}>{errors.country.message}</span>}
            </div>
            <div className={styles.inputGroup}>
                <p>City</p>
                <input 
                    type="text"
                    placeholder="City"
                    {...register("city", { required: "City is required" })}
                />
                {errors.city && <span className={styles.error}>{errors.city.message}</span>}
            </div>
            <div className={styles.inputGroup}>
                <p>Address</p>
                <input
                    type="text"
                    placeholder="Address"
                    {...register("address", { required: "Adresss is required" })}
                />
                {errors.address && <span className={styles.error}>{errors.address.message}</span>}
            </div>
            <div className={styles.inputGroup}>
                <p>Email</p>
                <input 
                    type="email"
                    placeholder="Email"
                    {...register("email", { required: "Email is required"})}
                />
            </div>
            <div className={styles.buttons} onClick={goToCart}>
                <div className={styles.button}>
                    <Button>
                        <i class="fa-solid fa-arrow-left"></i>
                        Go back to cart
                    </Button>
                </div>
                <div className={styles.button}>
                    <Button className={styles.button} onClick={makeABooking} type="submit">
                        Book Your tour
                        <i class="fa-solid fa-arrow-right"></i>
                    </Button>
                </div>
            </div>
        </form>
    );
}

export default OrderForm;