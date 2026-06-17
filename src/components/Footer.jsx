// create a footer component with a copyright text and css module


import styles from '../css/Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <p>&copy; {new Date().getFullYear()} E-commerce. All rights reserved.</p>
        </footer>
    )
}
export default Footer