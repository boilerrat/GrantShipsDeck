import PropTypes from 'prop-types';
import { Card, CardContent, Typography, Box } from '@mui/material';

const SlideQuadrants = ({ title, quadrants }) => (
  <Card
    sx={{
      width: '1080px', // Adjust width
      height: '1080px',
      margin: 'auto', // Center the card
      boxShadow: '5px 5px 15px 5px rgba(0, 0, 0, 0.2)', // Custom shadow
      borderRadius: '10px', // Rounded corners
      backgroundColor: 'grey.900', // Background color
      color: 'white', // Text color
      display: 'flex', // Enable flex layout
      flexWrap: 'wrap', // Allow wrapping
      '&:hover': {
        backgroundColor: 'grey.800', // Change background on hover
        transform: 'scale(1.05)', // Slightly increase size on hover
        transition: 'transform 0.3s ease-in-out' // Smooth transition
      },
      '@media (max-width: 600px)': {
        width: '100%', // Full width on small screens
      }
    }}
  >
    <CardContent sx={{ width: '100%', padding: '20px', boxSizing: 'border-box' }}>
      <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: '10px' }}>
        {title}
      </Typography>
    </CardContent>
    {quadrants.map((quadContent, index) => (
      <Box key={index} sx={{ width: '50%', padding: '10px', boxSizing: 'border-box' }}>
        <Typography variant="body1">{quadContent}</Typography>
      </Box>
    ))}
  </Card>
);

SlideQuadrants.propTypes = {
  title: PropTypes.string.isRequired,
  quadrants: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default SlideQuadrants;
