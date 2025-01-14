import { faker } from '@faker-js/faker';
// @mui
import { useTheme, styled } from '@mui/material/styles';
import { Grid, Container, Paper } from '@mui/material';
// components
import Page from '../components/Page';
// sections
import {
  AppNewsUpdate,
} from '../sections/@dashboard/app';
import PostCard from '../sections/home/PostCard';
import LandingCard from '../sections/home/LandingCard';
import AppWidgetCard from '../sections/home/AppWidgetCard';


const CARD = {
  id: faker.datatype.uuid(),
  cover: `/static/mock-images/covers/cover_2.jpg`,
  title: `L'écran d'EviFli`,
  description: `En voir plus sur...`,
  postLink: `/discover`,
};

const LANDING = {
  id: faker.datatype.uuid(),
  cover: `/static/mock-images/covers/cover_16.jpg`,
  title: `Bienvenue sur EviFli`,
  description: `Un coach intelligent qui t'accompagne pour atteindre tes objectifs :
  Forme, 
  Santé, 
  Sport, 
  Environnement`,
  postLink: null,
};

// ----------------------------------------------------------------------

export default function Home() {
  const theme = useTheme();

  return (
    <Page title="Home">
      <Container>
        <Grid container maxWidth="lg" spacing={3} alignItems="center">
        
          <Grid item xs={12}>        
            <LandingCard key={LANDING.id} post={LANDING} index={0} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AppWidgetCard title="Choisir mon objectif" cardLink="/objective" color="error" icon={'ant-design:fire-filled'} />
          </Grid>

          <Grid item xs={12} sm={6}>
            <AppWidgetCard title="Découvrir les abonnements" cardLink="/plan" color="warning" icon={'ant-design:shop-filled'} />
          </Grid>
          
          <Grid item xs={12}>
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
