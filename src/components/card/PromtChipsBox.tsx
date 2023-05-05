import { Box, Typography } from '@mui/material';
import { KeywordReference } from 'src/types/KeywordReference';
import KeywordChip from './KeywordChip';

export type PromptChipsBoxProps = {
  keywordReferences: KeywordReference[];
};

export default function PromptChipsBox({ keywordReferences }: PromptChipsBoxProps) {
  return (
    <Box
      gap={5}
      component="span"
      sx={{
        p: 2,
        borderRadius: '12px',
        border: '1px solid lightgray',
        overflow: 'auto',
        '&:hover': {
          borderColor: 'black',
        },
      }}
    >
      <KeywordChip
        reference={{
          group: 'style',
          id: 'reference',
          title: 's',
          img: '',
        }}
        isStared
        isPinned
      />
      {keywordReferences.length > 0 ? keywordReferences.length : keywordReferences.length}
      <Typography>{keywordReferences.length}</Typography>

      {keywordReferences.map((reference) => (
        <KeywordChip
          reference={{
            group: reference.group,
            id: reference.id,
            title: reference.title,
            img: reference.img,
          }}
          isStared
          isPinned
        />
      ))}
    </Box>
  );
}
