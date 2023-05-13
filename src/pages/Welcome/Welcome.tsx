import styles from './Welcome.module.scss';

export const Welcome = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.generalInfo}>
        <h2 className={styles.generalTitle}>About the project</h2>
        <p>
          GraphiQL is a web-based playground/IDE for making GraphQL requests. It offers a
          user-friendly interface with features like syntax highlighting, auto-completion, and
          real-time response viewing. It allows developers to explore GraphQL APIs, debug queries,
          and collaborate on query development.
        </p>
      </div>
      <div className={styles.generalInfo}>
        <h3 className={styles.generalTitle}>RS-School</h3>
        <p>
          The Rolling Scopes is an independent international developer community founded in 2013.
          Everyone can study at RS School, regardless of age, professional employment and place of
          residence. Volunteer developers from various companies and countries participate in the
          training. These courses combine online and offline learning. School mentors teach students
          in their free time and for free!
        </p>
        <p>
          Students of the RS School from the 2022Q3, which has passed RSSchool Stage #2 as well as
          new students with practical experience and knowledge of:
        </p>
        <ul className={styles.experienceList}>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>
            Git, GitHub (clone, add, commit, push, pull, merge, rebase, working with Pull Request)
          </li>
          <li>NPM, Webpack</li>
          <li>CSS3 / HTML5</li>
          <li>Chrome DevTools, Figma</li>
          <li>Understanding of the REST</li>
        </ul>
      </div>
      <div className={styles.teamInfo}>
        <div className={styles.member}>
          <img src="./members/Nazarii.jpg" alt="member" className={styles.memberImg} />
          <h4 className={styles.memberTitle}>Nazarii Vladyka</h4>
          <div className={styles.memberSubtitle}>
            <p>Team leader, Frontend developer</p>
            <a href="https://github.com/vladyka-nazarii">
              <img src="./github-black.svg" alt="github" className={styles.githubImg} />
            </a>
          </div>
          <p>
            Served as the team leader and was responsible for the basic layout of the project. As
            the leader, provided guidance and direction to the team while taking charge of designing
            and structuring the user interface.
          </p>
        </div>
        <div className={styles.member}>
          <img src="./members/Yevhenii.jpg" alt="member" className={styles.memberImg} />
          <h4 className={styles.memberTitle}>Yevhenii Burkovskyi</h4>
          <div className={styles.memberSubtitle}>
            <p>Frontend developer</p>
            <a href="https://github.com/EugeneBurkovskiy">
              <img src="./github-black.svg" alt="github" className={styles.githubImg} />
            </a>
          </div>
          <p>
            Specialized in Firebase logic and authentication for the project. Was responsible for
            implementing Firebase functionalities, such as user authentication and data storage, to
            enhance the project`s security.
          </p>
        </div>
        <div className={styles.member}>
          <img src="./members/Maksym.jpg" alt="member" className={styles.memberImg} />
          <h4 className={styles.memberTitle}>Maksym Kuzmych</h4>
          <div className={styles.memberSubtitle}>
            <p>Frontend developer</p>
            <a href="https://github.com/MaksymKuzmych">
              <img src="./github-black.svg" alt="github" className={styles.githubImg} />
            </a>
          </div>
          <p>
            Was responsible for creating the welcome page of the project. Designed and implemented
            the initial page that greets users and sets the tone for the application.
          </p>
        </div>
      </div>
    </div>
  );
};
