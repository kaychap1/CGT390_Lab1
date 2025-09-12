import styles from './Header.module.css'
const header = () => {
    return(
        <>
        <div className={styles.header}>
            <img src="src\images\logo.jpg" alt ="logo" width = "100ems"/>
            <h2> Company Name</h2>

        </div>
        </>
    );

};

export default header;