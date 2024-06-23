import { styled } from '@mui/system';
import { Typography } from '@mui/material';

export const SubtitleText = styled(Typography)({
  fontSize: '.8rem',
  fontWeight: '900rem',
  lineHeight: '1rem',
  textAlign: 'start',
});

export const BadgeImage = styled('img')({
  position: 'absolute',
  top: '-22.5px',
  right: '5px',
  zIndex: 1000,
  width: 75,
  height: 75,
});

export const CustomAddIconSVG = styled('svg')({
  top: '50%',
  width: 15,
  height: 15,
  color: '#3f5efb',
  zIndex: 1000,
});


