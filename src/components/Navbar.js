import React from 'react'
import logo from '../assets/logo.jpeg'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className='logo'>
                <img src={logo} alt="logo" width={300} height={100}/>
            </div>
            <div>
                <Link className={styles.links} to="#">Home</Link>
                <Link className={styles.links} to="#">About Us</Link>
                <Link className={styles.links} to="#">Features</Link>
                <Link className={styles.links} to="#">Login</Link>
                <Link className={`${styles.links} ${styles.btn}`} to="#">Create Account</Link>
                <Link className={styles.links} to="#">Help</Link>
                <Link className={styles.links} to="#">Refer and Earn</Link>
            </div>
        </div>
    )
}

export default Navbar