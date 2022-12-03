import React from 'react'
import styles from './Review.module.css'
const Reviews = () => {
    return (
        <div className={styles.container}>
            <div>
                <h1>Testimonials</h1>
            </div>
            <div className={styles.review}>
                <div className={styles.child}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eaque hic ad sint assumenda error veritatis, nemo exercitationem? Vero, ratione? Placeat, esse debitis?
                    </p>
                </div>
                <div className={styles.child}>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam id doloribus quaerat totam, veniam modi obcaecati eligendi explicabo ut facere!
                    </p>
                </div>
                <div className={styles.child}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel quis fugit aspernatur commodi aliquid facere.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Reviews