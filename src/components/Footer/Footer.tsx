import { GitHub } from '@mui/icons-material';
import styles from './Footer.module.css';
import { RSSchool } from '../UI/RSSchool/RSSchool';
import { Link, Stack, Typography } from '@mui/material';

export const Footer = () => (
  <footer className={styles.footer}>
    <Link href="https://github.com/vladyka-nazarii">
      <GitHub htmlColor="#fff" fontSize="large" />
    </Link>
    <Typography color="white" variant="h5">
      2023
    </Typography>
    <Link href="https://rs.school/react">
      <RSSchool />
    </Link>
  </footer>
);
