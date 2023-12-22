import Button from '../../common/Button/Button'
import styles from './CategoryFilter.module.scss'

const CategoryFilter = () => {
    return (
        <div className={styles.root}>
                        <div className={styles.categories}>
                <div className={styles.subCategories}>
                    <div className={styles.button}>
                        <Button colorType='tertiary'>General</Button>
                    </div>
                </div>
                <div className={styles.subCategories}>
                    <div className={styles.button}>
                        <Button colorType='tertiary'>Weekend</Button>
                    </div>
                    <div className={styles.button}>
                        <Button colorType='tertiary'>Sightseeing</Button>
                    </div>
                </div>
                <div className={styles.subCategories}>
                    <div className={styles.button}>
                        <Button colorType='tertiary'>Cycling</Button>
                    </div>
                    <div className={styles.button}>
                        <Button colorType='tertiary'>Hiking</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryFilter;