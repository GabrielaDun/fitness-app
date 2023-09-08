import styles from './TourPage.module.scss'

const TourPage = () => {
    const slideImage = `${process.env.PUBLIC_URL}/photos/2.jpg`;
    
    return (
        <div className={styles.root}>
            <div className={styles.slider} style={{backgroundImage: `url(${slideImage})`}}>
                <h2>Peru On a Bike</h2>
            </div>
            <div className={styles.container}>
                <div className={styles.main}>
                    <div className={styles.title}>Peru On a Bike</div>
                    <div className={styles.description}> Imagine a journey where ancient history meets adrenaline-pumping adventure, where majestic landscapes stretch as far as the eye can see, and where every pedal stroke brings you closer to the heart of one of the most diverse countries on Earth. Welcome to the "Peru by Bike" tour - a thrilling two-week odyssey through the land of the Incas. The expedition starts in the cosmopolitan city of Lima, a blend of colonial charm and modern vibrancy. After a day of acclimatization and exploration, riders head south to Paracas, cruising alongside the sun-kissed Pacific coast, feeling the refreshing sea breeze amidst the backdrop of the sprawling desert. From sea level, the journey takes a challenging turn upwards. Cyclists wind their way to the Sacred Valley, passing through traditional villages where Quechua is still the dominant tongue and where time seems to have stood still. The rhythm of life here is dictated by the cycles of the land, and as riders, we become part of that rhythm. <br /><br />A highlight for many, the route to the mystical city of Machu Picchu, is nothing short of spectacular. Navigating ancient Inca trails, one can't help but feel a profound connection to the generations who have trod these paths before. The sight of Machu Picchu at sunrise, with its enigmatic stone structures illuminated in a golden hue, is an emotional and unforgettable reward for the physical exertion of the preceding days. <br /> <br />But the adventure doesn't stop there. The tour then dives deep into the Amazon basin. Transitioning from high-altitude cycling to jungle trails offers a stark contrast and a testament to the diverse topography of Peru. Experiencing the lush rainforest, with its cacophony of bird calls and the scent of a world teeming with life, is a revitalizing end to our epic journey. </div>
                    <div className={styles.icones}>
                    <div className={styles.title}>Price: $2900</div>
                    <div className={styles.downPayment}>Down Payment Only: $300</div>
                    <button className={styles.button}>Book it Now!</button>
    
                    </div>
                </div>

            </div>
        </div>
    );
}

export default TourPage;