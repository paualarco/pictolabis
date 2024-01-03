import { Helmet } from 'react-helmet-async';
// @mui
import { Avatar, Badge, Box, Container, IconButton, Stack, Typography } from '@mui/material';
// components
import { styled } from '@mui/material/styles';
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

  const titleWhyPictolabis = "Why 'Pictolabis'?";

  const paragraph3_1 = `A composition between 'picto' which is derived from picture and 'lab' which derives from laboratory, together forming a 'picto laboratory'.`;
  const paragraph3_2 =
    "On the other hand, it also draws a similarity to 'piscolabis' a term that comes from Spain and refers to a light snack or appetizer. Thus, 'Pictolabis' could be interpreted as a tool that provides bit-sized, appetizing prompts for generating images or pictures.";

  const paragraphWhoIsItFor =
    'Whether you are a professional artist or just someone who loves to create, our web app is here to support your creative process by generating prompts that will ignite your imagination.🔥';


  // Creating effective prompts for AI-generated image generation is crucial for achieving desired results.
  const paragraphStateOfTheArt1 =
    "A prompt serves as a guiding instruction that directs the AI model's output. But humans are still responsible of writing good prompts. Which is not as trivial, there are a bast variety of keywords, styles, attributes and many other parameters that can have an impact to the result.";
  const paragraphStateOfTheArt2 =
    'Thus, Pictolabis helps inspiring users to come up with original prompts and refine creative ideas to generate unique and diverse images.';

  const paragraphStateOfTheArt3 =
    'It serves as a catalyst for sparking creativity and pushing the boundaries of what is possible in image generation, just like how a tasty appetizer can whet your appetite for more culinary delights.';
  //    'The app could offer a variety of creative prompts, such as keywords, phrases, or visual cues, that can inspire users to come up with original and imaginative ideas for generating images using AI or other tools. It could serve as a catalyst for sparking creativity and pushing the boundaries of what is possible in image generation, just like how a tasty appetizer can whet your appetite for more culinary delights.';

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
        <Typography gutterBottom>Welcome to Pictolabis!👋🏼</Typography>
        <Typography gutterBottom>
          This is an open-source resource for your artistic endeavors.
          An image prompt explorer, designed to provide a bast set of classified keywords
          that spark your creativity and help write original and inspiring prompts.💡🤖
        </Typography>
        <Typography gutterBottom variant="h6" marginTop={2}>
          Motivation
        </Typography>
        <Typography>{paragraphStateOfTheArt1}</Typography>
        <Typography>{paragraphStateOfTheArt2}</Typography>
        <Typography>{paragraphStateOfTheArt3}</Typography>

        <Typography gutterBottom variant="h6" marginTop={2}>
          {titleWhyPictolabis}
        </Typography>
        <Typography>It is a creative and unique name for two 2 reasons:</Typography>

        <Container maxWidth="md">
          <Typography>1. {paragraph3_1}</Typography>

          <Typography>2. {paragraph3_2}</Typography>
        </Container>

        <Typography gutterBottom variant="h6" marginTop={2}>
          Who is it for?
        </Typography>
        <Typography>{paragraphWhoIsItFor}</Typography>
        <Typography gutterBottom variant="h6" marginTop={2}>
          Enjoy!
        </Typography>
        <Typography gutterBottom>
          Get ready to explore endless possibilities and unlock your artistic potential with our
          image prompt generator. Happy creating! 🎨🌈
        </Typography>
      </Container>
    </>
  );
}
