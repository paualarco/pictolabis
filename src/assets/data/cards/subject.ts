import { flow } from 'lodash';
import { Group } from 'src/types/Group';
import { KeywordReference } from 'src/types/KeywordReference';

const subjectGroup: Group = 'subject';

export const flowers: KeywordReference[] = [
  {
    img: 'subject/nature/flowers/carnation.png',
    title: 'Carnation',
  },
  {
    img: 'subject/nature/flowers/chrysanthemum.png',
    title: 'Chrysanthemum',
  },
  {
    img: 'subject/nature/flowers/daffodil.png',
    title: 'Daffodil',
  },
  {
    img: 'subject/nature/flowers/daisy.png',
    title: 'Daisy',
  },
  {
    img: 'subject/nature/flowers/gerbera.png',
    title: 'Gerbera',
  },
  {
    img: 'subject/nature/flowers/hydrangea.png',
    title: 'Hydrangea',
  },
  {
    img: 'subject/nature/flowers/iris.png',
    title: 'Iris',
  },
  {
    img: 'subject/nature/flowers/jasmine.png',
    title: 'Jasmine',
  },
  {
    img: 'subject/nature/flowers/lavender.png',
    title: 'Lavender',
  },
  {
    img: 'subject/nature/flowers/lily.png',
    title: 'Lily',
  },
  {
    img: 'subject/nature/flowers/marigold.png',
    title: 'Marigold',
  },
  {
    img: 'subject/nature/flowers/orchid.png',
    title: 'Orchid',
  },
  {
    img: 'subject/nature/flowers/pansy.png',
    title: 'Pansy',
  },
  {
    img: 'subject/nature/flowers/peony.png',
    title: 'Peony',
  },
  {
    img: 'subject/nature/flowers/poppy.png',
    title: 'Poppy',
  },
  {
    img: 'subject/nature/flowers/rose.png',
    title: 'Rose',
  },
  {
    img: 'subject/nature/flowers/snapdragon.png',
    title: 'Snapdragon',
  },
  {
    img: 'subject/nature/flowers/sunflower.png',
    title: 'Sunflower',
  },
  {
    img: 'subject/nature/flowers/tulip.png',
    title: 'Tulip',
  },
  {
    img: 'subject/nature/flowers/violet.png',
    title: 'Violet',
  },
].map((ref) => ({ ...ref, group: subjectGroup, id: `subject_nature_flowers_${ref.title}` }));
