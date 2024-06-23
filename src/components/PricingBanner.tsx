import React from 'react';
import { Box, Typography } from '@mui/material';
import { H1, Highlight, SubtitleText } from './PricingBanner.styles';
import './PricingBanner.css';

const PricingBanner: React.FC = () => {
  return (
    <Box textAlign="center" mt={5} className="pricing-banner">
            <H1>
        DÉCOUVREZ <Highlight>NOS OFFRES
          <img src="/images/Group-470.png" alt="Stars" className="stars" />
          <img src="/images/Ellipse-651.png" alt="Circle" className="circle" />
        </Highlight>
      </H1>
      <Typography mt={5} className="subtitle">
        <SubtitleText>
          Trouvez le plan parfait pour votre entreprise parmi nos différentes options d'abonnement mensuel, trimestriel, semestriel, annuel et biennal.
        </SubtitleText>
      </Typography>
    </Box>
  );
};

export default PricingBanner;
