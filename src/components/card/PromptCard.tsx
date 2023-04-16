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

  return (
    <Card sx={{ maxWidth: 270 }}>
      {/* <CardActionArea> */}
      <CardMedia
        component="img"
        height="210"
        image={img} // && fileSys.existsSync(img) ? img : fallbackImg}
        alt="green iguana"
      />
      <Typography sx={{ marginLeft: '10px' }} variant="h6">
        {title}
      </Typography>
      {/* </CardActionArea> */}
      <CardActions>
        <Stack maxHeight="25px" direction="row" spacing={4}>
          <Button size="medium" color="secondary">
            <PushPinIcon color={pinnedColor} fontSize="medium" />
          </Button>
          <Button>
            <AddIcon color={addColor} fontSize="medium" />
          </Button>
          <Button color="error">
            {isLiked ? (
              <FavoriteIcon color="inherit" fontSize="medium" />
            ) : (
              <FavoriteBorderIcon color="inherit" fontSize="medium" />
            )}
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
}
