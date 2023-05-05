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
import { Group, groupColor } from 'src/types/Group';
import { KeywordReference } from 'src/types/KeywordReference';
import CancelIcon from '@mui/icons-material/Cancel';

export type KeywordChipProps = {
  reference: KeywordReference;
  isStared?: boolean;
  isPinned?: boolean;
};
export default function KeywordChip({ reference, isStared, isPinned }: KeywordChipProps) {
  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const color = groupColor.get(reference.group);
  return (
    <Chip
      sx={{ backgroundColor: color, color: 'white', height: 25, m: 0.1 }}
      size="medium"
      variant="outlined"
      deleteIcon={<CancelIcon sx={{ height: 19 }} />}
      onDelete={handleDelete}
      label={reference.title}
      // icon={
      //   <IconButton>
      //     <ArrowBackIos fontSize="small" />
      //   </IconButton>
      // }
    />
  );
}
