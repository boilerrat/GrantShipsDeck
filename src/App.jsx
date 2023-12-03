// App.jsx
import { useState } from 'react';
import { Button, Container } from '@mui/material';
import Slide from '../components/Slide';
import slides from '../data/slide';

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1 < slides.length ? prev + 1 : prev));
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
  };

  return (
    <Container>
      <Slide {...slides[currentSlide]} />
      <Button onClick={goToPreviousSlide} disabled={currentSlide === 0}>
        Previous
      </Button>
      <Button onClick={goToNextSlide} disabled={currentSlide === slides.length - 1}>
        Next
      </Button>
    </Container>
  );
};

export default App;
