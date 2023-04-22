export type CardReference = {
  id: string;
  img: string;
  title: string;
};

export type CardDetails = {
  reference: CardReference;
  isLiked: boolean;
  isAdded: boolean;
  isPinned: boolean;
};
