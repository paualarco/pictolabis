export type Group =
  | 'style'
  | 'subject'
  | 'qualities'
  | 'view'
  | 'shooting'
  | 'image-ratio'
  | 'artist'
  | 'stared'
  | 'text';

export type GroupColor =
  | '#D899FF' // purple
  | '#078DEE' // blue light
  | '#FFE9A0' // yellow
  | '#fda92d' // orange
  | '#89375F' // granade
  | '#27E1C1' // turquese
  | '#7635dc' // pink
  | '#e075b5' // lightorgange
  | '#B99869' // orange
  | '#ADE792' // green
  | '#FF3030' // red
  | '#FBFFA1' // yellow
  | '#228454' // darkblue
  | 'white'; // darkblue

export const groupColor: Map<Group, GroupColor> = new Map<Group, GroupColor>([
  ['style', '#7635dc'],
  ['view', '#fda92d'],
  ['subject', '#228454'],
  ['qualities', '#078DEE'],
  ['shooting', '#89375F'],
  ['image-ratio', '#FF3030'],
  ['artist', '#e075b5'],
  ['stared', '#FFE9A0'],
  ['text', 'white'],
]);

export const textColor = (group: Group) => (group === 'text' ? 'black' : 'white');
