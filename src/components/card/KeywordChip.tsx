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
import { Group, groupColor, textColor } from 'src/types/Group';
import { KeywordReference } from 'src/types/KeywordReference';
import CancelIcon from '@mui/icons-material/Cancel';
import { KeywordChipReference } from 'src/types/KeywordChipReference';

export type KeywordChipProps = {
  reference: KeywordChipReference;
  onRemove: (keywordChip: KeywordChipReference) => void;
  isDisabled?: boolean;
  isStared?: boolean;
  isPinned?: boolean;
};
export default function KeywordChip({
  reference,
  onRemove,
  isDisabled,
  isStared,
  isPinned,
}: KeywordChipProps) {
  const backgroundClolor = groupColor.get(reference.group);
  const color = textColor(reference.group);

  return (
    <Chip
      sx={{
        backgroundColor: backgroundClolor,
        color,
        height: 25,
        m: 0.1,
        '& .MuiChip-deleteIcon': {
          color: 'black',
          opacity: '35%',
        },
      }}
      size="medium"
      variant="outlined"
      disabled={isDisabled}
      deleteIcon={<CancelIcon sx={{ height: 19 }} />}
      onDelete={() => onRemove(reference)}
      label={reference.title}
      // icon={
      //   <IconButton>
      //     <ArrowBackIos fontSize="small" />
      //   </IconButton>
      // }
    />
  );
}
