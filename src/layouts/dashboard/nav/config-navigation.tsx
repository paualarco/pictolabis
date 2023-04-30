// routes
import SchemaIcon from '@mui/icons-material/Schema';
import { PATH_DASHBOARD } from '../../../routes/paths';
// components
import SvgColor from '../../../components/svg-color';
// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
  user: icon('ic_user'),
  ecommerce: icon('ic_ecommerce'),
  analytics: icon('ic_analytics'),
  dashboard: icon('ic_dashboard'),
  playground: icon('ic_menu_item'),
  file: icon('ic_file'),
  folder: icon('ic_folder'),
  label: icon('ic_label'),
  chart: <SchemaIcon />,
};

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: '',
    items: [
      { title: 'Welcome', path: PATH_DASHBOARD.welcome, icon: ICONS.label },
      { title: 'Playground', path: PATH_DASHBOARD.playground, icon: ICONS.playground },
      { title: 'Categorization', path: PATH_DASHBOARD.chart, icon: ICONS.chart },
      { title: 'History', path: PATH_DASHBOARD.history, icon: ICONS.file },
      { title: 'Contact', path: PATH_DASHBOARD.contact, icon: ICONS.user },
    ],
  },

  // MANAGEMENT
  // ----------------------------------------------------------------------
  /* {
    subheader: 'Personal',
    items: [
      {
        title: 'user',
        path: PATH_DASHBOARD.user.root,
        icon: ICONS.user,
        children: [
          { title: 'Four', path: PATH_DASHBOARD.user.four },
          { title: 'Five', path: PATH_DASHBOARD.user.five },
          { title: 'Six', path: PATH_DASHBOARD.user.six },
        ],
      },
    ],
  }, */
];

export default navConfig;
