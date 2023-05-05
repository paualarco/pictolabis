import { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
// @mui
import { Box, Stack, Drawer, Typography, Button } from '@mui/material';
// hooks
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import { useSettingsContext } from 'src/components/settings';
import useResponsive from '../../../hooks/useResponsive';
// config
import { NAV } from '../../../config-global';
// components
import Scrollbar from '../../../components/scrollbar';
import { NavSectionVertical } from '../../../components/nav-section';
//
import navConfig from './config-navigation';
import NavToggleButton from './NavToggleButton';
// ----------------------------------------------------------------------

type Props = {
  openNav: boolean;
  onCloseNav: VoidFunction;
};

export default function NavVertical({ openNav, onCloseNav }: Props) {
  const { pathname } = useLocation();

  const isDesktop = useResponsive('up', 'lg');
  const settings = useSettingsContext();
  const logoPath: string = useMemo(
    () =>
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      settings.themeMode === 'light'
        ? '/assets/icons/navbar/pictolabis-long.png'
        : '/assets/icons/navbar/pictolabis-long-white.png',
    [settings]
  );
  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': {
          height: 1,
          display: 'flex',
          flexDirection: 'column',
        },
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
          // sx={{
          //   height: 20,
          //   width: 350,
          //   maxHeight: { xs: 233, md: 167 },
          //   maxWidth: { xs: 350, md: 250 },
          // }}
          alt="pictolabis"
          src={logoPath}
        />

        {/* <Box
          component="img"
          sx={{
            marginLeft: 2,
            height: 50,
            width: 40,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt="pictolabis logo"
          src="/assets/icons/navbar/logo.png"
        /> */}
        {/* <Logo /> */}
        {/* <NavAccount /> */}
      </Stack>
      <NavSectionVertical data={navConfig} />

      <Box sx={{ flexGrow: 1 }} />
      <Stack
        spacing={3}
        sx={{
          px: 5,
          pb: 5,
          mt: 10,
          width: 1,
          display: 'block',
          textAlign: 'center',
        }}
      >
        <Button
          size="small"
          sx={{
            backgroundColor: '#ff444c',
            '&:hover': {
              backgroundColor: '#d01424',
            },
            textTransform: 'none',
          }}
          variant="contained"
          href="https://www.patreon.com/paualarco"
          endIcon={
            <LocalCafeIcon />
            // <Image
            //   disabledEffect
            //   src="/assets/icons/navbar/Digital-Patreon-Logo_White.png"
            //   alt="patreon"
            //   sx={{ height: 25, width: 25 }}
            // />
          }
        >
          Buy me a coffee
        </Button>
      </Stack>
      {/* <NavDocs /> */}
    </Scrollbar>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.W_DASHBOARD },
      }}
    >
      <NavToggleButton />

      {isDesktop ? (
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              zIndex: 0,
              width: NAV.W_DASHBOARD,
              bgcolor: 'transparent',
              borderRightStyle: 'dashed',
            },
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: {
              width: NAV.W_DASHBOARD,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}
