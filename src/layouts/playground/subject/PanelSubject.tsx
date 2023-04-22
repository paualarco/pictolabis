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
import Iconify from 'src/components/iconify';
import { useSnackbar } from 'src/components/snackbar';
import { TabContext, TabList } from '@mui/lab';
// ----------------------------------------------------------------------

export default function PanelSubject() {
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
        <Tab label="People" value="people" />
        <Tab label="Animals" value="animals" />
        <Tab label="Nature" value="nature" />
        <Tab label="Food" value="food" />
        <Tab label="Clothing" value="clothing" />
        <Tab label="Weather" value="weather" />
        <Tab label="Creatures" value="creatures" />
        <Tab label="Mythology" value="mythology" />
        <Tab label="Elements" value="elements" />
        <Tab label="Films" value="films" />
        <Tab label="Architecture" value="architecture" />
        <Tab label="Space" value="space" />
      </TabList>
    </TabContext>
  );
}
