import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    const selectedLang = e.target.value;
    i18n.changeLanguage(selectedLang);
    localStorage.setItem('language', selectedLang);
  };

  return (
    <header className={styles.header}>
      <nav>
        <Link to="/">{t('home')}</Link>
        <Link to="/favorites">{t('favorites')}</Link>
      </nav>
      <div>
        <label htmlFor="lang-select">🌐</label>
        <select id="lang-select" onChange={handleLanguageChange} value={i18n.language}>
          <option value="es">Español</option>
          <option value="en">English</option>
        </select>
      </div>
    </header>
  );
}

export default Header;
