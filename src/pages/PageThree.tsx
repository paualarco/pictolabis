import { Helmet } from 'react-helmet-async';
// @mui
import { Container, Typography } from '@mui/material';
// components
import { useSettingsContext } from '../components/settings';

// ----------------------------------------------------------------------

export default function PageThree() {
  const { themeStretch } = useSettingsContext();

  return (
    <>
      <Helmet>
        <title> Metrics</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h3" component="h1" paragraph>
          Metrics
        </Typography>

        <Typography gutterBottom>Coming soon!</Typography>
      </Container>
    </>
  );
}
