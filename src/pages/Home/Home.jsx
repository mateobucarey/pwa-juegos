import { useEffect, useState } from 'react';
import { getAllItems } from '../../services/getAllItems';
import Card from '../../components/Card/Card';
import styles from './Home.module.css';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');
  const { t } = useTranslation();

  useEffect(() => {
    getAllItems().then(setItems);
  }, []);

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <input
        placeholder={t('search_placeholder')}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className={styles.grid}>
        {filteredItems.length ? (
          filteredItems.map(item => <Card key={item.id} item={item} />)
        ) : (
          <p>{t('no_results')}</p>
        )}
      </div>
    </div>
  );
};

export default Home;
