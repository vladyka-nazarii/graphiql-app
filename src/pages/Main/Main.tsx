import { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { useQuery, gql } from '@apollo/client';

import { Schema } from '../../components/Schema/Schema';
import { BasicTabs } from '../../components/Tabs/Tabs';

import styles from './Main.module.scss';

export const Main = () => {
  const queryExample = `query ExampleQuery {
    company {
      ceo
    }
  }
  `;
  const [query, setQuery] = useState(queryExample);
  const [dataValue, setDataValue] = useState(query);
  const { loading, error, data } = useQuery(gql`
    ${dataValue}
  `);
  const onClick = () => {
    setDataValue(query);
  };

  return (
    <div className={styles.main}>
      <div className={styles.query}>
        <CodeMirror
          value={queryExample}
          height="100%"
          width="50vw"
          editable={true}
          theme="light"
          onChange={(value: string) => setQuery(value)}
        />
        <BasicTabs />
      </div>
      <CodeMirror
        value={
          loading
            ? 'Loading...'
            : error
            ? `Error : ${error.message}`
            : JSON.stringify(data, null, '\t')
        }
        height="calc(100vh - 64px - 64px)"
        width="50vw"
        editable={false}
        theme="light"
      />
      <Schema />
      <img
        className={styles.play}
        src={loading ? './stop-button.svg' : './play-button.svg'}
        alt="play"
        onClick={onClick}
      />
    </div>
  );
};
