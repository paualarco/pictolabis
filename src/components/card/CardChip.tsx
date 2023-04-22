import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, Grid, IconButton, Stack } from '@mui/material';
import PushPinIcon from '@mui/icons-material/PushPin';
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Chip from '@mui/material/Chip';
import DoneIcon from '@mui/icons-material/Done';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import DeleteIcon from '@mui/icons-material/Delete';

import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';

export type PromptCardProps = {
  title: string;
  img: string | undefined;
  isLiked?: boolean;
  isAdded?: boolean;
  isPinned?: boolean;
};
export default function PromptCard({ title, img, isLiked, isPinned, isAdded }: PromptCardProps) {
  const addColor = isAdded ? 'disabled' : 'primary';
  const pinnedColor = isPinned ? 'disabled' : 'secondary';
  const fallbackImg = '/assets/images/cards/default.jpg';

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  return (
    <Chip
      color="default"
      size="medium"
      deleteIcon={
        <IconButton>
          <ArrowForwardIos fontSize="small" />
        </IconButton>
      }
      onDelete={handleDelete}
      clickable
      label="Clickable "
      icon={
        <IconButton>
          <ArrowBackIos fontSize="small" />
        </IconButton>
      }
    />
  );
}
