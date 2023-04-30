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
} from '@mui/material';
import { useState } from 'react';
import useCopyToClipboard from 'src/hooks/useCopyToClipboard';
import Iconify from 'src/components/iconify';
import { useSnackbar } from 'src/components/snackbar';
import CategorizationChart from 'src/components/categorization-chart';
import Block from 'src/components/settings/drawer/Block';
// ----------------------------------------------------------------------

export default function PageChart() {
  const { copy } = useCopyToClipboard();
  const { enqueueSnackbar } = useSnackbar();

  const [value, setValue] = useState('');

  const img = `https://api-dev-minimal-v4.vercel.app/assets/images/covers/cover_1.jpg`;

  const createData = (name: string, group: string, role: string | null, avatar: string | null) => ({
    name,
    group,
    role,
    avatar,
  });

  const DATA = {
    ...createData('Image', 'root', null, img),
    children: [
      {
        ...createData('style', 'development', null, null),
        children: [
          {
            ...createData('theme', 'style', 'lead', img),
            children: null,
          },
          {
            ...createData('technique', 'style', 'lead', img),
            children: null,
          },
          {
            ...createData('tone', 'style', 'lead', img),
            children: null,
          },
          {
            ...createData('contextual information', 'style', 'lead', null),
            children: null,
          },
        ],
      },
      {
        ...createData('qualities', 'qualities', null, null),
        children: [
          {
            ...createData('adjectives', 'qualities', 'lead', img),
            children: null,
          },
          {
            ...createData('colour', 'qualities', 'support', img),
            children: null,
          },
          {
            ...createData('feelings', 'qualities', 'content', img),
            children: null,
          },
          {
            ...createData('texture', 'qualities', 'content', img),
            children: null,
          },
          {
            ...createData('motion', 'qualities', 'content', img),
            children: null,
          },
          {
            ...createData('lighting', 'qualities', 'content', img),
            children: null,
          },
        ],
      },
      {
        ...createData('subject', 'marketing', null, null),
        children: [
          {
            ...createData('people', 'marketing', 'lead', '📙'),
            children: null,
          },
          {
            ...createData('animals', 'marketing', 'senior', img),
            children: null,
          },
          {
            ...createData('nature', 'marketing', 'senior', img),
            children: null,
          },
          {
            ...createData('food', 'marketing', 'senior', img),
            children: null,
          },
          {
            ...createData('clothing', 'marketing', 'senior', img),
            children: null,
          },
          {
            ...createData('weather', 'marketing', 'senior', img),
            children: null,
          },
          {
            ...createData('creatures', 'marketing', 'senior', img),
            children: null,
          },
          {
            ...createData('mithology', 'marketing', 'senior', img),
            children: null,
          },
          {
            ...createData('elements', 'marketing', 'senior', img),
            children: null,
          },
          {
            ...createData('films', 'marketing', 'senior', img),
            children: null,
          },
          {
            ...createData('architecture', 'marketing', 'senior', img),
            children: null,
          },
          {
            ...createData('space', 'marketing', 'senior', img),
            children: null,
          },
        ],
      },
      {
        ...createData('shooting', 'shooting', null, null),
        children: [
          {
            ...createData('camera', 'shooting', null, null),
            children: null,
          },
          {
            ...createData('angle degree', 'shooting', 'lead', img),
            children: null,
          },
          {
            ...createData('exposure triangle', 'shooting', 'support', img),
            children: null,
          },
          {
            ...createData('composition', 'shooting', 'content', img),
            children: null,
          },
          {
            ...createData('resolution', 'shooting', 'content', img),
            children: null,
          },
        ],
      },
      {
        ...createData('image ratios', 'image ratios', null, 'null'),
        children: null,
      },

      {
        ...createData('artists', 'artists', null, null),
        children: [
          {
            ...createData('architecture', 'artists', 'lead', img),
            children: null,
          },
          {
            ...createData('interiorism', 'artists', 'lead', img),
            children: null,
          },
          {
            ...createData('fashion', 'artists', 'lead', img),
            children: null,
          },
          {
            ...createData('traditional', 'artists', 'support', img),
            children: null,
          },
          {
            ...createData('tattoo', 'artists', 'content', img),
            children: null,
          },
          {
            ...createData('grafitti', 'artists', 'content', img),
            children: null,
          },
          {
            ...createData('cartoons', 'artists', 'content', img),
            children: null,
          },
          {
            ...createData('photography', 'artists', 'content', img),
            children: null,
          },
        ],
      },
    ],
  };

  return (
    <>
      <Container maxWidth="md">
        <Helmet>
          <title> Categorization </title>
        </Helmet>

        <Typography variant="h3" component="h1" paragraph>
          Categorization
        </Typography>
        <Typography gutterBottom>
          Below chart illustrates the categorisation that we use to represent all the important
          aspects to consider on image descriptions.
        </Typography>
      </Container>

      <Container maxWidth="xl">
        <Block title="Chart" sx={{ overflow: 'auto' }}>
          <CategorizationChart data={DATA} variant="group" lineHeight="64px" />
        </Block>
      </Container>
    </>
  );
}
