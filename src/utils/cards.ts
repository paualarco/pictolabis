import { KeywordReference } from 'src/types/KeywordReference';

export const referenceToCard = (ref: KeywordReference) => ({
  reference: ref,
  isLiked: false,
  isAdded: false,
  isPinned: false,
});
