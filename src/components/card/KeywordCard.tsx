import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {
  Badge,
  Box,
  Button,
  CardActionArea,
  CardActions,
  Hidden,
  ListItem,
  ListItemSecondaryAction,
  Popover,
  Stack,
  Tooltip,
} from '@mui/material';
import PushPinIcon from '@mui/icons-material/PushPin';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import { groupColor } from 'src/types/Group';
import { KeywordReference } from 'src/types/KeywordReference';
import { useCallback, useMemo, useState } from 'react';

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
  const pinnedColor = isPinned ? 'disabled' : 'disabled'; // 'secondary';

  const fallbackImg = '/assets/images/cards/default.jpg';

  const primaryColor = groupColor.get(reference.group);

  const [actualOccurences, setActualOcurrences] = useState(occurrences);

  const isAdded = useMemo(() => actualOccurences > 0, [actualOccurences]);

  const removeColor = useMemo(() => (isAdded ? 'error' : 'disabled'), [isAdded]);

  const cardBorder = isAdded ? 5 : 0;

  const cardColor = isAdded ? primaryColor : undefined;
  const textColor = isAdded ? 'white' : undefined;

  const handleOnClick = useCallback(
    (r: KeywordReference) => {
      console.log(`isAdded: ${isAdded}`);
      if (isAdded) {
        handleRemove(r);
        setActualOcurrences(actualOccurences - 1);
        return {};
      }
      handleAdd(r);
      setActualOcurrences(actualOccurences + 1);
      return {};
    },
    [isAdded, actualOccurences, handleAdd, handleRemove, setActualOcurrences]
  );
  // 230
  return (
    <Card
      sx={{
        maxWidth: { xs: 140, sx: 230, md: 230 },
        minWidth: { xs: 140, sx: 230, md: 230 },
        backgroundColor: cardColor,
      }}
    >
      <CardActionArea
        component="span"
        onClick={() => {
          handleOnClick(reference);
        }}
      >
        <CardMedia
          component="img"
          sx={{ maxWidth: { xs: 140, sx: 200, md: 400 } }}
          image={reference.img} // fileSys.existsSync(img) ? img : fallbackImg}
          alt={reference.title}
          defaultValue="a"
        />
      </CardActionArea>

      <CardActions>
        {/* <Box
          display="grid"
          gridTemplateColumns={{ xs: 'repeat(2, 2fr)', md: 'repeat(2, 1fr)' }}
          gap={1}
        > */}
        <Box maxHeight="25px" marginTop="-3px">
          <Typography sx={{ marginLeft: '10px', color: textColor }} variant="h6">
            {reference.title}
          </Typography>
        </Box>

        {/* <Stack width="30%" direction="row">
          <Tooltip title="Coming soon">
            <Button component="span" size="medium" color="secondary">
              <PushPinIcon color={pinnedColor} fontSize="medium" />
            </Button>
          </Tooltip>

          <Button color="warning">
            {isStared ? (
              <StarOutlineIcon color="inherit" fontSize="medium" />
            ) : (
              <StarIcon color="inherit" fontSize="medium" />
            )}
          </Button>
        </Stack> */}
        {/* </Box> */}
      </CardActions>
    </Card>
  );
}
