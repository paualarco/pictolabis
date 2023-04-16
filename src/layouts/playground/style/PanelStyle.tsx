import { Helmet } from 'react-helmet-async';
// @mui
// components
import {
  Box,
  Card,
  Stack,
  Tooltip,
  TextField,
  IconButton,
  Typography,
  InputAdornment,
  Container,
  Tabs,
  Tab,
} from '@mui/material';
import { useState } from 'react';
import useCopyToClipboard from 'src/hooks/useCopyToClipboard';
import { useSnackbar } from 'src/components/snackbar';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import PanelGridThemes from './PanelGridThemes';
// ----------------------------------------------------------------------

export default function PanelStyle() {
  const { copy } = useCopyToClipboard();
  const { enqueueSnackbar } = useSnackbar();

  const [tabValue, setTabValue] = useState('adjectives');
  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };
  return (
    <TabContext
      value={tabValue}
      // onChange={handleChange}
      // variant="scrollable"
      // scrollButtons="auto"
      aria-label="scrollable auto tabs example"
      // TabIndicatorProps={{ sx: { display: 'none' } }}
      // sx={{
      //  '& .MuiTabs-flexContainer': {
      //    flexWrap: 'wrap',
      //  },
      // }}
    >
      <TabList onChange={handleTabChange}>
        <Tab label="Theme" value="theme" />
        <Tab label="Technique" value="technique" />
        <Tab label="Tone" value="tone" />
        <Tab label="Contextual Information" value="contextual information" />
      </TabList>
      <TabPanel value="theme">
        <PanelGridThemes />
      </TabPanel>
    </TabContext>
  );
}
