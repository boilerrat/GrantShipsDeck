import PropTypes from 'prop-types';
import { Card, CardContent, Typography, Box } from '@mui/material';

const SlideTriplets = ({ title, triplets }) => (
  <Card
    sx={{
      width: '1080px',
      height: '1080px',
      margin: 'auto',
      boxShadow: '5px 5px 15px 5px rgba(0, 0, 0, 0.2)',
      borderRadius: '10px',
      backgroundColor: 'grey.900',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      '&:hover': {
        backgroundColor: 'grey.800',
        transform: 'scale(1.05)',
        transition: 'transform 0.3s ease-in-out'
      },
      '@media (max-width: 600px)': {
        width: '100%'
      }
    }}
  >
    <CardContent sx={{ width: '100%', padding: '20px', boxSizing: 'border-box' }}>
      <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: '10px' }}>
        {title}
      </Typography>
    </CardContent>
    {triplets.map((content, index) => (
      <Box key={index} sx={{ width: '100%', padding: '10px', boxSizing: 'border-box', flex: 1 }}>
        <Typography variant="body1">{content}</Typography>
      </Box>
    ))}
  </Card>
);

SlideTriplets.propTypes = {
  title: PropTypes.string.isRequired,
  triplets: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default SlideTriplets;
