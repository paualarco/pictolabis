// @mui
import { Stack, Box, Button, Tooltip, Typography, ListItemText, Link } from '@mui/material';
// config
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import { StyledIcon, StyledItem } from 'src/components/nav-section/mini/styles';
import useLocalStorage from 'src/hooks/useLocalStorage';
import { defaultSettings } from 'src/components/settings/config-setting';
import { useMemo } from 'react';
import { useSettingsContext } from 'src/components/settings';
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
  const settings = useSettingsContext();
  const shortLogoPath: string = useMemo(
    () =>
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      settings.themeMode === 'light'
        ? '/assets/icons/navbar/pictolabis-short.png'
        : '/assets/icons/navbar/pictolabis-short-white.png',
    [settings]
  );
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
            src={shortLogoPath}
          />
        </Stack>
        {/* <Logo sx={{ mx: 'auto', my: 2 }} /> */}

        <NavSectionMini data={navConfig} />

        <Box sx={{ flexGrow: 1 }} />
        <Stack
          spacing={3}
          sx={{
            pb: 3,
            mt: 10,
            width: 1,
            display: 'block',
            textAlign: 'center',
          }}
        >
          <Tooltip title="Buy me a coffee">
            <Button
              target="_blank"
              size="small"
              sx={{
                // marginTop: '100%',

                backgroundColor: '#ff444c',
                '&:hover': {
                  backgroundColor: '#d01424',
                },
                textTransform: 'none',
              }}
              variant="contained"
              href="https://www.buymeacoffee.com/paualarcon"
            >
              <Stack direction="column">
                <LocalCafeIcon fontSize="small" />
              </Stack>
            </Button>
          </Tooltip>
        </Stack>
      </Stack>
    </Box>
  );
}
