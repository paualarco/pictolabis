import { KeywordReference } from 'src/types/KeywordReference';

export type CardsActionProps = {
  handleAddKeyword: (reference: KeywordReference) => void;
  handleRemoveKeyword: (reference: KeywordReference) => void;
  findKeywordOccurences: (id: string) => KeywordReference[];
};
