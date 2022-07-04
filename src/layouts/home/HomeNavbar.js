// material
import { alpha, styled } from '@mui/material/styles';
import { Box, AppBar, Toolbar, Link } from '@mui/material';

// ----------------------------------------------------------------------

const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 80;

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)',
  backgroundColor: alpha(theme.palette.background.default, 0.72),
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  justifyContent: 'space-between',
  backgroundColor: alpha(theme.palette.primary.main, 0.9),
  [theme.breakpoints.up('lg')]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

const BoxStyle = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    display: 'flex', 
    flex: 1,
  },
}));

const rightLink = {
  ml: 3,
};

// ----------------------------------------------------------------------

export default function HomeNavbar() {
  return (
    <RootStyle>
      <ToolbarStyle>
      <BoxStyle/>
          <Link
            variant="h4"
            underline="none"
            color="inherit"
            href="/home/"
          >
            {'EviFli'}
          </Link>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              color="inherit"
              variant="h6"
              underline="hover"
              href="/login/"
              sx={rightLink}
            >
              {'Login'}
            </Link>
            <Link
              variant="h6"
              underline="hover"
              href="/register/"
              sx={{ ...rightLink, color: 'secondary.main' }}
            >
              {'Register'}
            </Link>
          </Box>
      </ToolbarStyle>
    </RootStyle>
  );
}
