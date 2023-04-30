import { Box, Grid } from '@mui/material';
import { CardDetails } from 'src/types/CardDetails';
import { cardsBasePath } from 'src/utils/data';
import PromptCard from './PromptCard';

export type GridPromptCardProps = {
  cards: CardDetails[];
};

export default function PanelGridCards({ cards }: GridPromptCardProps) {
  return (
    <Box sx={{ marginTop: '10px', flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 1, sm: 2, md: 6 }}>
        {cards.map(({ reference, isLiked: isStared, isAdded, isPinned }) => {
          const imgPath = `${cardsBasePath}${reference.img}`;

          return (
            <Grid item>
              <PromptCard
                title={reference.title}
                group={reference.group}
                img={imgPath}
                isStared={isStared}
                isAdded={isAdded}
                isPinned={isPinned}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
