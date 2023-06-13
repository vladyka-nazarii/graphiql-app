import { GitHub } from '@mui/icons-material';
import { Container, Link, Typography } from '@mui/material';

import styles from './Footer.module.scss';

export const Footer = () => (
  <footer className={styles.footer}>
    <Container>
      <div className={styles.footerContainer}>
        <Link href="https://github.com/vladyka-nazarii/graphiql-app/">
          <div className={styles.imgContainer}>
            <GitHub htmlColor="#fff" fontSize="large" />
          </div>
        </Link>
        <Typography color="white" variant="h5">
          2023
        </Typography>
        <Link href="https://rs.school/react">
          <div className={styles.imgContainer}>
            <img className={styles.img} src="./RSLogo.svg" alt="RS-School" />
          </div>
        </Link>
      </div>
    </Container>
  </footer>
);
