import { faker } from '@faker-js/faker';
// @mui
import { useTheme, styled } from '@mui/material/styles';
import { Grid, Container, Typography, Paper } from '@mui/material';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';
import PostCard from '../sections/home/PostCard';
import AppWidgetCard from '../sections/home/AppWidgetCard';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const CARD = {
  id: faker.datatype.uuid(),
  cover: `/static/mock-images/covers/cover_2.jpg`,
  title: `L'écran d'EviFli`,
  description: `En voir plus sur...`,
  postLink: `/discover`,
};

// ----------------------------------------------------------------------

export default function Home() {
  const theme = useTheme();

  return (
    <Page title="Home">
      <Container maxWidth="xl">
        <Typography variant="h3" sx={{ mb: 4 }}>
          Bienvenue sur EviFli
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 2 }}>
          L'application qui te permet d'atteindre tes objectifs de vie.
        </Typography>
        <Typography variant="subtitle2" sx={{ mb: 1 }}>
          - Vivre sainement
        </Typography>
        <Typography variant="subtitle2" sx={{ mb: 1 }}>
          - Faire attention à notre planète
        </Typography>
        <Typography variant="subtitle2" sx={{ mb: 1 }}>
          - Être plus en forme
        </Typography>
        <Typography variant="subtitle2" sx={{ mb: 5 }}>
          - Moins polluer
        </Typography>

        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} sm={6}>
            <AppWidgetCard title="Choisir mon objectif" cardLink="/objective" icon={'ant-design:android-filled'} />
          </Grid>

          <Grid item xs={12} sm={6}>
            <AppWidgetCard title="Découvrir les abonnements" cardLink="/subscribe" color="warning" icon={'ant-design:android-filled'} />
          </Grid>
          
          <Grid item xs={12} lg={6}>
            <PostCard key={CARD.id} post={CARD} index={0} />
          </Grid>

          <Grid item xs={12}>
            <AppNewsUpdate
              title="Derniers articles"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: faker.name.jobTitle(),
                description: faker.name.jobTitle(),
                image: `/static/mock-images/covers/cover_${index + 1}.jpg`,
                postedAt: faker.date.recent(),
              }))}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
