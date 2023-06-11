import { Dispatch, SetStateAction, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CodeMirror from '@uiw/react-codemirror';
import { useTranslation } from 'react-i18next';
import { IconButton, useTheme } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import { TabPanel } from './TabPanel';
import { variablesValidation } from '../../apollo/variablesValidation';
import { Message } from '../../types/enums';
import { headersValidation } from '../../apollo/headersValidation';

interface BasicTabsProps {
  handleVariables: (value: object) => void;
  handleHeaders: (value: object) => void;
  handleVariablesValidation: (value: string) => void;
  handleHeadersValidation: (value: string) => void;
  hideTabs: boolean;
  handleHide: Dispatch<SetStateAction<boolean>>;
}

export const BasicTabs = ({
  handleVariables,
  handleHeaders,
  handleVariablesValidation,
  handleHeadersValidation,
  hideTabs,
  handleHide,
}: BasicTabsProps) => {
  const [value, setValue] = useState(0);
  const [variablesValue, setVariablesValue] = useState('{}');
  const [headersValue, setHeadersValue] = useState('{}');
  const { t } = useTranslation();
  const theme = useTheme();

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
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label={t('QUERY VARIABLES')} {...a11yProps(0)} />
          <Tab label={t('HTTP HEADERS')} {...a11yProps(1)} />
        </Tabs>
        <IconButton onClick={() => handleHide((prevValue) => !prevValue)}>
          {hideTabs ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </Box>
      <TabPanel value={value} index={0}>
        <CodeMirror
          value={variablesValue}
          height={hideTabs ? '0' : 'calc(25vh - 48px)'}
          width="100%"
          editable={true}
          theme={theme.palette.mode}
          onChange={handleVariablesValue}
          onBlur={handleBlurVariables}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CodeMirror
          value={headersValue}
          height={hideTabs ? '0' : 'calc(25vh - 48px)'}
          width="100%"
          editable={true}
          theme={theme.palette.mode}
          onChange={handleHeadersValue}
          onBlur={handleBlurHeaders}
        />
      </TabPanel>
    </Box>
  );
};
