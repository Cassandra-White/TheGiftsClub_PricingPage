import React from 'react';
import { Box, Button, useTheme } from '@mui/material';
import { PeriodText, PerCentText } from './PricingPeriodSelector.styles';

const periods: [string, string | number][] = [
  ['1 Mois', 0],
  ['3 Mois', 20],
  ['6 Mois', 30],
  ['12 Mois', 40],
  ['24 Mois', 50],
];

type Period = '1 Mois' | '3 Mois' | '6 Mois' | '12 Mois' | '24 Mois';

interface PricingPeriodSelectorProps {
  selectedPeriod: Period;
  onSelectPeriod: (period: Period) => void;
}

const PricingPeriodSelector: React.FC<PricingPeriodSelectorProps> = ({
  selectedPeriod,
  onSelectPeriod,
}) => {
  const theme = useTheme();

  return (
    <Box
      mt={12}
      display="flex"
      justifyContent="center"
      gap={3}
      sx={{
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
        [theme.breakpoints.down('sm')]: {
          gap: 2,
        },
        [theme.breakpoints.down('xs')]: {
          gap: 1,
        },
      }}
    >
      {periods.map(([period, value]) => (
        <Button
          disableRipple
          key={period}
          onClick={() => onSelectPeriod(period as Period)}
          sx={{
            opacity: period === selectedPeriod ? 1 : 0.5,
            backgroundColor: 'transparent',
            '&.MuiButton-root:hover': {
              backgroundColor: 'transparent',
            },
            minWidth: '9.8rem',
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 0,
            [theme.breakpoints.down('lg')]: {
              minWidth: '6rem',
            },
            [theme.breakpoints.down('md')]: {
              minWidth: '4rem',
            },
            [theme.breakpoints.down('sm')]: {
              minWidth: '3rem',
            },
            [theme.breakpoints.down('xs')]: {
              minWidth: '1rem',
            },
          }}
        >
          <PeriodText>{period}</PeriodText>
          <Box
            sx={{
              backgroundColor: period === selectedPeriod ? '#3f5efb' : 'transparent',
              height: '0.3rem',
              width: '100%',
              marginTop: '0.5rem',
            }}
          />
          <PerCentText style={{ marginTop: '0.25rem' }}>
            {value !== 0 ? (
              <span
                style={{
                  color: period === selectedPeriod ? '#3f5efb' : '#6b7280',
                  opacity: period === selectedPeriod ? 1 : 0.5,
                }}
              >
                -{value}%
                <span style={{ color: '#6b7280', opacity: period === selectedPeriod ? 0.25 : 0.75 }}>
                  {' '}
                  / mois
                </span>
              </span>
            ) : (
              <span style={{ color: 'transparent' }}> - </span>
            )}
          </PerCentText>
        </Button>
      ))}
    </Box>
  );
};

export default PricingPeriodSelector;
