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
import { TabContext, TabList } from '@mui/lab';
// ----------------------------------------------------------------------

export default function PanelView() {
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
        <Tab label="Typography" value="typography" />
      </TabList>
    </TabContext>
  );
}
