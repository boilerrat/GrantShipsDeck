// data/slides.js

const slides = [
  { title: 'Slide 1',
    content: '../data/images/balloon.png',
    contentType: 'image',
    template: 'standard'
   },
  { 
    title: 'Slide 2', 
    quadrants: [
      'Content for Q1',
      'Content for Q2',
      'Content for Q3',
      'Content for Q4'
    ], 
    template: 'quadrants' 
  },
  {
    title: 'Slide 3',
    leftContent: 'Left Column Content for Slide 3',
    rightContent: 'Right Column Content for Slide 3',
    template: 'verticalSplit'
  },
  {
    title: 'Slide 4',
    topContent: 'This is the top of Slide 4',
    bottomContent: 'This is the bottom of slide 4',
    template: 'horizontalSplit'
  },
  {
    title: 'Slide 5',
    triplets: ['Section 1 Content', 'Section 2 Content', 'Section 3 Content'],
    template: 'triplets'  
  },
  {
    title: 'Slide with Top Two Bottom One',
    topContents: ['Top Left Content', 'Top Right Content'],
    bottomContent: 'Bottom Full Width Content',
    template: 'topTwoBottomOne'
  },
];

export default slides;
