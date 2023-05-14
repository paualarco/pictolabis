import { Helmet } from 'react-helmet-async';
// @mui
// components
import { Tab } from '@mui/material';
import { useState } from 'react';

import { TabContext, TabList, TabPanel } from '@mui/lab';
// eslint-disable-next-line import/no-cycle
import PanelGridCards from 'src/components/card/GridKeywordCards';
import { movement, techniques, tone } from 'src/assets/data/cards/style';
import { KeywordReference } from 'src/types/KeywordReference';
import { groupColor } from 'src/types/Group';
import { referenceToCard } from 'src/utils/cards';
import { CardsActionProps } from '../types/CardActionProps';

export default function PanelStyle({
  handleAddKeyword,
  handleRemoveKeyword,
  findKeywordOccurences,
}: CardsActionProps) {
  const [tabValue, setTabValue] = useState('theme');
  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };

  const tabColour = groupColor.get('style');

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
        <PanelGridCards
          cards={movement.map(referenceToCard)}
          handleAddKeyword={handleAddKeyword}
          handleRemoveKeyword={handleRemoveKeyword}
          findKeywordOccurences={findKeywordOccurences}
        />
      </TabPanel>
      <TabPanel value="technique">
        <PanelGridCards
          cards={techniques.map(referenceToCard)}
          handleAddKeyword={handleAddKeyword}
          handleRemoveKeyword={handleRemoveKeyword}
          findKeywordOccurences={findKeywordOccurences}
        />
      </TabPanel>
      <TabPanel value="tone">
        <PanelGridCards
          cards={tone.map(referenceToCard)}
          handleAddKeyword={handleAddKeyword}
          handleRemoveKeyword={handleRemoveKeyword}
          findKeywordOccurences={findKeywordOccurences}
        />
      </TabPanel>
      <TabPanel value="contextual-information">
        <PanelGridCards
          cards={techniques.map(referenceToCard)}
          handleAddKeyword={handleAddKeyword}
          handleRemoveKeyword={handleRemoveKeyword}
          findKeywordOccurences={findKeywordOccurences}
        />
      </TabPanel>
    </TabContext>
  );
}
