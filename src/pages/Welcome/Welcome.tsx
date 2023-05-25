import { useTranslation } from 'react-i18next';

import styles from './Welcome.module.scss';
import { Avatar, Link, Typography } from '@mui/material';
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
        <Typography sx={{ alignSelf: 'flex-start' }}>
          {t(
            'Students of the RS School from the 2022Q3, which has passed RS School Stage #2 as well as new students with practical experience and knowledge of',
          )}
          :
        </Typography>
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
          <Typography align="center">
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
          <Typography align="center">
            {t(
              'Firebase setup for user authentication. Development of forms, redirects and routes for registration and login. Development of documentation for the selected API. Parsing the scheme and implementing the ability to search for the required field.',
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
          <Typography align="center">
            {t(
              'Was responsible for creating the welcome page of the project. Designed and implemented the initial page that greets users and sets the tone for the application.',
            )}
          </Typography>
        </div>
      </div>
    </div>
  );
};
