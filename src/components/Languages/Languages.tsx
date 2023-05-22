import { MouseEventHandler, useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import { changeLanguage } from 'i18next';
import { useTranslation } from 'react-i18next';

import styles from './Languages.module.css';

export const Languages = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const {
    i18n: { language },
  } = useTranslation();

  const onClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLDivElement;
    changeLanguage(target.dataset.value);
  };

  return (
    <div>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <img className={styles.icon} src={`./${language}.png`} />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <div className={styles.container} data-value="en" onClick={onClick}>
            <img className={styles.icon} src="./en.png" />
            English
          </div>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <div className={styles.container} data-value="uk" onClick={onClick}>
            <img className={styles.icon} src="./uk.png" />
            Українська
          </div>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <div className={styles.container} data-value="ru" onClick={onClick}>
            <img className={styles.icon} src="./ru.png" />
            Русский
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
};
