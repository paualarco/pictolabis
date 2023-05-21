import { flow } from 'lodash';
import { Group } from 'src/types/Group';
import { KeywordReference } from 'src/types/KeywordReference';

const viewGroup: Group = 'view';

export const angleDegree: KeywordReference[] = [
  {
    img: 'view/angle-degree/back-view.png',
    title: 'Back view',
  },
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
    img: 'view/angle-degree/front-view.png',
    title: 'Front view',
  },
  {
    img: 'view/angle-degree/full-body-view.png',
    title: 'Full body view view',
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
    img: 'view/angle-degree/side-view.png',
    title: 'Side view',
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

const imageRatioGroup: Group = 'image-ratio';
export const aspectRatio: KeywordReference[] = [
  {
    img: 'view/aspect-ratio/1-1.png',
    title: '1:1',
  },
  {
    img: 'view/aspect-ratio/16-9.png',
    title: '16:9',
  },

  {
    img: 'view/aspect-ratio/2-3.png',
    title: '2:3',
  },
  {
    img: 'view/aspect-ratio/3-2.png',
    title: '3:2',
  },
  {
    img: 'view/aspect-ratio/4-3.png',
    title: '4:3',
  },
  {
    img: 'view/aspect-ratio/1-3.png',
    title: '1:3',
  },
].map((ref) => ({ ...ref, group: imageRatioGroup, id: `view_aspect-ratio_${ref.title}` }));
