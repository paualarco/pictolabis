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
  Badge,
} from '@mui/material';
import { useCallback, useMemo, useState } from 'react';
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
import VisibilityIcon from '@mui/icons-material/Visibility';
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import StarsIcon from '@mui/icons-material/Stars';
import { KeywordReference } from 'src/types/KeywordReference';
import KeywordChip from 'src/components/card/KeywordChip';
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

  const ref: KeywordReference = {
    img: '/assets/images/cards/op.png',
    title: 'Scientist',
    group: 'image-ratio',
    id: 'image-ratio_001dad2',
  };

  const onCopy = (text: string) => {
    if (text) {
      enqueueSnackbar('Copied!');
      copy(text);
    }
  };

  const [keywords, setKeywords] = useState<KeywordReference[]>([]);

  const addKeyword = useCallback(
    (newKeyword: KeywordReference) => {
      console.info(`keywords: ${keywords}`);
      const temp = keywords;
      temp.push(newKeyword);
      setKeywords(temp);
      setKeywordsText(keywords.map((a) => `${a.title} `).toString());
    },
    [keywords, setKeywords]
  );

  const removeKeyword = useCallback(
    (newKeyword: KeywordReference) => {
      const index = keywords.findIndex((k) => k.id === newKeyword.id);
      const removed = index !== -1 && setKeywords(keywords.splice(index, 1));
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
            <Stack spacing={2}>
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
                  <Typography variant="overline" sx={{ color: 'text.secondary' }}>
                    Custom Text
                  </Typography>

                  <TextField
                    fullWidth
                    multiline
                    value={value}
                    placeholder="Type custom text"
                    onChange={handleChange}
                  />
                </Stack>
              </>
            </Stack>

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
                {keywords.map((reference) => (
                  <KeywordChip
                    key={reference.id + Math.random()}
                    reference={{
                      group: reference.group,
                      id: reference.id,
                      title: reference.title,
                      img: reference.img,
                    }}
                    isStared
                    isPinned
                  />
                ))}
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
            label={
              <Badge
                sx={{
                  p: 0.7,
                  '& .MuiBadge-badge': {
                    // color: 'lightgreen',
                    color: 'white',
                    backgroundColor: groupColor.get('style'),
                  },
                }}
                badgeContent={findGroupOccurences('style')}
              >
                <Typography>Style</Typography>
              </Badge>
            }
            value="style"
          />

          <Tab icon={<CollectionsIcon />} iconPosition="start" label="Subject" value="subject" />
          <Tab
            icon={<AddReactionIcon />}
            iconPosition="start"
            label="Qualities"
            value="qualities"
          />
          <Tab icon={<VisibilityIcon />} iconPosition="start" label="View" value="view" />
          <Tab
            icon={<CameraEnhanceIcon />}
            iconPosition="start"
            label="Shooting"
            value="shooting"
          />
          <Tab
            icon={<AspectRatioIcon />}
            iconPosition="start"
            label="Image ratio"
            value="image-ratio"
          />
          <Tab icon={<EmojiPeopleIcon />} iconPosition="start" label="Artist" value="artist" />
          <Tab icon={<StarsIcon />} iconPosition="start" label="Stared" value="stared" />
        </TabList>
        <TabPanel value="style" sx={{ background: 'ANY_COLOR' }}>
          <PanelStyle
            handleAddKeyword={addKeyword}
            handleRemoveKeyword={addKeyword}
            findKeywordOccurences={findKeyword}
          />
        </TabPanel>
        <TabPanel value="subject">
          <PanelSubject
            handleAddKeyword={addKeyword}
            handleRemoveKeyword={addKeyword}
            findKeywordOccurences={findKeyword}
          />
        </TabPanel>
        <TabPanel value="qualities">
          <PanelQualities
            handleAddKeyword={addKeyword}
            handleRemoveKeyword={addKeyword}
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
            isPinned
          />
        </TabPanel>
        <TabPanel value="shooting">Item</TabPanel>
        <TabPanel value="view">
          <PanelView
            handleAddKeyword={addKeyword}
            handleRemoveKeyword={addKeyword}
            findKeywordOccurences={findKeyword}
          />
        </TabPanel>
        <TabPanel value="artist">
          {' '}
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
            isPinned
          />
        </TabPanel>
        <TabPanel value="stared">Item One</TabPanel>
      </TabContext>
    </>
  );
}
