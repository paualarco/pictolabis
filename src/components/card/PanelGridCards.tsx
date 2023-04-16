import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, Grid, Stack } from '@mui/material';
import PushPinIcon from '@mui/icons-material/PushPin';
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PromptCard, { PromptCardProps } from './PromptCard';

export type GridPromptCardProps = {
  cards: PromptCardProps[];
};
export default function PanelGridCards({ cards }: GridPromptCardProps) {
  return (
    <Box sx={{ marginTop: '10px', flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 1, sm: 2, md: 6 }}>
        {cards.map(({ title, img, isLiked, isAdded, isPinned }) => (
          <Grid item>
            <PromptCard title={title} img={img} isLiked isAdded isPinned />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
