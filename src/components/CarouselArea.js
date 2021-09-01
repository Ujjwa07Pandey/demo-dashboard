import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Card, Button, CardContent, Box } from '@material-ui/core';
import image from '../assets/image.jpg';
function Item(props) {
  return (
    <Box
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        boxShadow: 'none',
        borderRadius: 16,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.6,
          backgroundColor: '#000',
          color: '#fff',
          padding: 24,
          borderRadius: 16,
        }}
      >
        <h2>{props.item.name}</h2>
        <p>{props.item.description}</p>
      </div>

      <img
        src={image}
        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
      />
    </Box>
  );
}
const CarouselArea = (props) => {
  var items = [
    {
      name: 'Random Name #1',
      description: 'Probably the most random thing you have ever seen!',
    },
    {
      name: 'Random Name #2',
      description: 'Hello World!',
    },
  ];

  return (
    <Carousel style={{ width: '100%', height: '100%' }}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

export default CarouselArea;
