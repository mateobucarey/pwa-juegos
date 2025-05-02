import { Link } from 'react-router-dom';
import styles from './Card.module.css';

const Card = ({ item }) => {
  return (
    <div className={styles.card}>
      <img src={item.coverImage} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <Link to={`/details/${item.id}`}>Ver Más</Link>
    </div>
  );
};

export default Card;
