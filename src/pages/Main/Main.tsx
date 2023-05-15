import { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';

import { Schema } from '../../components/Schema/Schema';
import { BasicTabs } from '../../components/Tabs/Tabs';

import styles from './Main.module.scss';
import { useResponse } from '../../hooks/useResponse';
import { QUERY_EXAMPLE } from '../../apollo/queryExample';

export const Main = () => {
  const [query, setQuery] = useState(QUERY_EXAMPLE);
  const [dataValue, setDataValue] = useState(query);
  const { loading, data } = useResponse(dataValue);

  const onClick = () => {
    setDataValue(query);
  };

  return (
    <div className={styles.main}>
      <div className={styles.query}>
        <CodeMirror
          value={QUERY_EXAMPLE}
          height="100%"
          width="50vw"
          editable={true}
          theme="light"
          onChange={(value: string) => setQuery(value)}
        />
        <BasicTabs />
      </div>
      <CodeMirror
        value={data}
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
