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
import PanelGridCards from 'src/components/card/GridKeywordCards';
import { emotion, motion } from 'src/assets/data/cards/qualities';
import { referenceToCard } from 'src/utils/cards';
import { CardsActionProps } from '../types/CardActionProps';

// ----------------------------------------------------------------------

export default function PanelQualities({
  handleAddKeyword,
  handleRemoveKeyword,
  findKeywordOccurences,
}: CardsActionProps) {
  const [tabValue, setTabValue] = useState('motion');
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
        <Tab label="Motion" value="motion" />
        <Tab label="Feel" value="feel" />
        <Tab label="Colour" value="colour" />
        <Tab label="Texture" value="texture" />
        <Tab label="Lighting" value="lighting" />
        <Tab label="Profession" value="profession" />
      </TabList>
      <Tab label="Films" value="films" />
      <TabPanel value="motion">
        <PanelGridCards
          cards={motion.map(referenceToCard)}
          handleAddKeyword={handleAddKeyword}
          handleRemoveKeyword={handleRemoveKeyword}
          findKeywordOccurences={findKeywordOccurences}
        />
      </TabPanel>
      <TabPanel value="feel">
        <PanelGridCards
          cards={emotion.map(referenceToCard)}
          handleAddKeyword={handleAddKeyword}
          handleRemoveKeyword={handleRemoveKeyword}
          findKeywordOccurences={findKeywordOccurences}
        />
      </TabPanel>
    </TabContext>
  );
}
