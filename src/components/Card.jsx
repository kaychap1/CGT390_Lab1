
import { Link } from 'react-router-dom';
import styles from './Card.module.css';

const Card = ({ id, name, description, image }) => {
    const profileLink = id ? `/fetched-profiles/profile/${id}` : null;

    return (
        <div className={styles.card}>
            {profileLink ? (
                <Link to={profileLink}>
                    <img src={image} alt={name} />
                    <h2>{name}</h2>
                </Link>
            ) : (
                <img src={image} alt={name} />
            )}
            {!profileLink && <h2>{name}</h2>}
            <p>{description}</p>
        </div>
    );
};

export default Card;
