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
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { groupColor } from 'src/types/Group';
import KeywordCard from 'src/components/card/KeywordCard';
import { CardsActionProps } from '../types/CardActionProps';
// ----------------------------------------------------------------------

export default function PanelQualities({
  handleAddKeyword,
  handleRemoveKeyword,
  findKeywordOccurences,
}: CardsActionProps) {
  const { copy } = useCopyToClipboard();
  const { enqueueSnackbar } = useSnackbar();

  const [tabValue, setTabValue] = useState('adjectives');
  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };

  const group = 'qualities';
  const tabColour = groupColor.get(group);

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
      <TabList
        TabIndicatorProps={{
          style: {
            backgroundColor: tabColour,
          },
        }}
        onChange={handleTabChange}
      >
        <Tab label="Adjectives" value="adjectives" />
        <Tab label="Colour" value="colour" />
        <Tab label="Feelings" value="feelings" />
        <Tab label="Texture" value="texture" />
        <Tab label="Motion" value="motion" />
        <Tab label="Lighting" value="lighting" />
      </TabList>
      <Tab label="Films" value="films" />
      <TabPanel value="adjectives">
        <KeywordCard
          reference={{
            img: '/assets/images/cards/op.png',
            title: 'Scientist',
            group,
            id: 'image-ratio_001',
          }}
          isStared
          occurrences={findKeywordOccurences('image-ratio_001').length}
          handleAdd={handleAddKeyword}
          isPinned
        />
      </TabPanel>
    </TabContext>
  );
}
