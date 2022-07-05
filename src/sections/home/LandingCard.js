import PropTypes from 'prop-types';
// material
import { alpha, styled } from '@mui/material/styles';
import { Link, Card, Typography, CardContent } from '@mui/material';

// ----------------------------------------------------------------------

const CardMediaStyle = styled('div')({
  position: 'relative',
  paddingTop: 'calc(100% * 3 / 4)',
});

const TitleStyle = styled(Link)({
  overflow: 'hidden',
  WebkitLineClamp: 2,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
});

const CoverImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// ----------------------------------------------------------------------

LandingCard.propTypes = {
  post: PropTypes.object.isRequired,
};

export default function LandingCard({ post }) {
  const { cover, title, description, link } = post;

  return (
    <Link
      underline="none"
      href={link}
    >
      <Card sx={{ position: 'relative' }}>
        <CardMediaStyle
          sx={{
            '&:after': {
              top: 0,
              content: "''",
              width: '100%',
              height: '100%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[700], 0.4),
            },
            pt: {
              xs: 'calc(100% * 3 / 4)',
              sm: 'calc(100% * 3 / 5)',
              md: 'calc(100% * 3 / 6)',
              lg: 'calc(100% * 3 / 9)',
              xl: 'calc(100% * 3 / 12)',
            },
          }}
        >
          <CoverImgStyle alt={title} src={cover} />
        </CardMediaStyle>

        <CardContent
          sx={{
            pt: 4,
            bottom: 0,
            width: '100%',
            position: 'absolute',
          }}
        >
          
          <TitleStyle
            color="inherit"
            underline="none"
            sx={{
              typography: 'h2',
              color: 'common.white'
            }}
          >
            {title}
          </TitleStyle>

          <Typography
            sx={{
              color: 'common.white',
              overflow: 'hidden',
              WebkitLineClamp: 3,
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              typography: {
                xs: 'subtitle1',
                sm: 'h6'
              }
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
