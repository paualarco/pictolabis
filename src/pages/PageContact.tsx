import { Helmet } from 'react-helmet-async';
// @mui
import { Avatar, Badge, Box, Container, IconButton, Stack, Typography } from '@mui/material';
// components
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedinIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useSettingsContext } from '../components/settings';

// ----------------------------------------------------------------------

export default function PageContact() {
  const { themeStretch } = useSettingsContext();
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));
  return (
    <>
      <Helmet>
        <title> Contact</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'md'}>
        <Typography variant="h3" component="h1" paragraph>
          Contact
        </Typography>
      </Container>
      <Container maxWidth={themeStretch ? false : 'md'} sx={{ marginTop: '20px' }}>
        <Typography gutterBottom>Hey there! Thanks for checking out this site. 🤗</Typography>
        <Typography gutterBottom>
          My name is Pau Alarcón, a passionate Software Engineer and lately I have been having a
          blast creating digital art with the power of AI.
        </Typography>
        <Typography gutterBottom>
          The motivation behind this project was to building a cool web app that can help artists to
          get inspired on writing original prompts.
        </Typography>
        <Typography gutterBottom>
          All feedback is much appreciated, get in touch with me and drop a ⭐ on github if you
          liked it!
        </Typography>

        <Container maxWidth="xl">
          <Stack direction="row" alignContent="center" justifyContent="center">
            <Box mt="30px" alignItems="center" justifyContent="center">
              <Stack spacing={1} direction="column" alignContent="center">
                <Stack spacing={1} direction="row" alignContent="center">
                  <IconButton
                    aria-label="twitter"
                    href="https://twitter.com/paualarco"
                    sx={{ color: '#33B2FF' }}
                  >
                    <TwitterIcon fontSize="large" />
                  </IconButton>

                  <IconButton
                    aria-label="linkedin"
                    href="https://www.linkedin.com/in/big-data-developer/"
                  >
                    <LinkedinIcon fontSize="large" sx={{ color: '#0071B6' }} />
                  </IconButton>

                  <IconButton
                    aria-label="github"
                    href="https://github.com/melics/pictolabis"
                    sx={{ color: 'black' }}
                  >
                    <GitHubIcon fontSize="large" />
                  </IconButton>
                  <IconButton
                    aria-label="instagram"
                    href="https://www.instagram.com/paualarco.ai/"
                    sx={{ color: '#FF95FD' }}
                  >
                    <InstagramIcon fontSize="large" />
                  </IconButton>
                </Stack>
                <Stack direction="row" alignContent="center" justifyContent="center">
                  <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot"
                  >
                    <Avatar
                      alt="Pau Alarcón"
                      src="/assets/images/contact/me-pixar-syle.png"
                      sx={{ width: 100, height: 100 }}
                    />
                  </StyledBadge>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Container>
    </>
  );
}
