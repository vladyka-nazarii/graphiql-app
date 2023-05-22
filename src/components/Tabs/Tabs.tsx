import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CodeMirror from '@uiw/react-codemirror';
import { useTranslation } from 'react-i18next';

import { TabPanel } from './TabPanel';
import { useAppSelector } from '../../hooks/redux-hooks';

export const BasicTabs = () => {
  const [value, setValue] = useState(0);
  const { t } = useTranslation();
  const { darkTheme } = useAppSelector((state) => state.theme);

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
    <Box sx={{ width: '100%', height: '25%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label={t('QUERY VARIABLES')} {...a11yProps(0)} />
          <Tab label={t('HTTP HEADERS')} {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <CodeMirror
          value="variable example"
          height="100%"
          width="100%"
          editable={true}
          theme={darkTheme ? 'dark' : 'light'}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CodeMirror
          value="header example"
          height="100%"
          width="100%"
          editable={true}
          theme={darkTheme ? 'dark' : 'light'}
        />
      </TabPanel>
    </Box>
  );
};
