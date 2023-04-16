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
import { TabContext, TabList } from '@mui/lab';
import PanelGridCards from 'src/components/card/PanelGridCards';
// ----------------------------------------------------------------------

export default function PanelGridThemes() {
  const { copy } = useCopyToClipboard();
  const { enqueueSnackbar } = useSnackbar();

  const [tabValue, setTabValue] = useState('adjectives');
  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };
  const scientistCardProps = {
    img: '/assets/images/cards/op.png',
    title: 'Scientist',
    isLiked: true,
    isAdded: false,
    isPinned: true,
  };
  const ricardoBofillCardProps = {
    img: '/assets/images/cards/artist/ricardo-bofill-illustration.png',
    title: 'Ricado Bofill',
    isLiked: true,
    isAdded: false,
    isPinned: true,
  };
  const axonometricStyleCard = {
    img: '/assets/images/cards/style/axonometric-guerrilla-gardening.png',
    title: 'Axonometric',
    isLiked: true,
    isAdded: false,
    isPinned: true,
  };
  const blueTechColorCard = {
    img: '/assets/images/cards/style/axonometric-guerrilla-gardening.png',
    title: 'Blue Tech',
    isLiked: true,
    isAdded: false,
    isPinned: true,
  };
  const coloringPageStyle = {
    img: '/assets/images/cards/style/coloring-page.png',
    title: 'Coloring Page',
    isLiked: true,
    isAdded: false,
    isPinned: true,
  };

  const lowPollyStyle = {
    img: '/assets/images/cards/style/low-polly-background-university.png',
    title: 'Low Polly',
    isLiked: true,
    isAdded: false,
    isPinned: true,
  };
  const stickerStyle = {
    img: '/assets/images/cards/style/sticker.png',
    title: 'Sticker',
    isLiked: true,
    isAdded: false,
    isPinned: true,
  };

  return (
    <PanelGridCards
      cards={[
        scientistCardProps,
        ricardoBofillCardProps,
        axonometricStyleCard,
        lowPollyStyle,
        stickerStyle,
        blueTechColorCard,
        coloringPageStyle,
      ]}
    />
  );
}
