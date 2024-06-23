import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { SubtitleText, BadgeImage, CustomAddIconSVG } from './PricingCard.styles';
import CustomAddIcon from './CustomAddIcon'; 

interface PricingCardProps {
  title: string;
  price: number;
  features: string[][];
  additionalText: string;
  isHighlighted?: boolean;
  isCustom?: boolean;
  discount: number;
  isPremium?: boolean;
  isStandard?: boolean;
}


const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  features,
  additionalText,
  isHighlighted,
  isCustom,
  discount,
  isStandard,
  isPremium,
}) => {
  const discountedPrice = Math.floor(price - (price * discount) / 100);

  return (
    <Card
      variant="outlined"
      sx={{
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: isPremium ? '#3f5efb' : 'grey.400',
        borderWidth: isHighlighted ? 2 : 1,
        backgroundColor: isPremium ? '#f0f3ff' : 'transparent',
        minHeight: isPremium ? '700px' : '600px',
        alignSelf: 'center',
        boxShadow: isPremium ? '-25px 0px 50px rgba(0, 0, 0, 0.24)' : 'none',
        padding: 2,
        overflow: 'visible',

      }}
    >      {isPremium && (
        <BadgeImage src="/images/BookmarkSimple.png" alt="Premium Badge" />
      )}
      <CardContent>
        <Typography mb={isPremium ? 2 : 4} mt={1} variant="h1" component="div" sx={isPremium ? { color: '#3f5efb', fontSize: '1.85rem' } : { fontWeight: 'bolder' }}>
          {title}
        </Typography>

        {isPremium && (
          <Typography variant="h3" sx={{ color: '#3f5efb', fontSize: '3.5rem' }}>
            {discount > 0 ? `${discountedPrice}€` : `${price}€`} {discountedPrice !== price && (<span style={{ color: '#000000', fontSize: '1rem', fontWeight: 'normal', opacity: 0.5 }}>/mois</span>)}
          </Typography>
        )}

        {isStandard && (
          <Typography variant="h3" sx={{ fontSize: '2.25rem' }}>
            {discount > 0 ? `${discountedPrice}€` : `${price}€`} {discountedPrice !== price && (<span style={{ color: '#000000', fontSize: '1rem', fontWeight: 'normal', opacity: 0.5 }}>/mois</span>)}
          </Typography>
        )}

{isCustom && (
          <Box display="flex" alignItems="center" justifyContent="center" >
            <CustomAddIconSVG>
                <CustomAddIcon  />
            </CustomAddIconSVG>
            <img src="/images/Buildings.png" alt="Custom Badge" style={{ width: 74, height: 74 }} />
          </Box>
        )}
        

        {(isPremium || isStandard) && discountedPrice !== price && (
          <Typography variant="h6" sx={isPremium ? { color: '#3f5efb' } : { opacity: 0.5 }}>
            {`${price}€`}/mois
          </Typography>
        )}

        <Box mt={isPremium ? 10 : 6} mb={6} sx={{ textAlign: 'left' }}>
          {features.map(([description, icon], index) => (
            <Box key={index} display="flex" alignItems="center" mb={isCustom ? 3 : 1.5}>
              <img src={`/images/${icon}.png`} alt={`Icon ${icon}`} style={{ width: 24, height: 24, marginRight: 25 }} />
              <Typography variant="body2">{description}</Typography>
            </Box>
          ))}
        </Box>
            
        <SubtitleText mt={5}>
          {additionalText}
        </SubtitleText>

        <Box mb={4} mt={isStandard ? 13 : isPremium ? 10 : 9} textAlign="center">
          {isPremium ? (
            <Button variant="contained"  style={{border:"solid 0.125rem", fontWeight:'bolder', boxShadow: '5px 5px 1px rgba(94, 12, 171, 1)', backgroundColor:"#f59000", borderColor:"#5e0cab"}}>
              Je sélectionne cette offre
            </Button>
          ) : (
            <Button variant="outlined" style={{border:"solid 0.125rem", fontWeight:'bolder', boxShadow: '5px 5px 1px rgba(94, 12, 171, 1)', color:"#000000", borderColor:"#5e0cab"}}>
              {isStandard ? "Je sélectionne cette offre" : "Demander un Devis" }              
            </Button>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default PricingCard;
