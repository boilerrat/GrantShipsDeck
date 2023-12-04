import PropTypes from 'prop-types';
import { Card, CardContent, Typography, Box } from '@mui/material';

const SlideTopTwoBottomOne = ({ title, topContents, bottomContent }) => (
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
    <Box sx={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
      {topContents.map((content, index) => (
        <Box key={index} sx={{ width: '50%', padding: '10px', boxSizing: 'border-box' }}>
          <Typography variant="body1">{content}</Typography>
        </Box>
      ))}
    </Box>
    <Box sx={{ width: '100%', padding: '10px', boxSizing: 'border-box', flex: 1 }}>
      <Typography variant="body1">{bottomContent}</Typography>
    </Box>
  </Card>
);

SlideTopTwoBottomOne.propTypes = {
  title: PropTypes.string.isRequired,
  topContents: PropTypes.arrayOf(PropTypes.string).isRequired,
  bottomContent: PropTypes.string.isRequired
};

export default SlideTopTwoBottomOne;
