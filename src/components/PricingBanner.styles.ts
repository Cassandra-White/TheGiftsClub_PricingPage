import { styled } from '@mui/system';
import { Typography } from '@mui/material';

export const H1 = styled('strong')(({ theme }) => ({
  fontFamily: 'Montserrat',
  fontWeight: 'bold',
  fontSize: '2.4rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '2rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.8rem',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '1.5rem',
  },
}));

export const Highlight = styled('span')({
  color: '#3f5efb',
  position: 'relative',
});

export const SubtitleText = styled(Typography)(({ theme }) => ({
  fontSize: '0.9rem',
  fontWeight: 'normal',
  lineHeight: '1rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '0.8rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.7rem',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '0.6rem',
  },
}));


