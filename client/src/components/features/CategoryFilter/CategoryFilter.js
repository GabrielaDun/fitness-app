import { useDispatch, useSelector } from 'react-redux'
import Button from '../../common/Button/Button'
import styles from './CategoryFilter.module.scss'
import { getAllCategories, updateFilter } from '../../../redux/categoryRedux'
import React, { useState } from 'react';

const CategoryFilter = () => {

    const dispatch = useDispatch();
    const categories = useSelector(getAllCategories);
    const [activeCategory, setActiveCategory] = useState('general');

    const clickFilter = (catego) => {
        dispatch(updateFilter(catego))
        setActiveCategory(catego)
    }


    return (
        <div className={styles.root}>
            <div className={styles.categories}>
                <div className={styles.button} key='general'>
                    <Button 
                        onClick={() => clickFilter('general')} 
                        colorType={activeCategory === 'general' ? 'clickedTertiary' : 'tertiary'}>
                            General
                    </Button>
                </div>
                {categories.map(category => {
                    const categoryName = category.category;
                    return (
                    <div className={styles.button} key={category.id}>
                        <Button 
                            onClick={() => clickFilter(categoryName)} 
                            colorType={activeCategory === categoryName ? 'clickedTertiary' : 'tertiary' }>
                            {categoryName && categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
                        </Button>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CategoryFilter;