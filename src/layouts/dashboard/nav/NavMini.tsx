// @mui
import { Stack, Box } from '@mui/material';
// config
import { NAV } from '../../../config-global';
// utils
import { hideScrollbarX } from '../../../utils/cssStyles';
// components
import Logo from '../../../components/logo';
import { NavSectionMini } from '../../../components/nav-section';
//
import navConfig from './config-navigation';
import NavToggleButton from './NavToggleButton';

// ----------------------------------------------------------------------

export default function NavMini() {
  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.W_DASHBOARD_MINI },
      }}
    >
      <NavToggleButton
        sx={{
          top: 22,
          left: NAV.W_DASHBOARD_MINI - 12,
        }}
      />

      <Stack
        sx={{
          pb: 2,
          height: 1,
          position: 'fixed',
          width: NAV.W_DASHBOARD_MINI,
          borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
          ...hideScrollbarX,
        }}
      >
        <Stack
          spacing={3}
          sx={{
            pt: 3,
            pb: 2,
            px: 2.5,
            flexShrink: 0,
          }}
          direction="row"
        >
          <Box
            component="img"
            sx={{
              marginTop: 1,
              marginLeft: 1,
              height: 45,
              width: 36,
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
            }}
            alt="pictolabis logo"
            src="/assets/icons/navbar/logo.png"
          />
        </Stack>
        {/* <Logo sx={{ mx: 'auto', my: 2 }} /> */}

        <NavSectionMini data={navConfig} />
      </Stack>
    </Box>
  );
}
