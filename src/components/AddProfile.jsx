import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './AddProfile.module.css';

const AddProfile = ({ onAddProfile }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddProfile({ name, description: title, image });
        setName('');
        setEmail('');
        setTitle('');
        setImage('');
        setDescription('');
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit} className={styles['add-profile-form']}>
            <input className={styles['add-profile-input']}
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input className={styles['add-profile-input']}
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input className={styles['add-profile-input']}
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input className={styles['add-profile-input']}
                type="text"
                placeholder="Image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />
            <textarea className={styles['add-profile-input']}
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit" className={styles['add-profile-button']}>Add Profile</button>
        </form>
    );
};

export default AddProfile;