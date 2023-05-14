import { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';

import { Schema } from '../../components/Schema/Schema';
import { BasicTabs } from '../../components/Tabs/Tabs';

import styles from './Main.module.scss';

export const Main = () => {
  const [request, setRequest] = useState(false);

  return (
    <div className={styles.main}>
      <div className={styles.query}>
        <CodeMirror
          value="console.log('hello world!');"
          height="100%"
          width="100%"
          editable={true}
          theme="light"
        />
        <BasicTabs />
      </div>
      <CodeMirror
        value="console.log('hello world!');"
        height="100%"
        width="100%"
        editable={false}
        theme="light"
      />
      <Schema />
      <img
        className={styles.play}
        src={request ? './stop-button.svg' : './play-button.svg'}
        alt="play"
        onClick={() => {
          setRequest((prev) => !prev);
          setTimeout(() => {
            setRequest((prev) => !prev);
          }, 1000);
        }}
      />
    </div>
  );
};
