import React, { useState, useMemo } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { Box, Card, CardContent, Chip, Fade, Grid, IconButton, Popper, Stack, Typography, useMediaQuery, useTheme, Grow } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import PlantList from '../components/Explore/PlantList';
import { plants } from '../data/plants';

const FilterPlant = function PositionedPopper({ activeFilters, setActiveFilters }) {
  const filterOptions = {
    uses: ["Stress relief", "Immunity", "Respiratory health", "Skin care", "Digestive health"],
    region: ["India", "Africa", "South America", "Global", "Mediterranean", "Europe", "Australia"],
    type: ["Medicinal", "Aromatic", "Edible", "Culinary"],
    dosha: ["Vata", "Pitta", "Kapha"]
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  const handleFilterChange = (category, option) => {
    setActiveFilters(prev => {
      const current = prev[category] || [];
      const updated = current.includes(option)
        ? current.filter(item => item !== option)
        : [...current, option];
      return { ...prev, [category]: updated };
    });
  };

  return (
    <Box>
      <Popper
        sx={{ zIndex: 1200 }}
        open={open}
        anchorEl={anchorEl}
        placement={placement}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Box sx={{ p: 4, backgroundColor: '#fff', borderRadius: '16px', boxShadow: '0 8px 32px rgba(0,0,0,0.1)', width: '50rem' }}>
              <Typography variant="h6" align="center" gutterBottom fontWeight="bold" color="success.main">
                Filter Plants
              </Typography>
              <Box sx={{ display: 'grid', gap: 3 }}>
                {Object.entries(filterOptions).map(([category, options]) => (
                  <Box key={category}>
                    <Typography variant="subtitle1" gutterBottom sx={{ textTransform: 'capitalize', fontWeight: 'bold' }}>
                      {category}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {options.map((option) => (
                        <Chip
                          key={option}
                          label={option}
                          onClick={() => handleFilterChange(category, option)}
                          color={activeFilters[category]?.includes(option) ? "success" : "default"}
                          variant={activeFilters[category]?.includes(option) ? "filled" : "outlined"}
                          clickable
                          sx={{ transition: 'all 0.2s' }}
                        />
                      ))}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Fade>
        )}
      </Popper>

      <Grid container sx={{ justifyContent: 'center' }}>
        <Grid
          item
          container
          direction="column"
          sx={{ alignItems: 'flex-end' }}
        >
          <Grid item>
            <IconButton onClick={handleClick('right-start')} color="success" size="large">
              <TuneIcon fontSize='large' />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

const filter = createFilterOptions();

export default function ExplorePage() {
  const [value, setValue] = React.useState(null);
  const [activeFilters, setActiveFilters] = useState({});
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const filteredPlants = useMemo(() => {
    let result = plants;

    // Apply Search
    if (value) {
      const searchTitle = typeof value === 'string' ? value : value.title;
      result = result.filter(plant => plant.title.toLowerCase().includes(searchTitle.toLowerCase()));
    }

    // Apply Filters
    Object.entries(activeFilters).forEach(([category, selectedOptions]) => {
      if (selectedOptions.length > 0) {
        result = result.filter(plant => {
          const plantValue = plant[category];
          if (Array.isArray(plantValue)) {
            return plantValue.some(val => selectedOptions.includes(val));
          }
          return selectedOptions.includes(plantValue);
        });
      }
    });

    return result;
  }, [value, activeFilters]);

  return (
    <Stack display={'flex'} flexDirection={isMobile ? 'column' : 'row'} justifyContent={'space-around'} pt={3} backgroundColor='#defff0' pb={'40px'} minHeight="100vh">
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '40px', width: isMobile ? '100%' : '350px', padding: isMobile ? '0 20px' : '0' }}>
        <Stack flexDirection={'row'} alignItems="center" gap={1}>
          <Autocomplete
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            filterOptions={(options, params) => {
              const filtered = filter(options, params);
              return filtered;
            }}
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            id="free-solo-with-text-demo"
            options={plants}
            getOptionLabel={(option) => {
              if (typeof option === 'string') {
                return option;
              }
              return option.title;
            }}
            renderOption={(props, option) => (
              <li {...props}>
                {option.title}
              </li>
            )}
            sx={{ width: '100%' }}
            freeSolo
            renderInput={(params) => (
              <TextField
                color='success'
                {...params}
                label="Search plant here"
                variant="outlined"
                sx={{ backgroundColor: 'white', borderRadius: '4px' }}
              />
            )}
          />
          <FilterPlant activeFilters={activeFilters} setActiveFilters={setActiveFilters} />
        </Stack>

        <Grow in={Boolean(value && typeof value !== 'string')}>
          {value && typeof value !== 'string' ? (
            <Card sx={{ width: '100%', borderRadius: '16px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', overflow: 'visible' }}>
              <Box height={'250px'} display="flex" justifyContent="center" alignItems="center" overflow="hidden" sx={{ backgroundColor: '#f0fdf4', borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }}>
                {value.hasModel ? value.model : <img src={value.img} alt={value.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
              </Box>
              <CardContent>
                <Typography gutterBottom variant="h4" component="div" color='success.main' fontWeight={'bold'}>
                  {value.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" gutterBottom fontStyle="italic">
                  {value.botanicalName}
                </Typography>
                <Stack direction="row" spacing={1} mb={2}>
                  {value.dosha && value.dosha.map(d => (
                    <Chip key={d} label={d} size="small" color="secondary" variant="outlined" />
                  ))}
                </Stack>
                <Typography variant="body1" color="text.primary" paragraph>
                  {value.description}
                </Typography>
              </CardContent>
            </Card>
          ) : <div />}
        </Grow>
      </Box>
      <Box sx={{ flex: 1, maxWidth: '900px', padding: isMobile ? '0 20px' : '0' }}>
        <PlantList plants={filteredPlants} />
      </Box>
    </Stack>
  );
}

