import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Badge, Box, Button, CardActionArea, CardActions, Stack } from '@mui/material';
import PushPinIcon from '@mui/icons-material/PushPin';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Chip from '@mui/material/Chip';
import DoneIcon from '@mui/icons-material/Done';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import DeleteIcon from '@mui/icons-material/Delete';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import { Group, groupColor } from 'src/types/Group';

export type PromptCardProps = {
  title: string;
  group: Group;
  img: string | undefined;
  isStared?: boolean;
  isAdded?: boolean;
  isPinned?: boolean;
};
export default function PromptCard({
  title,
  group,
  img,
  isStared,
  isPinned,
  isAdded,
}: PromptCardProps) {
  const addColor = isAdded ? 'disabled' : 'primary';
  const pinnedColor = isPinned ? 'disabled' : 'secondary';
  const removeColor = isAdded ? 'error' : 'disabled';

  const fallbackImg = '/assets/images/cards/default.jpg';

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const color = groupColor.get(group);

  return (
    <Card sx={{ maxWidth: 270, minWidth: 270 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="210"
          image={img} // fileSys.existsSync(img) ? img : fallbackImg}
          alt={title}
          defaultValue="a"
        />
        <Typography sx={{ marginLeft: '10px' }} variant="h6">
          {title}
        </Typography>
        <Box sx={{ borderBottom: 5, color: '#7635dc', borderColor: color }}>
          <CardActions>
            <Stack maxHeight="25px" direction="row">
              <Button size="medium" color="secondary">
                <PushPinIcon color={pinnedColor} fontSize="medium" />
              </Button>
              <Stack direction="row">
                <Button color="error">
                  <RemoveIcon color={removeColor} fontSize="medium" />
                </Button>
                <Button color="primary">
                  <Badge
                    sx={{
                      p: 0.7,
                      '& .MuiBadge-badge': {
                        // color: 'lightgreen',
                        color: 'white',
                        backgroundColor: color,
                      },
                    }}
                    badgeContent={4}
                  >
                    <AddIcon color={addColor} fontSize="medium" />
                  </Badge>
                </Button>
              </Stack>
              <Button color="warning">
                {isStared ? (
                  <StarOutlineIcon color="inherit" fontSize="medium" />
                ) : (
                  <StarIcon color="inherit" fontSize="medium" />
                )}
              </Button>
            </Stack>
          </CardActions>
        </Box>
      </CardActionArea>
    </Card>
  );
}
