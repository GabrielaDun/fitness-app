import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './OrderForm.module.scss';
import Button from '../../common/Button/Button';
import {  useNavigate } from 'react-router-dom';
import { API_URL } from '../../../config';

const OrderForm = ({totalDownPayment}) => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = (data) => {
        data.downPayment = totalDownPayment;
        console.log(data);

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        };

        fetch(`${API_URL}/orders`, options)
            .then(res => {
                if(res.status === 201) {
                    console.log('Success')
                    navigate('/thank-you');
                    window.scrollTo(0, 0);
                } else {
                    console.error('Error submitting order:', res.status)
                }
            })
            .catch(err => {
                console.error('Server Error', err)
            })

    };
    const goToCart = () => {
        navigate('/cart');
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
                {errors.email && <span className={styles.error}>{errors.email.message}</span>}
            </div>
            <div className={styles.buttons} >
                <div className={styles.button}>
                    <Button onClick={goToCart}>
                        <i className="fa-solid fa-arrow-left"></i>
                        Go back to cart
                    </Button>
                </div>
                <div className={styles.button}>
                    <Button className={styles.button} type="submit">
                        Book Your tour
                        <i className="fa-solid fa-arrow-right"></i>
                    </Button>
                </div>
            </div>
        </form>
    );
}

export default OrderForm;