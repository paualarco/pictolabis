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
import OrganizationalChart from 'src/components/organizational-chart';
import Block from 'src/components/settings/drawer/Block';
// ----------------------------------------------------------------------

export default function PageChart() {
  const { copy } = useCopyToClipboard();
  const { enqueueSnackbar } = useSnackbar();

  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const onCopy = (text: string) => {
    if (text) {
      enqueueSnackbar('Copied!');

      copy(text);
    }
  };

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
        ...createData('category', 'marketing', null, null),
        children: [
          {
            ...createData('portrait', 'marketing', 'lead', '📙'),
            children: [
              {
                ...createData('adjectives', 'portrait', null, img),
                children: null,
              },
              {
                ...createData('motion', 'portrait', null, img),
                children: null,
              },
              {
                ...createData('subject', 'portrait', null, img),
                children: null,
              },
            ],
          },
          {
            ...createData('landscape', 'marketing', 'senior', img),
            children: [
              {
                ...createData('weather', 'landscape', null, img),
                children: null,
              },
              {
                ...createData('weather', 'landscape', null, img),
                children: null,
              },
              {
                ...createData('outdoor', 'landscape', null, img),
                children: null,
              },
            ],
          },
          {
            ...createData('shapes & geometry', 'category', 'senior', img),
            children: null,
          },
          {
            ...createData('contextual information', 'category', 'senior', img),
            children: null,
          },
          {
            ...createData('spatial relationships', 'category', 'senior', img),
            children: null,
          },
        ],
      },
      {
        ...createData('style', 'development', null, null),
        children: [
          {
            ...createData('theme', 'style', 'lead', img),
            children: null,
          },
          {
            ...createData('ligthing and weather', 'style', 'lead', img),
            children: null,
          },
          {
            ...createData('frame', 'style', 'lead', img),
            children: null,
          },
          {
            ...createData('visual presentation', 'style', 'lead', img),
            children: null,
          },
          {
            ...createData('tone', 'style', 'lead', null),
            children: null,
          },
        ],
      },
      {
        ...createData('colour & texture', 'color & texture', null, null),
        children: [
          {
            ...createData('material', 'color & texture', 'lead', img),
            children: null,
          },
          {
            ...createData('texture', 'color & texture', 'support', img),
            children: null,
          },
          {
            ...createData('colour palette', 'color & texture', 'content', img),
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
      <Helmet>
        <title> Playground </title>
      </Helmet>

      <Container maxWidth="xl">
        <Block title="By Group" sx={{ overflow: 'auto' }}>
          <OrganizationalChart data={DATA} variant="simple" lineHeight="64px" />
        </Block>
      </Container>
    </>
  );
}
