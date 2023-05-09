import { Box, Grid } from '@mui/material';
import { KeywordDetails } from 'src/types/KeywordDetails';
import { cardsBasePath } from 'src/utils/data';
// eslint-disable-next-line import/no-cycle
import { CardsActionProps } from 'src/pages/playground/types/CardActionProps';
import KeywordCard from './KeywordCard';

export type GridKeywordCardsProps = CardsActionProps & { cards: KeywordDetails[] };

export default function PanelGridCards({
  cards,
  handleAddKeyword,
  handleRemoveKeyword,
}: GridKeywordCardsProps) {
  return (
    <Box sx={{ marginTop: '10px', flexGrow: 1 }}>
      <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 3, sm: 2, md: 2, lg: 2 }}>
        {cards.map(({ reference, isLiked: isStared, isAdded, isPinned }) => {
          const imgPath = `${cardsBasePath}${reference.img}`;

          return (
            <Grid item key={reference.id}>
              <KeywordCard
                key={reference.id}
                reference={{
                  title: reference.title,
                  group: reference.group,
                  img: imgPath,
                  id: reference.id,
                }}
                isStared={isStared}
                handleAdd={handleAddKeyword}
                handleRemove={handleRemoveKeyword}
                occurrences={0}
                isPinned={isPinned}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
