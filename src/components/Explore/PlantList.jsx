import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import { Box, Tooltip, Typography, Chip, Stack, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import ShareIcon from '@mui/icons-material/Share';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useNavigate } from 'react-router-dom';

export default function TitlebarImageList({ plants }) {
  // Function to generate sharing URLs
  const getWhatsAppShareURL = (message) => `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
  const getFacebookShareURL = (url) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  const getInstagramProfileURL = (username) => `https://www.instagram.com/${username}`;

  const navigate = useNavigate();

  const description = (id) => {
    navigate('/plant-info/' + id); // Navigate to the path when a button is clicked
  };

  if (!plants || plants.length === 0) {
    return (
      <Box p={4}>
        <Typography variant="h6" color="text.secondary">
          No plants found matching your criteria.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ width: '100%', paddingBottom: '2rem' }}>
      <Typography variant='h4' color='success.main' fontWeight={'bold'} mb={3} pl={2}>
        List of Plants:
      </Typography>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: 4,
        padding: 2
      }}>
        {plants.map((item) => (
          <Card
            key={item.id}
            sx={{
              borderRadius: '16px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 12px 24px rgba(0,0,0,0.15)'
              },
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}
          >
            <Box sx={{ height: 200, overflow: 'hidden', position: 'relative', bgcolor: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {item.hasModel ? (
                <Box sx={{ transform: 'scale(0.8)' }}>{item.model}</Box>
              ) : (
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              )}
            </Box>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" fontStyle="italic" gutterBottom>
                {item.botanicalName}
              </Typography>
              <Stack direction="row" spacing={1} mt={1} mb={1} flexWrap="wrap" gap={0.5}>
                {item.dosha && item.dosha.map(d => (
                  <Chip key={d} label={d} size="small" color="secondary" variant="outlined" sx={{ fontSize: '0.7rem' }} />
                ))}
              </Stack>
            </CardContent>
            <CardActions disableSpacing sx={{ justifyContent: 'space-between', padding: '0 16px 16px 16px' }}>
              <Box>
                <Tooltip title="Share">
                  <IconButton size="small">
                    <ShareIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Box>
              <IconButton
                onClick={() => description(item.id)}
                color="success"
                sx={{
                  border: '1px solid',
                  borderColor: 'success.main',
                  '&:hover': {
                    backgroundColor: 'success.main',
                    color: 'white'
                  }
                }}
              >
                <ReadMoreIcon />
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
