import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CodeMirror from '@uiw/react-codemirror';

import { TabPanel } from './TabPanel';
import { variablesValidation } from '../../apollo/variablesValidation';
import { Message } from '../../types/enums';
import { headersValidation } from '../../apollo/headersValidation';

interface BasicTabsProps {
  handleVariables: (value: object) => void;
  handleHeaders: (value: object) => void;
  handleVariablesValidation: (value: string) => void;
  handleHeadersValidation: (value: string) => void;
}

export const BasicTabs = ({
  handleVariables,
  handleHeaders,
  handleVariablesValidation,
  handleHeadersValidation,
}: BasicTabsProps) => {
  const [value, setValue] = useState(0);
  const [variablesValue, setVariablesValue] = useState('{}');
  const [headersValue, setHeadersValue] = useState('{}');

  const handleVariablesValue = (value: string) => {
    setVariablesValue(value);
  };

  const handleHeadersValue = (value: string) => {
    setHeadersValue(value);
  };

  const handleBlurVariables = () => {
    const validate = variablesValidation(variablesValue);
    if (validate === Message.WrongVariablesFormat) {
      handleVariablesValidation(validate);
    } else {
      handleVariablesValidation('');
      handleVariables(validate);
    }
  };

  const handleBlurHeaders = () => {
    const validate = headersValidation(headersValue);
    if (validate === Message.WrongHeadersFormat) {
      handleHeadersValidation(validate);
    } else {
      handleHeadersValidation('');
      handleHeaders(validate);
    }
  };

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', height: '250px' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="QUERY VARIABLES" {...a11yProps(0)} />
          <Tab label="HTTP HEADERS" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <CodeMirror
          value={variablesValue}
          height="200px"
          width="100%"
          editable={true}
          theme="light"
          onChange={handleVariablesValue}
          onBlur={handleBlurVariables}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CodeMirror
          value={headersValue}
          height="200px"
          width="100%"
          editable={true}
          theme="light"
          onChange={handleHeadersValue}
          onBlur={handleBlurHeaders}
        />
      </TabPanel>
    </Box>
  );
};
