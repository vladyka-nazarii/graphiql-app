import { useTranslation } from 'react-i18next';

import styles from './ExperienceList.module.scss';

export const ExperienceList = () => {
  const { t } = useTranslation();

  return (
    <ul className={styles.experienceList}>
      <li>JavaScript</li>
      <li>TypeScript</li>
      <li>
        Git, GitHub (clone, add, commit, push, pull, merge, rebase, {t('working with')} Pull
        Request)
      </li>
      <li>NPM, Webpack</li>
      <li>CSS3 / HTML5</li>
      <li>Chrome DevTools, Figma</li>
      <li>{t('Understanding of the')} REST</li>
    </ul>
  );
};
