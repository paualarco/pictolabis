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
  Grid,
  Divider,
  Badge,
} from '@mui/material';
import React, { useCallback, useMemo, useState } from 'react';
import useCopyToClipboard from 'src/hooks/useCopyToClipboard';
import Iconify from 'src/components/iconify';
import { useSnackbar } from 'src/components/snackbar';
import PanelStyle from 'src/pages/playground/view/PanelStyle';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import PanelSubject from 'src/pages/playground/view/PanelSubject';
import KeywordCard from 'src/components/card/KeywordCard';
import PanelView from 'src/pages/playground/view/PanelView';
import PanelQualities from 'src/pages/playground/view/PanelQualities';
import { Group, GroupColor, groupColor } from 'src/types/Group';
import BrushIcon from '@mui/icons-material/Brush';
import CollectionsIcon from '@mui/icons-material/Collections';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import StarsIcon from '@mui/icons-material/Stars';
import { KeywordReference } from 'src/types/KeywordReference';
import KeywordChip from 'src/components/card/KeywordChip';
import { KeywordChipReference } from 'src/types/KeywordChipReference';
// ----------------------------------------------------------------------

export default function PagePlayground() {
  const { copy } = useCopyToClipboard();
  const { enqueueSnackbar } = useSnackbar();

  const [value, setValue] = useState('');
  const [tabValue, setTabValue] = useState<Group>('style');

  const [keywordsText, setKeywordsText] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const e: Group = event.target.value as Group;
    setValue(e);
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: Group) => {
    setTabValue(newValue);
  };

  const tabColour: GroupColor = useMemo(() => groupColor.get(tabValue) ?? '#D899FF', [tabValue]);

  const ref: KeywordChipReference = {
    img: '/assets/images/cards/op.png',
    title: value,
    group: 'text',
    id: 'image-ratio_001dad2',
    chipId: 123,
  };

  const onCopy = (text: string) => {
    if (text) {
      enqueueSnackbar('Copied!');
      copy(text);
    }
  };

  const [keywords, setKeywords] = useState<KeywordChipReference[]>([]);

  const addKeyword = useCallback(
    (newKeyword: KeywordReference) => {
      const temp = keywords;
      const chipRef = { ...newKeyword, chipId: Math.random() };
      temp.push(chipRef);
      setKeywords(temp);
      setKeywordsText(keywords.map((a) => `${a.title} `).toString());
    },
    [keywords, setKeywords]
  );

  const addTextKeyword = useCallback(() => {
    const textChip: KeywordChipReference = {
      img: 'undefined',
      title: value,
      group: 'text',
      id: value,
      chipId: Math.random(),
    };
    const temp = [textChip].concat(keywords);
    setKeywords(temp);
    setKeywordsText(temp.map((a) => `${a.title} `).toString());
    setValue('');
  }, [value, keywords, setKeywords]);

  const removeKeyword = useCallback(
    (keyword: KeywordReference) => {
      const index = keywords.findIndex((k) => k.id === keyword.id);
      console.log(`remove index ${index}, newKeyword: ${keyword.id}`);
      if (index !== -1) {
        const temp = keywords;
        temp.splice(index, 1);
        setKeywords(temp);
        setKeywordsText(keywords.map((a) => `${a.title} `).toString());
      }
    },
    [keywords, setKeywords]
  );

  const removeKeywordByChipId = useCallback(
    (keywordChip: KeywordChipReference) => {
      const index = keywords.findIndex((k) => k.chipId === keywordChip.chipId);
      if (index !== -1) {
        const temp = keywords;
        temp.splice(index, 1);
        setKeywords(temp);
        setKeywordsText(keywords.map((a) => `${a.title} `).toString());
      }
    },
    [keywords, setKeywords]
  );

  const findKeyword: (id: string) => KeywordReference[] = useCallback(
    (id: string) => keywords.filter((k) => k.id === id),
    [keywords]
  );

  const findGroupOccurences: (group: Group) => number | undefined = useCallback(
    (group: Group) => {
      const matches = keywords.filter((k) => k.group === group);
      if (matches.length > 0) return matches.length;
      return undefined;
    },
    [keywords]
  );

  const badgeTabStyle = {
    overflow: 'visible',
    '& .MuiTabs-scroller': { overflow: 'visible !important' },
  };

  const dynamicBadgeTitle = (group: Group, tabTitle: string) => (
    <Badge
      sx={{
        p: 0.7,
        '& .MuiBadge-badge': {
          // color: 'lightgreen',
          color: 'white',
          backgroundColor: groupColor.get(group),
        },
      }}
      badgeContent={findGroupOccurences(group)}
    >
      <Typography>{tabTitle}</Typography>
    </Badge>
  );
  return (
    <>
      <Container maxWidth="lg">
        <Helmet>
          <title> Playground </title>
        </Helmet>
        <Typography variant="h3" component="h1" paragraph>
          Playground
        </Typography>
      </Container>

      <Container maxWidth="xl">
        <Card sx={{ p: 5, mt: 6 }}>
          <Box
            display="grid"
            gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
            gap={5}
          >
            <>
              {/* <TextField
                  fullWidth
                  multiline
                  value={value}
                  placeholder="Type custom prompt"
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Tooltip title="Copy">
                          <IconButton onClick={() => onCopy(value)}>
                            <Iconify icon="eva:copy-fill" width={24} />
                          </IconButton>
                        </Tooltip>
                      </InputAdornment>
                    ),
                  }}
                /> */}
              <Stack direction="column" spacing={2}>
                <Typography variant="overline" sx={{ color: 'text.secondary' }}>
                  Result prompt
                </Typography>
                <Box
                  gap={5}
                  component="span"
                  sx={{
                    p: 2,
                    borderRadius: '12px',
                    border: '1px solid lightgray',
                    overflow: 'auto',
                    '&:hover': {
                      borderColor: 'black',
                    },
                  }}
                >
                  <Stack direction="row">
                    <Box width="95%">{keywordsText}</Box>
                    <Box>
                      <Tooltip title="Copy">
                        <IconButton onClick={() => onCopy(keywordsText)}>
                          <Iconify icon="eva:copy-fill" width={24} />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </Stack>
                </Box>
              </Stack>
            </>

            <Stack spacing={2}>
              <Typography variant="overline" sx={{ color: 'text.secondary' }}>
                Keywords
              </Typography>
              <Box
                gap={5}
                component="span"
                sx={{
                  p: 2,
                  borderRadius: '12px',
                  border: '1px solid lightgray',
                  overflow: 'auto',
                  '&:hover': {
                    borderColor: 'black',
                  },
                }}
              >
                <Stack direction="column">
                  <Box marginBottom={1}>
                    <KeywordChip
                      key={ref.id + Math.random()}
                      reference={ref}
                      onRemove={removeKeywordByChipId}
                      isDisabled
                      isStared
                      isPinned
                    />
                    {keywords.map((reference) => (
                      <KeywordChip
                        key={reference.id + Math.random()}
                        reference={{
                          group: reference.group,
                          id: reference.id,
                          title: reference.title,
                          img: reference.img,
                          chipId: reference.chipId,
                        }}
                        onRemove={removeKeywordByChipId}
                        isStared
                        isPinned
                      />
                    ))}
                  </Box>
                  <Divider variant="middle" />
                  <Stack direction="row" marginBottom={-2}>
                    <Box width="95%">
                      <TextField
                        fullWidth
                        multiline
                        variant={undefined}
                        value={value}
                        placeholder="Type custom text"
                        onChange={handleChange}
                        sx={{
                          maxWidth: '100%',
                          '& fieldset': { border: 'none' },
                        }}
                      />
                    </Box>
                    <Box marginTop={1}>
                      <Tooltip title="Add ">
                        <IconButton
                          disabled={value === ''}
                          color="success"
                          onClick={addTextKeyword}
                        >
                          <ControlPointIcon />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </Stack>
                </Stack>
              </Box>
            </Stack>

            {/* <Typography onClick={handleClick}>{textOnClick}</Typography> */}
          </Box>
        </Card>
      </Container>

      <TabContext value={tabValue} aria-label="scrollable auto tabs example">
        <TabList
          sx={{
            marginLeft: '25px',
            marginTop: '20px',
            marginBottom: '-20px',
            '& .MuiTabs-flexContainer': { paddingTop: '12px' },
          }}
          onChange={handleTabChange}
          TabIndicatorProps={{
            style: {
              backgroundColor: tabColour,
            },
          }}
        >
          <Tab
            icon={<BrushIcon />}
            iconPosition="start"
            sx={badgeTabStyle}
            label={dynamicBadgeTitle('style', 'Style')}
            value="style"
          />

          <Tab
            icon={<CollectionsIcon />}
            iconPosition="start"
            sx={badgeTabStyle}
            label={dynamicBadgeTitle('subject', 'Subject')}
            value="subject"
          />
          <Tab
            icon={<AddReactionIcon />}
            iconPosition="start"
            sx={badgeTabStyle}
            label={dynamicBadgeTitle('qualities', 'Qualities')}
            value="qualities"
          />
          <Tab
            icon={<VisibilityIcon />}
            iconPosition="start"
            sx={badgeTabStyle}
            label={dynamicBadgeTitle('view', 'View')}
            value="view"
          />
          <Tab
            icon={<CameraEnhanceIcon />}
            iconPosition="start"
            sx={badgeTabStyle}
            label={dynamicBadgeTitle('shooting', 'Shooting')}
            value="shooting"
          />
          <Tab
            icon={<AspectRatioIcon />}
            iconPosition="start"
            sx={badgeTabStyle}
            label={dynamicBadgeTitle('image-ratio', 'Image ratio')}
            value="image-ratio"
          />
          <Tab
            icon={<EmojiPeopleIcon />}
            iconPosition="start"
            sx={badgeTabStyle}
            label={dynamicBadgeTitle('artist', 'Artist')}
            value="artist"
          />
          <Tab icon={<StarsIcon />} iconPosition="start" label="Stared" value="stared" />
        </TabList>
        <TabPanel value="style" sx={{ background: 'ANY_COLOR' }}>
          <PanelStyle
            handleAddKeyword={addKeyword}
            handleRemoveKeyword={removeKeyword}
            findKeywordOccurences={findKeyword}
          />
        </TabPanel>
        <TabPanel value="subject">
          <PanelSubject
            handleAddKeyword={addKeyword}
            handleRemoveKeyword={removeKeyword}
            findKeywordOccurences={findKeyword}
          />
        </TabPanel>
        <TabPanel value="qualities">
          <PanelQualities
            handleAddKeyword={addKeyword}
            handleRemoveKeyword={removeKeyword}
            findKeywordOccurences={findKeyword}
          />
        </TabPanel>
        <TabPanel value="image-ratio">
          <KeywordCard
            reference={{
              img: '/assets/images/cards/op.png',
              title: 'Scientist',
              group: 'image-ratio',
              id: 'image-ratio_001',
            }}
            isStared
            occurrences={findKeyword('image-ratio_001').length}
            handleAdd={addKeyword}
            handleRemove={removeKeyword}
            isPinned
          />
        </TabPanel>
        <TabPanel value="shooting">
          <KeywordCard
            reference={{
              img: '/assets/images/cards/op.png',
              title: 'Scientist',
              group: 'shooting',
              id: 'image-ratio_001',
            }}
            isStared
            occurrences={findKeyword('image-ratio_001').length}
            handleAdd={addKeyword}
            handleRemove={removeKeyword}
            isPinned
          />
        </TabPanel>
        <TabPanel value="view">
          <PanelView
            handleAddKeyword={addKeyword}
            handleRemoveKeyword={removeKeyword}
            findKeywordOccurences={findKeyword}
          />
        </TabPanel>
        <TabPanel value="artist">
          <KeywordCard
            reference={{
              img: '/assets/images/cards/op.png',
              title: 'Scientist',
              group: 'artist',
              id: 'image-ratio_001',
            }}
            isStared
            occurrences={findKeyword('image-ratio_001').length}
            handleAdd={addKeyword}
            handleRemove={removeKeyword}
            isPinned
          />
        </TabPanel>
        <TabPanel value="stared">Item One</TabPanel>
      </TabContext>
    </>
  );
}
