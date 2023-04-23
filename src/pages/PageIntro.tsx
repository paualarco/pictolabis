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

export default function PageIntro() {
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

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h3" component="h1" paragraph>
          Contact
        </Typography>
      </Container>
      <Container maxWidth={themeStretch ? false : 'md'} sx={{ marginTop: '60px' }}>
        <Typography gutterBottom>Hey there! 👋🏼</Typography>

        <Typography gutterBottom>
          Thank you for checking out this site, my name is Pau Alarcón, I am a Software Engineer and
          lately having fun creating digital art using AI.
        </Typography>
        <Typography gutterBottom>
          The motivation behind this project was to practice my frontend skills building a cool web
          app that can help people to get inspired on writing original prompts.
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
                  <IconButton aria-label="twitter" href="https://twitter.com/paualarco">
                    <TwitterIcon fontSize="large" />
                  </IconButton>

                  <IconButton
                    aria-label="linkedin"
                    href="https://www.linkedin.com/in/big-data-developer/"
                  >
                    <LinkedinIcon fontSize="large" />
                  </IconButton>

                  <IconButton aria-label="github" href="https://github.com/melics/pictolabis">
                    <GitHubIcon fontSize="large" />
                  </IconButton>
                  <IconButton aria-label="instagram" href="https://www.instagram.com/paualarco.ai/">
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
