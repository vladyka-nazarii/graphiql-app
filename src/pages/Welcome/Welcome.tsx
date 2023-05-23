import { useTranslation } from 'react-i18next';

import styles from './Welcome.module.scss';
import { Avatar, Link, List, ListItem, Typography } from '@mui/material';
import { GitHub } from '@mui/icons-material';

export const Welcome = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <div className={styles.generalInfo}>
        <Typography variant="h3">{t('About the project')}</Typography>
        <Typography>
          {t(
            'GraphiQL is a web-based playground for making GraphQL requests. It offers a user-friendly interface with features like syntax highlighting, auto-completion, and real-time response viewing. It allows developers to explore GraphQL APIs, debug queries, and collaborate on query development.',
          )}
        </Typography>
      </div>
      <div className={styles.generalInfo}>
        <Typography variant="h3">RS School</Typography>
        <Typography>
          {t(
            'The Rolling Scopes is an independent international developer community founded in 2013. Everyone can study at RS School, regardless of age, professional employment and place of residence. Volunteer developers from various companies and countries participate in the training. These courses combine online and offline learning. School mentors teach students in their free time and for free!',
          )}
        </Typography>
        <Typography>
          {t(
            'Students of the RS School from the 2022Q3, which has passed RS School Stage #2 as well as new students with practical experience and knowledge of',
          )}
          :
        </Typography>
        <List>
          <ListItem>JavaScript</ListItem>
          <ListItem>TypeScript</ListItem>
          <ListItem>
            Git, GitHub (clone, add, commit, push, pull, merge, rebase, {t('working with')} Pull
            Request)
          </ListItem>
          <ListItem>NPM, Webpack</ListItem>
          <ListItem>CSS3 / HTML5</ListItem>
          <ListItem>Chrome DevTools, Figma</ListItem>
          <ListItem>{t('Understanding of the')} REST</ListItem>
        </List>
      </div>
      <div className={styles.teamInfo}>
        <div className={styles.member}>
          <Avatar
            style={{ width: '300px', height: '300px' }}
            src="./members/Nazarii.jpg"
            alt="Nazarii Vladyka"
          ></Avatar>
          <Typography variant="h4">{t('Nazarii Vladyka')}</Typography>
          <div className={styles.memberSubtitle}>
            <Typography>
              {t('Team leader')}, {t('Frontend developer')}
            </Typography>
            <Link href="https://github.com/vladyka-nazarii">
              <GitHub color="action" fontSize="medium" />
            </Link>
          </div>
          <Typography>
            {t(
              'Served as the team leader and was responsible for the basic layout of the project. As the leader, provided guidance and direction to the team while taking charge of designing and structuring the user interface.',
            )}
          </Typography>
        </div>
        <div className={styles.member}>
          <Avatar
            style={{ width: '300px', height: '300px' }}
            src="./members/Yevhenii.jpg"
            alt="Yevhenii Burkovskyi"
          ></Avatar>
          <Typography variant="h4">{t('Yevhenii Burkovskyi')}</Typography>
          <div className={styles.memberSubtitle}>
            <Typography>{t('Frontend developer')}</Typography>
            <Link href="https://github.com/EugeneBurkovskiy">
              <GitHub color="action" fontSize="medium" />
            </Link>
          </div>
          <Typography>
            {t(
              'Specialized in Firebase logic and authentication for the project. Was responsible for implementing Firebase functionalities, such as user authentication and data storage, to enhance the project`s security.',
            )}
          </Typography>
        </div>
        <div className={styles.member}>
          <Avatar
            style={{ width: '300px', height: '300px' }}
            src="./members/Maksym.jpg"
            alt="Maksym Kuzmych"
          ></Avatar>
          <Typography variant="h4">{t('Maksym Kuzmych')}</Typography>
          <div className={styles.memberSubtitle}>
            <Typography>{t('Frontend developer')}</Typography>
            <Link href="https://github.com/MaksymKuzmych">
              <GitHub color="action" fontSize="medium" />
            </Link>
          </div>
          <Typography>
            {t(
              'Was responsible for creating the welcome page of the project. Designed and implemented the initial page that greets users and sets the tone for the application.',
            )}
          </Typography>
        </div>
      </div>
    </div>
  );
};
