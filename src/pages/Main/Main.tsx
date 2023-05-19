import { useRef, useState } from 'react';
import CodeMirror, { ReactCodeMirrorRef } from '@uiw/react-codemirror';

import { Schema } from '../../components/Schema/Schema';
import { BasicTabs } from '../../components/Tabs/Tabs';
import { useResponse } from '../../hooks/useResponse';
import { QUERY_EXAMPLE } from '../../apollo/queryExample';

import styles from './Main.module.scss';

export const Main = () => {
  const [query, setQuery] = useState(QUERY_EXAMPLE);
  const { loadData, loading, data } = useResponse(query);
  const queryRef = useRef<ReactCodeMirrorRef>(null);

  const onClick = () => {
    setQuery(queryRef.current?.editor?.textContent?.replace(/.*›/g, '') || '');
    loadData();
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
          ref={queryRef}
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
