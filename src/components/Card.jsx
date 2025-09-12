//import  img from
import styles from './Card.module.css'
const Card = ({name, description, image}) => {
    return(
        <>
        <div className={styles.card}>
            <img className={styles.image} src={image} alt= "image"/>
            <h2> {name}</h2>
            <p>{description}</p>

        </div>
        </>
    );

};

export default Card;