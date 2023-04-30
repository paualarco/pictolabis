export type Group =
  | 'style'
  | 'subject'
  | 'qualities'
  | 'view'
  | 'shooting'
  | 'image-ratio'
  | 'artist'
  | 'stared';

export type GroupColor =
  | '#7635dc' // purple
  | '#62CDFF' // blue light
  | '#FFE9A0' // yellow
  | '#fda92d' // orange
  | '#89375F' // granade
  | '#27E1C1' // turquese
  | '#FFACAC' // pink
  | '#ADE792'
  | '#E0144C';

export const groupColor: Map<Group, GroupColor> = new Map<Group, GroupColor>([
  ['style', '#7635dc'],
  ['view', '#ADE792'],
  ['subject', '#27E1C1'],
  ['qualities', '#FFACAC'],
  ['shooting', '#89375F'],
  ['image-ratio', '#E0144C'],
  ['artist', '#62CDFF'],
  ['stared', '#FFE9A0'],
]);
