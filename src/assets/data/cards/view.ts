import { flow } from 'lodash';
import { Group } from 'src/types/Group';
import { KeywordReference } from 'src/types/KeywordReference';

const viewGroup: Group = 'view';

export const angleDegree: KeywordReference[] = [
  {
    img: 'view/angle-degree/drone-view-20ft.webp',
    title: 'Drone view 20ft',
  },
  {
    img: 'view/angle-degree/dutch-angle.png',
    title: 'Dutch angle',
  },
  {
    img: 'view/angle-degree/extreme-angles.png',
    title: 'Extreme angle',
  },
  {
    img: 'view/angle-degree/eye-level-angle.png',
    title: 'Eye-level angle',
  },
  {
    img: 'view/angle-degree/high-angle.png',
    title: 'High angle',
  },
  {
    img: 'view/angle-degree/low-angle.png',
    title: 'Low angle',
  },
  {
    img: 'view/angle-degree/microscope.png',
    title: 'Microscope view',
  },
  {
    img: 'view/angle-degree/selfie.png',
    title: 'Selfie',
  },
  {
    img: 'view/angle-degree/top-down.png',
    title: 'Top down view',
  },
  {
    img: 'view/angle-degree/worms-eye.png',
    title: 'Worms eye view',
  },
].map((ref) => ({ ...ref, group: viewGroup, id: `view_angle-degree_${ref.title}` }));
