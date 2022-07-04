import PropTypes from 'prop-types';
// material
import { alpha, styled } from '@mui/material/styles';
import { Link, Card, Grid, Typography, CardContent } from '@mui/material';

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

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default function PostCard({ post }) {
  const { cover, title, description, postLink } = post;

  return (
    <Link
      underline="none"
      href={postLink}
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
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.5),
            },
            pt: {
              xs: 'calc(100% * 4 / 3)',
              sm: 'calc(100% * 3 / 4.66)',
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
          <Typography
            gutterBottom
            variant="subtitle2"
            sx={{ color: 'text.disabled', display: 'block' }}
          >
            {description}
          </Typography>

          <TitleStyle
            color="inherit"
            underline="hover"
            href={postLink}
            sx={{ typography: 'h4', height: 60, color: 'common.white' }}
          >
            {title}
          </TitleStyle>
        </CardContent>
      </Card>
    </Link>
  );
}
