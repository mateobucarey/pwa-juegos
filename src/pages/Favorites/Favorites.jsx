import { useEffect, useState } from 'react';
import { getItemById } from '../../services/getItemById';
import styles from './Favorites.module.css';
import Card from '../../components/Card/Card';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import i18n from '../../i18n'; // Importante: importar i18n para acceder a i18n.language

const Favorites = () => {
  const [items, setItems] = useState([]);
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const favIds = JSON.parse(localStorage.getItem('favorites')) || [];
    Promise.all(favIds.map(id => getItemById(id)))
      .then(setItems);
  }, [location, i18n.language]); // Se vuelve a ejecutar si cambia la ruta o el idioma

  return (
    <div className={styles.container}>
      <h2>{t('favorites')}</h2>
      {items.length ? (
        <div className={styles.grid}>
          {items.map(item => <Card key={item.id} item={item} />)}
        </div>
      ) : (
        <p>{t('no_results')}</p>
      )}
    </div>
  );
};

export default Favorites;
