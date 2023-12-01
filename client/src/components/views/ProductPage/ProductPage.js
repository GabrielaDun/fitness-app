import styles from './ProdcutPage.module.scss'

const ProdcutPage = () => {

    const slideImage = `${process.env.PUBLIC_URL}/photos/product.webp`

    return (
        <div className={styles.root}>
            <div className={styles.main}>
                <div className={styles.slider} styles={{backgroundImage: `url(${slideImage})`}}>
                    <h2>Find your perfect tour!</h2>
                </div>

            </div>
            <div className={styles.filters}>
            </div>

        </div>
    )
    
}

export default ProdcutPage;