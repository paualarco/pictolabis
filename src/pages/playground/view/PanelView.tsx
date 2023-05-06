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
import { groupColor } from 'src/types/Group';
import KeywordCard from 'src/components/card/KeywordCard';
import { CardsActionProps } from '../types/CardActionProps';
// ----------------------------------------------------------------------

export default function PanelView({
  handleAddKeyword,
  handleRemoveKeyword,
  findKeywordOccurences,
}: CardsActionProps) {
  const { copy } = useCopyToClipboard();
  const { enqueueSnackbar } = useSnackbar();

  const [tabValue, setTabValue] = useState('composition');
  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };

  const group = 'view';
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
        <Tab label="Composition" value="composition" />
        <Tab label="Shapes and geometry" value="shapes and geometry" />
        <Tab label="Spatial Relationships" value="spatial-relationships" />
        <Tab label="Visual Presentation" value="visual-presentation" />
      </TabList>
      <TabPanel value="composition">
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
