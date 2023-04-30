import { Helmet } from 'react-helmet-async';
// @mui
// components
import { Tab } from '@mui/material';
import { useState } from 'react';

import { TabContext, TabList, TabPanel } from '@mui/lab';
import PanelGridCards from 'src/components/card/PanelGridCards';
import { themes, techniques, tone } from 'src/assets/data/cards/style';
import { CardReference } from 'src/types/CardReference';
import { groupColor } from 'src/types/Group';

export default function PanelStyle() {
  const [tabValue, setTabValue] = useState('adjectives');
  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };

  const tabColour = groupColor.get('style');

  const referenceToCard = (ref: CardReference) => ({
    reference: ref,
    isLiked: false,
    isAdded: false,
    isPinned: false,
  });

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
        <Tab label="Theme" value="theme" />
        <Tab label="Technique" value="technique" />
        <Tab label="Tone" value="tone" />
        <Tab label="Contextual Information" value="contextual-information" />
      </TabList>
      <TabPanel value="theme">
        <PanelGridCards cards={themes.map(referenceToCard)} />
      </TabPanel>
      <TabPanel value="technique">
        <PanelGridCards cards={techniques.map(referenceToCard)} />
      </TabPanel>
      <TabPanel value="tone">
        <PanelGridCards cards={tone.map(referenceToCard)} />
      </TabPanel>
      <TabPanel value="contextual-information">
        <PanelGridCards cards={techniques.map(referenceToCard)} />
      </TabPanel>
    </TabContext>
  );
}
