import React from 'react'
import styles from './FeatureSet.module.css'

const FeatureSet = () => {
    return (
        <>
            <div className={styles.container}>
                <h1>A powerful featureset</h1>
                <p>Designed by industry for industry, AgriChain is the world's most comprehensive agricultural supply chain software solution.</p>
                <div className={styles.features}>
                    <div className={styles.child}>
                        <div className={styles.box}>
                            <img src="https://sp-ao.shortpixel.ai/client/q_lossless,ret_img/https://agrichain.com/wp-content/uploads/2018/08/group-36@2x.png" alt="" />
                            <span>Stock management</span>
                        </div>
                        <div className={styles.box}>
                            <img src="https://sp-ao.shortpixel.ai/client/q_lossless,ret_img/https://agrichain.com/wp-content/uploads/2018/08/group-71@2x.png" alt="" />
                            <span>Contracting</span>
                        </div>
                        <div className={styles.box}>
                            <img src="https://sp-ao.shortpixel.ai/client/q_lossless,ret_img/https://agrichain.com/wp-content/uploads/2018/08/group-26@2x.png" alt="" />
                            <span>Supply chain tracking</span>
                        </div>
                        <div className={styles.box}>
                            <img src="https://sp-ao.shortpixel.ai/client/q_lossless,ret_img/https://agrichain.com/wp-content/uploads/2018/08/group-42@2x.png" alt="" />
                            <span>Logistics automation</span>
                        </div>
                    </div>
                    <div className={styles.child}>
                        <div className={styles.box}>
                            <img src="https://sp-ao.shortpixel.ai/client/q_lossless,ret_img/https://agrichain.com/wp-content/uploads/2021/12/freight-scheduler-icon.png" alt="" />
                            <span>Freight Scheduling</span>
                        </div>
                        <div className={styles.box}>
                            <img src="https://sp-ao.shortpixel.ai/client/q_lossless,ret_img/https://agrichain.com/wp-content/uploads/2020/02/icon.png" alt="" />
                            <span>Truck Receivals</span>
                        </div>
                        <div className={styles.box}>
                            <img src="https://sp-ao.shortpixel.ai/client/q_lossless,ret_img/https://agrichain.com/wp-content/uploads/2018/08/group-54@2x.png" alt="" />
                            <span>Traceability</span>
                        </div>
                        <div className={styles.box}>
                            <img src="https://sp-ao.shortpixel.ai/client/q_lossless,ret_img/https://agrichain.com/wp-content/uploads/2021/12/timeslotting-icon.png" alt="" />
                            <span>Timeslotting</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeatureSet