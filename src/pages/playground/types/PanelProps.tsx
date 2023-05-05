import { KeywordReference } from 'src/types/KeywordReference';

export type CardsActionsProps = {
  handleAddKeyword: (reference: KeywordReference) => void;
  handleRemoveKeyword: (reference: KeywordReference) => void;
};
