import CodeMirror from '@uiw/react-codemirror';

import { Schema } from '../../components/Schema/Schema';
import { BasicTabs } from '../../components/Tabs/Tabs';

import styles from './Main.module.scss';

export const Main = () => (
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
  </div>
);
