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
import { Group, GroupColor, groupColor } from 'src/types/Group';
import KeywordCard from 'src/components/card/KeywordCard';
import PanelGridCards from 'src/components/card/GridKeywordCards';
import { flowers } from 'src/assets/data/cards/subject';
import { referenceToCard } from 'src/utils/cards';
import { CardsActionProps } from '../types/CardActionProps';

// ----------------------------------------------------------------------

export default function PanelSubject({
  handleAddKeyword,
  handleRemoveKeyword,
  findKeywordOccurences,
}: CardsActionProps) {
  const [tabValue, setTabValue] = useState('nature');
  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };
  const group = 'subject';
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
        <Tab label="Nature" value="nature" />
        <Tab label="People" value="people" />
        <Tab label="Animals" value="animals" />
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
      <TabPanel value="nature">
        <PanelGridCards
          cards={flowers.map(referenceToCard)}
          handleAddKeyword={handleAddKeyword}
          handleRemoveKeyword={handleRemoveKeyword}
          findKeywordOccurences={findKeywordOccurences}
        />
      </TabPanel>
      <TabPanel value="people">
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
          handleRemove={handleRemoveKeyword}
          isPinned
        />
      </TabPanel>
    </TabContext>
  );
}
