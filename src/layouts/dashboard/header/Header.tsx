// @mui
import { useTheme } from '@mui/material/styles';
import { Stack, AppBar, Toolbar, IconButton } from '@mui/material';
// utils
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import LinkedinIcon from '@mui/icons-material/LinkedIn';

import useLocalStorage from 'src/hooks/useLocalStorage';
import { useCallback } from 'react';
import { SettingsContext } from 'src/components/settings/SettingsContext';
import { bgBlur } from '../../../utils/cssStyles';
// hooks
import useOffSetTop from '../../../hooks/useOffSetTop';
import useResponsive from '../../../hooks/useResponsive';
// config
import { HEADER, NAV } from '../../../config-global';
// components
import Logo from '../../../components/logo';
import Iconify from '../../../components/iconify';
import { useSettingsContext } from '../../../components/settings';
//
import Searchbar from './Searchbar';
import AccountPopover from './AccountPopover';
import LanguagePopover from './LanguagePopover';
import ContactsPopover from './ContactsPopover';
import NotificationsPopover from './NotificationsPopover';

// ----------------------------------------------------------------------

type Props = {
  onOpenNav?: VoidFunction;
};

export default function Header({ onOpenNav }: Props) {
  const theme = useTheme();

  const { themeLayout, themeMode } = useSettingsContext();

  const isNavHorizontal = themeLayout === 'horizontal';

  const isNavMini = themeLayout === 'mini';

  const isDesktop = useResponsive('up', 'lg');

  const isOffset = useOffSetTop(HEADER.H_DASHBOARD_DESKTOP) && !isNavHorizontal;

  const currentSettings = useSettingsContext();

  // const [settings, setSettings] = useLocalStorage('settings', currentSettings);

  // const mode: string = useMemo(
  //   () =>
  //     // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  //     settings.themeMode === 'light'
  //       ? '/assets/icons/navbar/pictolabis-short.png'
  //       : '/assets/icons/navbar/pictolabis-short-white.png',
  //   [settings]
  // );

  // const onToggleMode = useCallback(() => {
  //   const mode = settings.themeMode === 'light' ? 'dark' : 'light';
  //   console.log(`changing mode to ${mode}`);
  //   setSettings({ ...settings, mode });
  // }, [setSettings, settings]);

  const renderContent = (
    <>
      {isDesktop && isNavHorizontal && <Logo sx={{ mr: 2.5 }} />}

      {!isDesktop && (
        <IconButton onClick={onOpenNav} sx={{ mr: 1, color: 'text.primary' }}>
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>
      )}

      <Searchbar />

      <Stack
        flexGrow={1}
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        spacing={{ xs: 0.5, sm: 1.5 }}
      >
        <IconButton aria-label="linkedin" onClick={currentSettings.onToggleMode}>
          {themeMode === 'light' ? (
            <DarkModeIcon fontSize="medium" sx={{ color: 'black' }} />
          ) : (
            <LightModeIcon fontSize="medium" sx={{ color: 'white' }} />
          )}
        </IconButton>
        <LanguagePopover />

        <IconButton
          target="_blank"
          aria-label="linkedin"
          href="https://www.linkedin.com/in/paualarcon/"
        >
          <LinkedinIcon fontSize="large" sx={{ color: '#0071B6' }} />
        </IconButton>

        {/* <NotificationsPopover /> */}

        {/* <ContactsPopover /> */}

        <AccountPopover />
      </Stack>
    </>
  );

  return (
    <AppBar
      sx={{
        boxShadow: 'none',
        height: HEADER.H_MOBILE,
        zIndex: theme.zIndex.appBar + 1,
        ...bgBlur({
          color: theme.palette.background.default,
        }),
        transition: theme.transitions.create(['height'], {
          duration: theme.transitions.duration.shorter,
        }),
        ...(isDesktop && {
          width: `calc(100% - ${NAV.W_DASHBOARD + 1}px)`,
          height: HEADER.H_DASHBOARD_DESKTOP,
          ...(isOffset && {
            height: HEADER.H_DASHBOARD_DESKTOP_OFFSET,
          }),
          ...(isNavHorizontal && {
            width: 1,
            bgcolor: 'background.default',
            height: HEADER.H_DASHBOARD_DESKTOP_OFFSET,
            borderBottom: `dashed 1px ${theme.palette.divider}`,
          }),
          ...(isNavMini && {
            width: `calc(100% - ${NAV.W_DASHBOARD_MINI + 1}px)`,
          }),
        }),
      }}
    >
      <Toolbar
        sx={{
          height: 1,
          px: { lg: 5 },
        }}
      >
        {renderContent}
      </Toolbar>
    </AppBar>
  );
}
