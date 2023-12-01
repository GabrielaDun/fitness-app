import React from 'react';
import styles from './About.module.scss';
import PageSlider from '../../common/PageSlider/PageSlider';

const About = () => {
    return (
        <div className={styles.root}>
            < PageSlider imageName={'about'} text='Our Story' />
            <div className={styles.storySection}>
                <div className={styles.text}>
                    <h2>NaturEscape: A Journey into Nature's Heart</h2>
                    <p>In the whispering breezes of distant lands and the serene echoes of uncharted wilderness, NaturEscape began its journey. This isn't just a company; it's a gateway to the world's most pristine and breathtaking natural locales. Founded by nature enthusiasts, Emily and Liam, NaturEscape emerged from their shared passion for exploring and preserving the untouched corners of our planet</p>
                    <p>Emily, an avid environmentalist, roamed the dense rainforests and vast deserts, her soul intertwined with the earth's natural rhythms. Liam, a wildlife photographer, captured the essence of raw beauty in his lens, from the majestic African savannas to the mysterious depths of the Amazon.</p>
                </div>
            </div>

            <div className={styles.storySection}>
                <div className={styles.text}>
                    <p>Their paths intertwined in the rugged beauty of the Patagonian landscape. Under the southern stars, they dreamt of connecting people to the earth's wonders. NaturEscape was born from this dream – a testament to their love for nature and an invitation for like-minded adventurers to explore the world responsibly.</p>
                    <p>NaturEscape crafts journeys that transcend traditional travel. Each trip is an odyssey into the heart of nature, offering an intimate encounter with the world's most awe-inspiring destinations. From the serene fjords of Norway to the vibrant coral reefs of the Great Barrier Reef, every expedition is a step into a storybook of natural wonder.</p>
                </div>
                <img src={`${process.env.PUBLIC_URL}/photos/about/1.webp`} alt="nature" className={styles.storyImage} />
            </div>

            <div className={styles.storySection}>
                <div className={styles.text}>
                    <p>But it's more than just sightseeing. NaturEscape's ethos is rooted in sustainability and cultural respect. Each journey is a harmonious blend of adventure and education, leaving travelers with a deeper understanding of our planet and a stronger commitment to its preservation.</p>
                    <p>Join NaturEscape, and be part of a narrative that celebrates the planet in all its glory. Each step with us is a stride towards a more connected and conscious world, where every journey enriches the soul and nurtures the earth.</p>
            </div>
            </div>
        </div>
    );
}

export default About;