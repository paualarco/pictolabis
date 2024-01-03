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

  const aboutMe =
    "My name is Pau Alarcón, a passionate Software Engineer - I love morning coffee and try to taking cold showers without success. My spare time is filled with exercise and mountains walks with my two adorable pups.";

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
        <Typography variant="h6" gutterBottom>
          About me
        </Typography>
        <Typography gutterBottom />
        <Typography gutterBottom>{aboutMe}</Typography>
        <Typography variant="h6" gutterBottom>
          Motivation
        </Typography>
        <Typography gutterBottom>
          Lately I have been having a fun creating digital art with the power of AI. Which
          motivated me to building an app to help myself and others to come up with original
          prompts. While also practicing my frontend development skills.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Feedback
        </Typography>
        <Typography gutterBottom>
          All the feedback is much appreciated, please keep in touch! 📩
        </Typography>

        <Container maxWidth="xl">
          <Stack direction="row" alignContent="center" justifyContent="center">
            <Box mt="30px" alignItems="center" justifyContent="center">
              <Stack spacing={1} direction="column" alignContent="center">
                <Stack spacing={1} direction="row" alignContent="center">
                  <IconButton
                    target="_blank"
                    aria-label="twitter"
                    href="https://twitter.com/paualarco"
                    sx={{ color: '#33B2FF' }}
                  >
                    <TwitterIcon fontSize="large" />
                  </IconButton>

                  <IconButton
                    target="_blank"
                    aria-label="linkedin"
                    href="https://www.linkedin.com/in/paualarcon/"
                  >
                    <LinkedinIcon fontSize="large" sx={{ color: '#0071B6' }} />
                  </IconButton>

                  <IconButton
                    target="_blank"
                    aria-label="github"
                    href="https://github.com/paualarco"
                    sx={{ color: 'black' }}
                  >
                    <GitHubIcon fontSize="large" />
                  </IconButton>
                  <IconButton
                    target="_blank"
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
                      src="/assets/images/contact/me.jpeg"
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
