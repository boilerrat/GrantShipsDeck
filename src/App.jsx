import { useState } from 'react';
import { Button, Container } from '@mui/material';
import Slide from '../components/Slide';
import SlideQuadrants from '../components/SlideQuadrants';
import SlideVerticalSplit from '../components/SlideVerticalSplit';
import SlideHorizSplit from '../components/SlideHorizSplit';
import SlideTriplets from '../components/SlideTriplets';
import SlideTopTwoBottomOne from '../components/SlideTopTwoBottomeOne';
import slides from '../data/slides'; // Ensure correct path

const App = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1 < slides.length ? prev + 1 : prev));
  };

  const goToPreviousSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
  };

  const renderSlide = () => {
    const currentSlide = slides[currentSlideIndex];
    switch (currentSlide.template) {
      case 'quadrants':
        return <SlideQuadrants title={currentSlide.title} quadrants={currentSlide.quadrants} />;
      case 'verticalSplit':
        return <SlideVerticalSplit title={currentSlide.title} leftContent={currentSlide.leftContent} rightContent={currentSlide.rightContent} />;
      case 'horizontalSplit':
        return <SlideHorizSplit title={currentSlide.title} topContent={currentSlide.topContent} bottomContent={currentSlide.bottomContent} />;
      case 'triplets':
        return <SlideTriplets title={currentSlide.title} triplets={currentSlide.triplets} />; 
      case 'topTwoBottomOne':
        return <SlideTopTwoBottomOne title={currentSlide.title} topContents={currentSlide.topContents} bottomContent={currentSlide.bottomContent} />;
    }
  };

  return (
    <Container>
      {renderSlide()}
      <Button onClick={goToPreviousSlide} disabled={currentSlideIndex === 0}>
        Previous
      </Button>
      <Button onClick={goToNextSlide} disabled={currentSlideIndex === slides.length - 1}>
        Next
      </Button>
    </Container>
  );
};

export default App;
