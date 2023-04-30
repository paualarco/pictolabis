import { CardReference } from './CardReference';

export type CardDetails = {
  reference: CardReference;
  isLiked: boolean;
  isAdded: boolean;
  isPinned: boolean;
};
