import { FocusEventHandler, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { useTranslation } from 'react-i18next';

import { Schema } from '../../components/Schema/Schema';
import { BasicTabs } from '../../components/Tabs/Tabs';
import { useResponse } from '../../hooks/useResponse';
import { QUERY_EXAMPLE } from '../../apollo/queryExample';
import { queryValidation } from '../../apollo/queryValidation';
import { RequestButton } from '../../components/UI/RequestButton/RequestButton';
import { useAppSelector } from '../../hooks/redux-hooks';
import { Message } from '../../types/enums';

import styles from './Main.module.scss';

export const Main = () => {
  const [validation, setValidation] = useState(true);
  const { setQuery, loadData, loading, data } = useResponse();
  const { t } = useTranslation();
  const { darkTheme } = useAppSelector((state) => state.theme);

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
      <div>
        <CodeMirror
          value={QUERY_EXAMPLE}
          height="calc(75vh - 64px - 61.5px)"
          width="calc(50vw - 16px)"
          editable={true}
          theme={darkTheme ? 'dark' : 'light'}
          onBlur={onBlur}
        />
        <BasicTabs />
      </div>
      <CodeMirror
        value={validation ? data : t(Message.WrongFormat) || ''}
        height="calc(100vh - 64px - 61.5px)"
        width="calc(50vw + 16px)"
        editable={false}
        theme={darkTheme ? 'dark' : 'light'}
      />
      <Schema />
      <RequestButton onClick={onClick} loading={loading} />
    </div>
  );
};
