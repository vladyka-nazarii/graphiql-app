import { FocusEventHandler, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';

import { Schema } from '../../components/Schema/Schema';
import { BasicTabs } from '../../components/Tabs/Tabs';
import { useResponse } from '../../hooks/useResponse';
import { QUERY_EXAMPLE } from '../../apollo/queryExample';
import { queryValidation } from '../../apollo/queryValidation';
import { Message } from '../../types/enums';

import styles from './Main.module.scss';

export const Main = () => {
  const [validation, setValidation] = useState(true);
  const { setQuery, loadData, loading, data } = useResponse();

  const onBlur: FocusEventHandler<HTMLDivElement> = (event) => {
    const content = event.target.innerText || '';
    const validate = queryValidation(content);

    if (validate === Message.WrongFormat) {
      setValidation(false);
    } else {
      setValidation(true);
      setQuery(content);
    }
  };

  const onClick = () => {
    validation && loadData();
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
          onBlur={onBlur}
        />
        <BasicTabs />
      </div>
      <CodeMirror
        value={validation ? data : Message.WrongFormat}
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
