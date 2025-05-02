import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getItemById } from '../../services/getItemById';
import styles from './Details.module.css';
import { useTranslation } from 'react-i18next';

const Details = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    getItemById(id)
      .then(setItem)
      .catch(() => setError(true));
  }, [id]);

  if (error) return <p>{t('not_found')}</p>;
  if (!item) return <p>Loading...</p>;

  const toggleFavorite = () => {
    let favs = JSON.parse(localStorage.getItem('favorites')) || [];
    if (favs.includes(item.id)) {
      favs = favs.filter(fav => fav !== item.id);
    } else {
      favs.push(item.id);
    }
    localStorage.setItem('favorites', JSON.stringify(favs));
  };

  const isFavorite = JSON.parse(localStorage.getItem('favorites') || '[]').includes(item.id);

  return (
    <div className={styles.details}>
      <h2>{item.name}</h2>
      <img src={item.coverImage} alt={`${item.name} cover`} className={styles.coverImage} />
      <p>{item.description}</p>
      <p><strong>Género:</strong> {item.genre}</p>
      <p><strong>Editor:</strong> {item.publisher}</p>
      <p><strong>Lanzamiento:</strong> {item.releaseDate}</p>
      <p><strong>Requisitos:</strong> {item.requirements}</p>

      {item.screenshots && item.screenshots.length > 0 && (
        <div className={styles.screenshots}>
          <h3>Screenshots</h3>
          <div className={styles.screenshotGrid}>
            {item.screenshots.map((url, index) => (
              <img key={index} src={url} alt={`Screenshot ${index + 1}`} className={styles.screenshot} />
            ))}
          </div>
        </div>
      )}

      <button onClick={toggleFavorite}>
        {isFavorite ? t('remove_from_favorites') : t('add_to_favorites')}
      </button>
    </div>
  );
};

export default Details;