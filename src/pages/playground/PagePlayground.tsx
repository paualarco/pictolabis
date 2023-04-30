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
import { useMemo, useState } from 'react';
import useCopyToClipboard from 'src/hooks/useCopyToClipboard';
import Iconify from 'src/components/iconify';
import { useSnackbar } from 'src/components/snackbar';
import PanelStyle from 'src/pages/playground/PanelStyle';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import PanelSubject from 'src/pages/playground/PanelSubject';
import PromptCard from 'src/components/card/PromptCard';
import PanelView from 'src/pages/playground/PanelView';
import PanelQualities from 'src/pages/playground/PanelQualities';
import { Group, GroupColor, groupColor } from 'src/types/Group';
import BrushIcon from '@mui/icons-material/Brush';
import CollectionsIcon from '@mui/icons-material/Collections';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import StarsIcon from '@mui/icons-material/Stars';
// ----------------------------------------------------------------------

export default function PagePlayground() {
  const { copy } = useCopyToClipboard();
  const { enqueueSnackbar } = useSnackbar();

  const [value, setValue] = useState('');
  const [tabValue, setTabValue] = useState<Group>('style');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const e: Group = event.target.value as Group;
    setValue(e);
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: Group) => {
    setTabValue(newValue);
  };

  const tabColour: GroupColor = useMemo(() => groupColor.get(tabValue) ?? '#7635dc', [tabValue]);

  const onCopy = (text: string) => {
    if (text) {
      enqueueSnackbar('Copied!');
      copy(text);
    }
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
              <Typography variant="overline" sx={{ color: 'text.secondary' }}>
                Result prompt
              </Typography>

              <TextField
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
              />
            </Stack>

            <Stack spacing={2}>
              <Typography variant="overline" sx={{ color: 'text.secondary' }}>
                Custom Text
              </Typography>

              <TextField
                fullWidth
                multiline
                value={value}
                placeholder="Type custom prompt"
                onChange={handleChange}
              />
            </Stack>

            {/* <Typography onClick={handleClick}>{textOnClick}</Typography> */}
          </Box>
        </Card>
      </Container>
      <TabContext value={tabValue} aria-label="scrollable auto tabs example">
        <TabList
          sx={{ marginLeft: '25px', marginTop: '20px', marginBottom: '-20px' }}
          onChange={handleTabChange}
          TabIndicatorProps={{
            style: {
              backgroundColor: tabColour,
            },
          }}
        >
          <Tab icon={<BrushIcon />} iconPosition="start" label="Style" value="style" />
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
          <PanelStyle />
        </TabPanel>
        <TabPanel value="subject">
          <PanelSubject />
        </TabPanel>
        <TabPanel value="qualities">
          <PanelQualities />
        </TabPanel>
        <TabPanel value="image-ratio">
          <PromptCard
            img="/assets/images/cards/op.png"
            title="Scientist"
            group="image-ratio"
            isStared
            isAdded
            isPinned
          />
        </TabPanel>
        <TabPanel value="shooting">Item</TabPanel>
        <TabPanel value="view">
          <PanelView />
        </TabPanel>
        <TabPanel value="artist">Item One</TabPanel>
        <TabPanel value="stared">Item One</TabPanel>
      </TabContext>
    </>
  );
}
