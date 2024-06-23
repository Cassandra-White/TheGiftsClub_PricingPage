import { styled } from '@mui/system';

export const PeriodText = styled('strong')(({ theme }) => ({
  fontFamily: 'Montserrat',
  fontWeight: '900',
  fontSize: '1.05rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9rem',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '0.8rem',
  },
}));

export const PerCentText = styled('strong')(({ theme }) => ({
  fontFamily: 'Montserrat',
  fontWeight: '550',
  fontSize: '0.8rem',
  color: '#6b7280',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.7rem',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '0.6rem',
  },
}));
