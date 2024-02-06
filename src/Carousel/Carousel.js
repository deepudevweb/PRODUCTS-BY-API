import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function IndividualIntervalsExample() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const result = await response.json();
        console.log(result);
        setProducts(result.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Carousel className='main'>
      {products.map((product, index) => (
        <Carousel.Item key={index} interval={index === 0 ? 5000 : 3000}>
          <img className='mainbanner' src={product.thumbnail}  alt='banner'/>
          <Carousel.Caption>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default IndividualIntervalsExample;
