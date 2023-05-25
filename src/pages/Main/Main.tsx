import { FocusEventHandler, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material';

import { Schema } from '../../components/Schema/Schema';
import { BasicTabs } from '../../components/Tabs/Tabs';
import { useResponse } from '../../hooks/useResponse';
import { QUERY_EXAMPLE } from '../../apollo/queryExample';
import { queryValidation } from '../../apollo/queryValidation';
import { RequestButton } from '../../components/UI/RequestButton/RequestButton';
import { Message } from '../../types/enums';
import { checkValidationMessage } from '../../utils/checkValidationMessage';

import styles from './Main.module.scss';

export const Main = () => {
  const [validationQueryMessage, setValidationQueryMessage] = useState('');
  const [validationVariablesMessage, setValidationVariablesMessage] = useState('');
  const [validationHeadersMessage, setValidationHeadersMessage] = useState('');
  const { setQuery, setVariables, setHeaders, loadData, loading, data } = useResponse();
  const { t } = useTranslation();
  const theme = useTheme();

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
    <div className={styles.main} style={{ backgroundColor: theme.palette.background.default }}>
      <div>
        <CodeMirror
          value={QUERY_EXAMPLE}
          height="calc(75vh - 64px - 61.5px)"
          width="calc(50vw - 16px)"
          editable={true}
          theme={theme.palette.mode}
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
        value={!validationMessage ? data : t(validationMessage) || ''}
        height="calc(100vh - 64px - 61.5px)"
        width="calc(calc(50vw + 16px) + 16px)"
        editable={false}
        theme={theme.palette.mode}
      />
      <Schema />
      <RequestButton onClick={onClick} loading={loading} />
    </div>
  );
};
