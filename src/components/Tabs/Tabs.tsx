import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CodeMirror from '@uiw/react-codemirror';

import { TabPanel } from './TabPanel';

export const BasicTabs = () => {
  const [value, setValue] = useState(0);

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
          <Tab label="QUERY VARIABLES" {...a11yProps(0)} />
          <Tab label="HTTP HEADERS" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <CodeMirror
          value="variable example"
          height="100%"
          width="100%"
          editable={true}
          theme="light"
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CodeMirror
          value="header example"
          height="100%"
          width="100%"
          editable={true}
          theme="light"
        />
      </TabPanel>
    </Box>
  );
};
