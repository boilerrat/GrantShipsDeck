import PropTypes from 'prop-types';
import { Card, CardContent, Typography, Box } from '@mui/material';

const Slide = ({ title, content, contentType }) => (
  <Card
    sx={{
      width: '1080px',
      height: '1080px',
      margin: 'auto',
      boxShadow: '5px 5px 15px 5px rgba(0, 0, 0, 0.2)',
      borderRadius: '10px',
      backgroundColor: 'grey.900',
      color: 'white',
      '&:hover': {
        backgroundColor: 'grey.800',
        transform: 'scale(1.05)',
        transition: 'transform 0.3s ease-in-out'
      },
      '@media (max-width: 600px)': {
        width: '100%'
      },
      '& .MuiCardContent-root': {
        padding: '20px'
      },
      '& .MuiTypography-h5': {
        marginBottom: '10px'
      }
    }}
  >
    <CardContent>
      <Typography variant="h5">{title}</Typography>
      {contentType === 'image' ? (
        <Box component="img" src={content} alt={title} sx={{ maxWidth: '100%', maxHeight: '100%' }} />
      ) : (
        <Typography variant="body1">{content}</Typography>
      )}
    </CardContent>
  </Card>
);

Slide.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  contentType: PropTypes.oneOf(['text', 'image'])
};

export default Slide;
