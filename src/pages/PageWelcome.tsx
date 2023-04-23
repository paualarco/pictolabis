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

export default function PageWelcome() {
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
        <title> Welcome</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'md'}>
        <Typography variant="h3" component="h1" paragraph>
          Welcome
        </Typography>
      </Container>
      <Container maxWidth={themeStretch ? false : 'md'} sx={{ marginTop: '20px' }}>
        <Typography gutterBottom>Hey there! 👋🏼</Typography>

        <Typography gutterBottom>
          Thank you for checking out this site, my name is Pau Alarcón, I am a Software Engineer and
          lately having fun creating digital art using AI.
        </Typography>
        <Typography gutterBottom>
          The motivation behind this project was to practice my frontend skills building a cool web
          app that can help people to get inspired on writing original prompts. Whether you are an
          aspiring writer, an artist looking for visual inspiration, or just someone who appreciates
          the beauty of art, our contact page is here to serve you. We love to hear from our users
          and are always open to feedback, questions, or collaboration opportunities.
        </Typography>
      </Container>
    </>
  );
}
