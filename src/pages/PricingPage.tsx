import React, { useState } from 'react';
import { Container, CssBaseline, Grid } from '@mui/material';
import PricingBanner from '../components/PricingBanner';
import PricingPeriodSelector from '../components/PricingPeriodSelector';
import PricingCard from '../components/PricingCard';

const periods = {
  '1 Mois': 0,
  '3 Mois': 20,
  '6 Mois': 30,
  '12 Mois': 40,
  '24 Mois': 50,
};

type Period = keyof typeof periods;

const pricingData = [
  {
    title: 'Standard',
    price: 169,
    features: [
      ["Accès aux jeux en version non personnalisés", "Check"],
      ["3 actions disponibles", "Check"],
      ["Sélection de l'ordre de priorité des actions", "Check"],
      ["Sélection des cadeaux", "Check"],
      ["Choix limité de pictogrammes pour vos jeux", "Check"],
      ["Accès au tableau de bord pour suivre vos activités", "Check"]
    ],
    additionalText: "",
    isStandard: true,
    boxStyles: { padding: "1rem" }
  },
  {
    title: 'Premium',
    price: 199,
    features: [
      ["3 actions disponibles", "Check"],
      ["Sélection de l'ordre de priorité des actions", "Check"],
      ["Sélection des cadeaux", "Check"],
      ["Accès au tableau de bord pour suivre vos activités", "Check"],
      ["Accès aux jeux en version personnalisés", "PlusCircle"],
      ["Intégration de vos couleurs dans les jeux", "PlusCircle"],
      ["Intégration de votre logo dans les jeux", "PlusCircle"],
      ["Intégration de vos pictogrammes dans les jeux", "PlusCircle"]
    ],
    additionalText: "",
    isPremium: true,
    boxStyles: { padding: "0.5rem" }
  },
  {
    title: 'Sur Devis',
    price: 0,
    features: [
      ["Vous avez plusieurs établissements ?", "ArrowRight"],
      ["Vous souhaitez un jeu sur mesure à l'effigie de votre marque ?", "ArrowRight"],
      ["Vous souhaitez une intégration caisse ?", "ArrowRight"]
    ],
    additionalText: "Un devis sur mesure est nécessaire pour répondre avec précision aux besoins spécifiques de votre réseau d'établissements et assurer une intégration harmonieuse.",
    isCustom: true,
    boxStyles: { padding: "1rem" }
  },
];

const PricingPage: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<Period>('1 Mois');

  return (
    <Container maxWidth="lg">
      <CssBaseline />
      <PricingBanner />
      <PricingPeriodSelector selectedPeriod={selectedPeriod} onSelectPeriod={setSelectedPeriod} />
      <Grid container mt={20} direction="row" justifyContent="space-between" alignItems="center" spacing={6} >
        {pricingData.map((data) => (
          <Grid key={data.title} item xs={12} sm={12} md={6} lg={4}>
            <PricingCard
              title={data.title}
              price={data.price}
              features={data.features}
              additionalText={data.additionalText}
              discount={periods[selectedPeriod]}
              isHighlighted={data.title === 'Pro'}
              isCustom={data.isCustom}
              isPremium={data.isPremium}
              isStandard={data.isStandard}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PricingPage;
