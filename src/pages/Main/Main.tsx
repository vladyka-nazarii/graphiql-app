import { FocusEventHandler, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';

import { Schema } from '../../components/Schema/Schema';
import { BasicTabs } from '../../components/Tabs/Tabs';
import { useResponse } from '../../hooks/useResponse';
import { QUERY_EXAMPLE } from '../../apollo/queryExample';
import { queryValidation } from '../../apollo/queryValidation';
import { Message } from '../../types/enums';
import { checkValidationMessage } from '../../utils/checkValidationMessage';

import styles from './Main.module.scss';

export const Main = () => {
  const [validationQueryMessage, setValidationQueryMessage] = useState('');
  const [validationVariablesMessage, setValidationVariablesMessage] = useState('');
  const [validationHeadersMessage, setValidationHeadersMessage] = useState('');
  const { setQuery, setVariables, setHeaders, loadData, loading, data } = useResponse();

  const handleVariablesValidation = (value: string) => {
    setValidationVariablesMessage(value);
  };

  const handleHeadersValidation = (value: string) => {
    setValidationHeadersMessage(value);
  };

  const onBlur: FocusEventHandler<HTMLDivElement> = (event) => {
    const content = event.target.innerText || '';
    const validate = queryValidation(content);

    if (validate === Message.WrongQueryFormat) {
      setValidationQueryMessage(validate);
    } else {
      setValidationQueryMessage('');
      setQuery(content);
    }
  };

  const handleVariables = (value: object) => {
    setVariables(value);
  };

  const handleHeaders = (value: object) => {
    setHeaders(value);
  };

  const validationMessage = checkValidationMessage(
    validationQueryMessage,
    validationVariablesMessage,
    validationHeadersMessage,
  );

  const onClick = () => {
    if (!validationMessage) {
      loadData();
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.query}>
        <CodeMirror
          value={QUERY_EXAMPLE}
          height="100%"
          width="calc(50vw - 16px)"
          editable={true}
          theme="light"
          onBlur={onBlur}
        />
        <BasicTabs
          handleVariables={handleVariables}
          handleHeaders={handleHeaders}
          handleVariablesValidation={handleVariablesValidation}
          handleHeadersValidation={handleHeadersValidation}
        />
      </div>
      <CodeMirror
        value={!validationMessage ? data : validationMessage}
        height="calc(100vh - 64px - 64px)"
        width="calc(50vw + 16px)"
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
