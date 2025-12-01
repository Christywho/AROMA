import React, { useMemo } from 'react';
import { Box, Typography, Grid2, List, ListItem, ListItemIcon, ListItemText, Divider, Button, Stack, Paper, Card, useTheme, useMediaQuery } from '@mui/material';
import { useParams, Link } from 'react-router-dom';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import {
  Favorite as HeartIcon,
  Psychology as BrainIcon,
  Shield as ShieldIcon,
  LocalHospital as BandageIcon,
  Restaurant as UtensilsIcon,
  Opacity as DropletIcon,
  ContentCut as HarvestIcon,
  Public as LocationIcon,
  ArrowBack as ArrowBackIcon
} from '@mui/icons-material';
import FeedBack from '../components/PlantInfor/Feedback'
import PlantGoogleMap from '../components/PlnatInfo/PlantGoogleMap';
import { plants } from '../data/plants';

export default function PlantInfoPage() {
  const { id } = useParams();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const diseasesRef = React.useRef(null);
  const usesRef = React.useRef(null);
  const cultivationRef = React.useRef(null);
  const harvestingRef = React.useRef(null);
  const locationRef = React.useRef(null);

  const handleScroll = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'center', });
    }
  };

  const plant = useMemo(() => {
    return plants.find(p => p.id === parseInt(id));
  }, [id]);

  if (!plant) {
    return (
      <Box sx={{ p: 4, textAlign: 'center', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h4" color="error" gutterBottom>Plant Not Found</Typography>
        <Typography variant="body1" mb={2}>The plant you are looking for does not exist or has been removed.</Typography>
        <Button variant="contained" color="primary" component={Link} to="/explore" startIcon={<ArrowBackIcon />}>
          Back to Explore
        </Button>
      </Box>
    );
  }

  return (
    <Box display={'flex'} sx={{ backgroundColor: '#defff0', width: '100%', minHeight: '100vh' }}>
      {/* Sidebar Navigation (Desktop) */}
      {!isMobile && (
        <Stack spacing={1} width={'15%'} mt={4} m={'1.5rem'}>
          <Stack spacing={1} position={'fixed'} width={'15%'}>
            <Button startIcon={<ArrowBackIcon />} color='success' sx={{ mb: 2, justifyContent: 'flex-start' }} component={Link} to="/explore">
              Back
            </Button>
            <Typography variant='h5' fontWeight={'600'}>
              Contents:
            </Typography>
            {plant.diseasesCured && <Button color='success' variant='outlined' onClick={() => handleScroll(diseasesRef)}>Diseases Cured</Button>}
            {plant.uses && <Button color='success' variant='outlined' onClick={() => handleScroll(usesRef)}>Uses</Button>}
            {plant.cultivation && <Button color='success' variant='outlined' onClick={() => handleScroll(cultivationRef)}>Cultivation</Button>}
            {plant.harvesting && <Button color='success' variant='outlined' onClick={() => handleScroll(harvestingRef)}>Harvesting</Button>}
            {plant.whereToFind && <Button color='success' variant='outlined' onClick={() => handleScroll(locationRef)}>Where to Find</Button>}
          </Stack>
        </Stack>
      )}

      <Box sx={{ p: isMobile ? 2 : 4 }} m={'auto'} width={isMobile ? '100%' : '75%'}>
        {/* Back Button (Mobile) */}
        {isMobile && (
          <Button startIcon={<ArrowBackIcon />} color='success' sx={{ mb: 2 }} component={Link} to="/explore">
            Back to Explore
          </Button>
        )}

        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection="column">
          <Card sx={{ width: isMobile ? '100%' : '20rem', height: '20rem', backgroundColor: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
            {plant.hasModel ? (
              <Box sx={{ transform: 'scale(1)' }}>{plant.model}</Box>
            ) : (
              <img src={plant.img} alt={plant.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            )}
          </Card>
        </Box>

        {/* Heading */}
        <Typography variant={isMobile ? "h4" : "h3"} align="center" color='success.main' sx={{ fontWeight: 'bold', mb: 1 }}>
          {plant.title}
        </Typography>
        <Typography variant="h6" align="center" fontStyle="italic" color="text.secondary" gutterBottom>
          {plant.botanicalName}
        </Typography>
        <Typography variant="body1" align="center" sx={{ maxWidth: '800px', mx: 'auto', mb: 4 }}>
          {plant.description}
        </Typography>

        <Divider sx={{ my: 4 }} />

        {/* Diseases Cured Section */}
        {plant.diseasesCured && (
          <>
            <Typography color='success.dark' variant="h4" sx={{ fontWeight: 'bold', mb: 2 }} display={'flex'} alignItems="center" ref={diseasesRef}>
              <MedicalInformationIcon fontSize='large' sx={{ mr: 1 }} /> Diseases Cured
            </Typography>
            <Grid2 container spacing={2}>
              {plant.diseasesCured.map((disease, index) => (
                <Grid2 item xs={12} md={6} key={index}>
                  <List dense>
                    <ListItem>
                      <ListItemIcon><BandageIcon color="success" /></ListItemIcon>
                      <ListItemText
                        primary={<Typography variant="subtitle1" fontWeight="bold">{disease.name}</Typography>}
                        secondary={disease.description}
                      />
                    </ListItem>
                  </List>
                </Grid2>
              ))}
            </Grid2>
            <Divider sx={{ my: 4 }} />
          </>
        )}

        {/* Uses Section */}
        {plant.uses && (
          <>
            <Typography color='success.dark' variant="h4" sx={{ fontWeight: 'bold', mb: 2 }} ref={usesRef}>
              <UtensilsIcon sx={{ mr: 1, verticalAlign: 'middle' }} fontSize="large" /> Uses
            </Typography>
            <List>
              {/* If uses is just an array of strings (legacy) or objects (new) */}
              {plant.uses.map((use, index) => (
                <ListItem key={index}>
                  <ListItemIcon><UtensilsIcon color="success" /></ListItemIcon>
                  <ListItemText primary={typeof use === 'string' ? use : use.name} secondary={typeof use === 'object' ? use.description : null} />
                </ListItem>
              ))}
            </List>
            <Divider sx={{ my: 4 }} />
          </>
        )}

        {/* Cultivation Method Section */}
        {plant.cultivation && (
          <>
            <Typography color='success.dark' variant="h4" sx={{ fontWeight: 'bold', mb: 2 }} ref={cultivationRef}>
              <ShieldIcon sx={{ mr: 1, verticalAlign: 'middle' }} fontSize="large" /> Cultivation Method
            </Typography>
            <List>
              {plant.cultivation.map((item, index) => (
                <ListItem key={index}>
                  <ListItemIcon><ShieldIcon color="success" /></ListItemIcon>
                  <ListItemText
                    primary={<Typography variant="subtitle1" fontWeight="bold">{item.name}</Typography>}
                    secondary={item.description}
                  />
                </ListItem>
              ))}
            </List>
            <Divider sx={{ my: 4 }} />
          </>
        )}

        {/* Harvesting Method Section */}
        {plant.harvesting && (
          <>
            <Typography color='success.dark' variant="h4" sx={{ fontWeight: 'bold', mb: 2 }} ref={harvestingRef}>
              <HarvestIcon sx={{ mr: 1, verticalAlign: 'middle' }} fontSize="large" /> Harvesting Methods
            </Typography>
            <List>
              {plant.harvesting.map((item, index) => (
                <ListItem key={index}>
                  <ListItemIcon><HarvestIcon color="success" /></ListItemIcon>
                  <ListItemText
                    primary={<Typography variant="subtitle1" fontWeight="bold">{item.name}</Typography>}
                    secondary={item.description}
                  />
                </ListItem>
              ))}
            </List>
            <Divider sx={{ my: 4 }} />
          </>
        )}

        {/* Where to Find Section */}
        {plant.whereToFind && (
          <>
            <Typography color='success.dark' variant="h4" sx={{ fontWeight: 'bold', mb: 2 }} ref={locationRef}>
              <LocationIcon sx={{ mr: 1, verticalAlign: 'middle' }} fontSize="large" /> Where to Find
            </Typography>
            <List>
              {plant.whereToFind.map((item, index) => (
                <ListItem key={index}>
                  <ListItemIcon><LocationIcon color="success" /></ListItemIcon>
                  <ListItemText
                    primary={<Typography variant="subtitle1" fontWeight="bold">{item.name}</Typography>}
                    secondary={item.description}
                  />
                </ListItem>
              ))}
            </List>
            <Divider sx={{ my: 4 }} />
          </>
        )}

        <PlantGoogleMap />
        <FeedBack />
      </Box>
    </Box>
  );
}