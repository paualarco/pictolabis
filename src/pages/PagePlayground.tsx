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
import PanelStyle from 'src/layouts/playground/PanelStyle';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import PanelSubject from 'src/layouts/playground/subject/PanelSubject';
import PromptCard from 'src/components/card/PromptCard';
import PanelView from 'src/layouts/playground/view/PanelView';
import PanelQualities from 'src/layouts/playground/qualities/PanelQualities';
// ----------------------------------------------------------------------

export default function PagePlayground() {
  const { copy } = useCopyToClipboard();
  const { enqueueSnackbar } = useSnackbar();

  const [value, setValue] = useState('');
  const [tabValue, setTabValue] = useState('style');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };

  const onCopy = (text: string) => {
    if (text) {
      enqueueSnackbar('Copied!!');
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
        <Typography gutterBottom>
          Inspiration lab to enhance your creativity writing prompts.
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
      </Container>
      <TabContext value={tabValue} aria-label="scrollable auto tabs example">
        <TabList
          sx={{ marginLeft: '25px', marginTop: '20px', marginBottom: '-20px' }}
          onChange={handleTabChange}
        >
          <Tab label="Style" value="style" />
          <Tab label="Subject" value="subject" />
          <Tab label="Qualities" value="qualities" />
          <Tab label="View" value="view" />
          <Tab label="Shooting" value="shooting" />
          <Tab label="Image ratio" value="image-ratio" />
          <Tab label="Artist" value="artist" />
          <Tab label="Liked" value="liked" />
        </TabList>
        <TabPanel value="style">
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
            isLiked
            isAdded
            isPinned
          />
        </TabPanel>
        <TabPanel value="shooting">Item</TabPanel>
        <TabPanel value="view">
          <PanelView />
        </TabPanel>
        <TabPanel value="artist">Item One</TabPanel>
        <TabPanel value="liked">Item One</TabPanel>
      </TabContext>
    </>
  );
}
