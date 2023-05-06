import { Box, Typography } from '@mui/material';
import { KeywordChipReference } from 'src/types/KeywordChipReference';
import KeywordChip from './KeywordChip';

export type PromptChipsBoxProps = {
  keywordReferences: KeywordChipReference[];
  onRemove: (keywordChip: KeywordChipReference) => void;
};

export default function PromptChipsBox({ keywordReferences, onRemove }: PromptChipsBoxProps) {
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
      {/* <KeywordChip
        reference={{
          group: 'style',
          id: 'reference',
          title: 's',
          img: '',
          chipId: 
        }}
        isStared
        isPinned
      /> */}
      {keywordReferences.length > 0 ? keywordReferences.length : keywordReferences.length}
      <Typography>{keywordReferences.length}</Typography>

      {keywordReferences.map((reference) => (
        <KeywordChip
          reference={{
            group: reference.group,
            id: reference.id,
            title: reference.title,
            img: reference.img,
            chipId: reference.chipId,
          }}
          onRemove={onRemove}
          isStared
          isPinned
        />
      ))}
    </Box>
  );
}
