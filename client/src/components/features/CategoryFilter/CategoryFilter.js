import { useSelector } from 'react-redux'
import Button from '../../common/Button/Button'
import styles from './CategoryFilter.module.scss'
import { getAllCategories } from '../../../redux/categoryRedux'

const CategoryFilter = () => {
    const categories = useSelector(getAllCategories);
    console.log(categories);

    return (
        <div className={styles.root}>
            <div className={styles.categories}>
                <div className={styles.button}>
                    <Button colorType='tertiary'>General</Button>
                </div>
                {categories.map(category => (
                    <div className={styles.button}>
                        <Button colorType='tertiary'>{category.category.charAt(0).toUpperCase() + category.category.slice(1)}</Button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CategoryFilter;