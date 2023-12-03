import PropTypes from 'prop-types'; // Import PropTypes
import { Card, CardContent, Typography } from '@mui/material';

const Slide = ({ title, content }) => (
    <Card
    sx={{
        // Basic CSS properties
        width: '1080px', // Adjust width
        height: '1080px',
        margin: 'auto', // Center the card
        boxShadow: '5px 5px 15px 5px rgba(0, 0, 0, 0.2)', // Custom shadow
        borderRadius: '10px', // Rounded corners

        // Background and color
        backgroundColor: 'grey.900', // Use theme's paper color
        color: 'white', // Use theme's primary text color

        // Hover effects
        '&:hover': {
        backgroundColor: 'grey.800', // Change background on hover
        transform: 'scale(1.05)', // Slightly increase size on hover
        transition: 'transform 0.3s ease-in-out' // Smooth transition
        },

        // Responsive design
        '@media (max-width: 600px)': {
        width: '100%', // Full width on small screens
        },

        // Pseudo-classes and more complex selectors
        '& .MuiCardContent-root': {
        padding: '20px', // Increase padding inside the card content
        },

        '& .MuiTypography-h5': {
        marginBottom: '10px', // Margin below the title
        },

        '& .MuiTypography-body1': {
        color: 'white', // Use theme's secondary text color
        }
    }}
    >
    <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body1">{content}</Typography>
    </CardContent>
    </Card>

);

// Define prop types for the Slide component
Slide.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default Slide;
