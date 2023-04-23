import { Helmet } from 'react-helmet-async';
// @mui
import { Container, Typography } from '@mui/material';
// components
import { useSettingsContext } from '../components/settings';

// ----------------------------------------------------------------------

export default function PageHistory() {
  const { themeStretch } = useSettingsContext();

  return (
    <>
      <Helmet>
        <title> History</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h3" component="h1" paragraph>
          History
        </Typography>
        Coming soon!
        <Typography gutterBottom />
      </Container>
    </>
  );
}
