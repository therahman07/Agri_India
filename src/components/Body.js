import React from 'react'
import image from '../assets/body.jpg'
import image1 from '../assets/cargo.jpeg'
import styles from './Body.module.css'
import FeatureSet from './FeatureSet'
import Reviews from './Reviews'

const Body = () => {
    return (
        <>
            <div>
                <img src={image} alt="Crops" className={styles.img}/>
            </div>
            <div className={styles.body}>
                <div className={styles.child}>
                    <h1 className={styles.heading}>What is Agri India?</h1>
                    <p className={styles.para}>
                    AgriIndia is a software platform that brings together all stakeholders in the agricultural supply chain, allowing them make better-informed decisions, eliminate unnecessary paperwork and dockets, reduce supply chain inefficiency and risk, open markets and increase their bottom line, all on one easy-to-use platform.
                    </p>
                    <button className={styles.btn}>Learn more</button>
                </div>
                <div>
                    <img src={image1} alt="Cargo" className={styles.img1}/>
                </div>
            </div>
            <FeatureSet />
            <Reviews />
        </>
    )
}

export default Body