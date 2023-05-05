import styles from './Footer.module.css';

export const Footer = () => (
  <footer className={styles.footer}>
    <a href="https://github.com/vladyka-nazarii">
      <img className={styles.img} src="./github.svg" alt="GitHub"></img>
    </a>
    <p className={styles.year}>2023</p>
    <a href="https://rs.school/react">
      <img className={styles.img} src="./rs-school.svg" alt="RS-School"></img>
    </a>
  </footer>
);
