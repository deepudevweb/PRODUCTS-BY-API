
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './Navbar/Navbar';
import IndividualIntervalsExample from './Carousel/Carousel'




function Card(key, title, image, brand, price, stock) {
  return (
    <>
      <div key={key} className='product' >
        <img src={image} alt="iphone" />
        <div className='pro-content'>
          <h3>{title}</h3>
          <p>{brand} <span><p>Stock: {stock}</p></span></p>
          <p><b>${price}</b></p>
        </div>
      </div >
    </>
  )
}


// const Container2    = [ Card()]


const root = ReactDOM.createRoot(document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then((data) => {
    console.log(data);
    root.render(
      <>
        <Navbar />
        <IndividualIntervalsExample />
        <div className='container'>
          {data.products.map((product) => {
            return Card(product.id, product.title, product.thumbnail, product.brand, product.price, product.stock)
          })}
        </div>
      </>
      )

  });



