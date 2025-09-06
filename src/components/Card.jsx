//import  img from
import './Card.css'
const Card = ({name, description, image}) => {
    return(
        <>
        <div className="card">
            <img src={image} alt= "image"/>
            <h2> {name}</h2>
            <p>{description}</p>

        </div>
        </>
    );

};

export default Card;