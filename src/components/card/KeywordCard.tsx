import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Badge, Box, Button, CardActionArea, CardActions, Stack } from '@mui/material';
import PushPinIcon from '@mui/icons-material/PushPin';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import { groupColor } from 'src/types/Group';
import { KeywordReference } from 'src/types/KeywordReference';
import { useMemo, useState } from 'react';
import { ref } from 'yup';

export type KeywordCardProps = {
  reference: KeywordReference;
  isStared?: boolean;
  occurrences: number;
  handleAdd: (keywordRef: KeywordReference) => void;
  handleRemove: (keywordRef: KeywordReference) => void;
  isPinned?: boolean;
};
export default function KeywordCard({
  reference,
  isStared,
  isPinned,
  occurrences,
  handleAdd,
  handleRemove,
}: KeywordCardProps) {
  const pinnedColor = isPinned ? 'disabled' : 'secondary';

  const fallbackImg = '/assets/images/cards/default.jpg';

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const color = groupColor.get(reference.group);

  const [actualOccurences, setActualOcurrences] = useState(occurrences);

  const isAdded = useMemo(() => actualOccurences > 0, [actualOccurences]);

  const removeColor = useMemo(() => (isAdded ? 'error' : 'disabled'), [isAdded]);

  const cardBorder = isAdded ? 5 : 0;
  return (
    <Card sx={{ maxWidth: 270, minWidth: 270 }}>
      {/* <CardActionArea> */}
      <CardMedia
        component="img"
        height="210"
        image={reference.img} // fileSys.existsSync(img) ? img : fallbackImg}
        alt={reference.title}
        defaultValue="a"
      />
      <Typography sx={{ marginLeft: '10px' }} variant="h6">
        {reference.title}
      </Typography>
      <Box sx={{ borderBottom: cardBorder, borderColor: color }}>
        <CardActions>
          <Stack maxHeight="25px" direction="row">
            <Button size="medium" color="secondary">
              <PushPinIcon color={pinnedColor} fontSize="medium" />
            </Button>
            <Stack direction="row">
              <Button
                color="error"
                onClick={() => {
                  handleRemove(reference);
                  setActualOcurrences(actualOccurences - 1);
                }}
              >
                <RemoveIcon color={removeColor} fontSize="medium" />
              </Button>
              <Button
                color="primary"
                onClick={() => {
                  handleAdd(reference);
                  console.info('adding');
                  setActualOcurrences(actualOccurences + 1);
                }}
              >
                <Badge
                  sx={{
                    p: 0.7,
                    '& .MuiBadge-badge': {
                      // color: 'lightgreen',
                      color: 'white',
                      backgroundColor: color,
                    },
                  }}
                  badgeContent={actualOccurences}
                >
                  <AddIcon color="primary" fontSize="medium" />
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
      {/* </CardActionArea> */}
    </Card>
  );
}
