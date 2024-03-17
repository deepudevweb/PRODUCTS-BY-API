import React from 'react'
import { useState } from 'react';
import './Card.css'
import { Link } from 'react-router-dom';
import PaginationRounded from '../Pagination';
import App from '../../App';
import Brandsider from '../../Carousel/Brandsider';
// import Link from 'react-router-dom'

const Card = () => {


  return (
    <>
      <div className="top-heading">
        <h1>Trending products</h1>
      </div>

      <div className="card-main">
        <div className="item">
          <div className="img-box">
            <img src="https://cdn.dribbble.com/userupload/10679291/file/original-58ab215a80f3d5da2787671b337171cd.png?resize=1024x1024" alt="Awesome Sunglasses" />
          </div>
          <div className="details">
            <h2>Peep Sunglasses<br /> <span>Men's Collection</span> </h2>
            <div className="price">$20</div>
            <label>Size</label>  <br />
            <label>Color</label>

            <a className='cart-item' onClick={() => alert("Added to cart")} href="/">Add to cart</a>
          </div>
        </div>
        <div className="item">
          <div className="img-box">
            <img src="https://cdn.dribbble.com/users/1312926/screenshots/16075158/media/e81d6e2616840bfc9db0ee98abe23cf6.jpg?resize=768x576&vertical=center" alt="Awesome Sunglasses" />
          </div>
          <div className="details">
            <h2>Bags<br /><span>Home Collection</span></h2>
            <div className="price">$3</div>
            <label>Size</label>  <br />
            <label>Color</label>

            <a className='cart-item' href="/" target='_blank' >Add to cart</a>
          </div>
        </div>
        <div className="item">
          <div className="img-box">
            <img src="https://cdn.dribbble.com/users/2292993/screenshots/15433972/media/2fdfc9f27b27d939ac47fccff104eb71.png?resize=1200x900&vertical=center" alt="Awesome Sunglasses" />
          </div>
          <div className="details">
            <h2> Sofa Pillow<br /><span>Home Collection</span></h2>
            <div className="price">$22</div>
            <label>Size</label>  <br />
            <label>Color</label>
            <a className='cart-item' href="/">Add to cart</a>
          </div>
        </div>
        <div className="item">
          <div className="img-box">
            <img src="https://cdn.dribbble.com/users/504740/screenshots/2842981/media/893bd49764de863019d47deb281f536e.jpg?resize=768x576&vertical=center" alt="Awesome Sunglasses" />
          </div>
          <div className="details">
            <h2>Bed sheet<br /> <span>Home Collection</span> </h2>
            <div className="price">149$</div>
            <label>Size</label>  <br />
            <label>Color</label>
            <a className='cart-item' href="/">Add to cart</a>
          </div>
        </div>
        <div className="item">
          <div className="img-box">
            <img src="https://cdn.dribbble.com/userupload/7937377/file/original-830499dc0ac0800a8b427cc97365a414.jpg?resize=752x" alt="Awesome Sunglasses" />
          </div>
          <div className="details">
            <h2>Cotton T-shirt<br />  <span>Men's Collection</span>  </h2>
            <div className="price">$45</div>
            <label>Size</label>  <br />
            <label>Color</label>
            <a className='cart-item' href="/">Add to cart</a>
          </div>
        </div>
        <div className="item">
          <div className="img-box">
            <img src="https://cdn.dribbble.com/userupload/3108843/file/original-6d154417f5837b811fb0c2f8daf9e87c.jpg?resize=1024x768" alt="Awesome Sunglasses" />
          </div>
          <div className="details">
            <h2>Meta Headphones<br />   <span>Electronics</span> </h2>
            <div className="price">$100</div>
            <label>Size</label>  <br />
            <label>Color</label>
            <a className='cart-item' href="/">Add to cart</a>
          </div>
        </div>
        <div className="item">
          <div className="img-box">
            <img src="https://cdn.dribbble.com/users/32700/screenshots/1731891/vilnius_poker.jpg?resize=768x576&vertical=center" alt="Awesome Sunglasses" />
          </div>
          <div className="details">
            <h2>Glace Novel<br />  <span>Books</span> </h2>
            <div className="price">$9</div>
            <label>Size</label>  <br />
            <label>Color</label>
            <a className='cart-item' href="/">Add to cart</a>
          </div>
        </div>
        <div className="item">
          <div className="img-box">
            <img src="https://cdn.dribbble.com/users/1768923/screenshots/4690784/media/308415ea869a60c8db77d2e798223595.jpg?resize=768x576&vertical=center" alt="Awesome Sunglasses" />
          </div>
          <div className="details">
            <h2>Awesome Shelves<br />  <span>Home Collection</span>  </h2>
            <div className="price">$30</div>
            <label>Size</label>  <br />
            <label>Color</label>
            <a className='cart-item' href="/">Add to cart</a>
          </div>
        </div>
        <div className="item">
          <div className="img-box">
            <img src="https://cdn.dribbble.com/users/247655/screenshots/3684925/media/ad004508680a3bd3e907b4df62467bfd.jpg?resize=768x576&vertical=center" alt="Awesome Sunglasses" />
          </div>
          <div className="details">
            <h2>Denim<br />  <span>Men's Collection</span>  </h2>
            <div className="price">$30</div>
            <label>Size</label>  <br />
            <label>Color</label>
            <a className='cart-item' href="/">Add to cart</a>
          </div>
        </div>
        <div className="item">
          <div className="img-box">
            <img src="https://cdn.dribbble.com/userupload/9078652/file/original-25147bca7b6441d759e32ae332ed1d77.jpg?resize=1024x683" alt="Awesome Sunglasses" />
          </div>
          <div className="details">
            <h2>Men's Caps<br /> <span>Women's Collection</span> </h2>
            <div className="price">$5</div>
            <label>Size</label>  <br />
            <label>Color</label>
            <a className='cart-item' href="/">Add to cart</a>
          </div>
        </div>
        <div className="item">
          <div className="img-box">
            <img src="https://cdn.dribbble.com/users/1283145/screenshots/2841946/media/2f647c9ff820373dbb0df1711881fe30.jpg?resize=768x576&vertical=center" alt="Awesome Sunglasses" />
          </div>
          <div className="details">
            <h2>Women's Denim<br /> <span>Women's Collection</span> </h2>
            <div className="price">$40</div>
            <label>Size</label>
            <ul>
              <li>55-14</li>
              <li>58-14</li>
              <li>62-14</li>
            </ul>
            <label>Color</label>
            <a className='cart-item' href="/">Add to cart</a>
          </div>
        </div>
        <div className="item">
          <div className="img-box">
            <img src="https://cdn.dribbble.com/users/1059/screenshots/3359918/media/cc343042b9f45a1c50a1981e2a8d84ec.jpg?resize=768x576&vertical=center" alt="Awesome Sunglasses" />
          </div>
          <div className="details">
            <h2>Men's Shoes<br /> <span>Men's Collection</span> </h2>
            <div className="price">50$</div>
            <label>Size</label>  <br />
            <label>Color</label>
            <a className='cart-item' href="/">Add to cart</a>
          </div>
        </div>
        <div className="item">
          <div className="img-box">
            <img src="https://cdn.dribbble.com/users/52573/screenshots/9163642/media/f36766075cb4efccb4b3bbb3e0ffa369.jpg?resize=768x576&vertical=center" alt="Awesome Sunglasses" />
          </div>
          <div className="details">
            <h2>Macbook Air<br /> <span>Electronics</span> </h2>
            <div className="price">$1020</div>
            <label>Size</label>  <br />
            <label>Color</label>
            <a className='cart-item' href="/">Add to cart</a>
          </div>
        </div>
        <div className="item">
          <div className="img-box">
            <img src="https://cdn.dribbble.com/users/8774155/screenshots/19929759/media/d0c6ee00035aa0ed2525daa95a1bbfb1.png?resize=768x576&vertical=center" alt="Awesome Sunglasses" />
          </div>
          <div className="details">
            <h2>Iphone Cover<br /> <span>Electronics</span>  </h2>
            <div className="price">$3</div>
            <label>Size</label>  <br />
            <label>Color</label>
            <a className='cart-item' href="/">Add to cart</a>
          </div>
        </div>
        <div className="item">
          <div className="img-box">
            <img src="https://cdn.dribbble.com/users/13897/screenshots/16307157/media/51f8689fe738a5125b4a033c45da4a5b.jpg?resize=768x576&vertical=center" alt="Awesome Sunglasses" />
          </div>
          <div className="details">
            <h2>Boat Watch<br />  <span>Electronics</span> </h2>
            <div className="price">$40</div>
            <label>Size</label>  <br />
            <label>Color</label>
            <a className='cart-item' href="/">Add to cart</a>
          </div>
        </div>
        <div className="item">
          <div className="img-box">
            <img src="https://cdn.dribbble.com/users/6483630/screenshots/14904623/media/11fa5c0ee1855c060281e341ae983961.png?resize=768x576&vertical=center" alt="Awesome Sunglasses" />
          </div>
          <div className="details">
            <h2>Gaming Chair<br /> <span>Home Collection</span>  </h2>
            <div className="price">$200</div>
            <label>Size</label>  <br />
            <label>Color</label>
            <a className='cart-item' href="/">Add to cart</a>
          </div>
        </div>
        <div className="item">
          <div className="img-box">
            <img src="https://cdn.dribbble.com/users/6248502/screenshots/15424326/media/f421e8073a88d936ca75b06632f6ff9c.jpg?resize=768x576&vertical=center" alt="Awesome Sunglasses" />
          </div>
          <div className="details">
            <h2>Shower<br /> <span>Home Appliances</span>  </h2>
            <div className="price">$20</div>
            <label>Size</label>  <br />
            <label>Color</label>
            <a className='cart-item' href="/">Add to cart</a>
          </div>
        </div>
        <div className="item">
          <div className="img-box">
            <img src="https://cdn.dribbble.com/userupload/5351254/file/original-a691608efcb9315bf96107caa079cfc5.jpg?resize=752x855&vertical=center" alt="Awesome Sunglasses" />
          </div>
          <div className="details">
            <h2>Xiaomi Earbuds<br /> <span>Electronics</span>  </h2>
            <div className="price">20$</div>
            <label>Size</label>  <br />
            <label>Color</label>
            <a className='cart-item' href="/">Add to cart</a>
          </div>
        </div>
        <div className="item">
          <div className="img-box">
            <img src="https://cdn.dribbble.com/users/2378593/screenshots/9685212/media/0525717a8f30a954373f3ff598c63f2a.jpg?resize=768x576&vertical=center" alt="Awesome Sunglasses" />
          </div>
          <div className="details">
            <h2>Party  Wear<br /> <span>Women's Collection</span>  </h2>
            <div className="price">$60</div>
            <label>Size</label>
            <ul>
              <li>30-40</li>
              <li>58-60</li>
              <li>40-45</li>
            </ul>
            <label>Color</label>
            <a className='cart-item' href="/">Add to cart</a>
          </div>
        </div>
        <div className="item">
          <div className="img-box">
            <img src="https://cdn.dribbble.com/users/95732/screenshots/3067253/media/e305349c6a8c81f7837291d992694a11.jpg?resize=768x576&vertical=center" alt="Awesome Sunglasses" />
          </div>
          <div className="details">
            <h2>Gaming Mouse<br /> <span>Home Collection</span>  </h2>
            <div className="price">$40</div>
            <label>Size</label>  <br />
            <label>Color</label>
            <a className='cart-item' href="/">Add to cart</a>
          </div>
        </div>
        <div className="item">
          <div className="img-box">
            <img src="https://cdn.dribbble.com/users/112720/screenshots/1506535/media/e3384b1254867ece9c11535c152aac8a.png?resize=768x576&vertical=center" alt="Awesome Sunglasses" />
          </div>
          <div className="details">
            <h2>Study Table<br /> <span>Home Collection</span>  </h2>
            <div className="price">$90</div>
            <label>Size</label>  <br />
            <label>Color</label>
            <a className='cart-item' href="/">Add to cart</a>
          </div>
        </div>
        <div className="item">
          <div className="img-box">
            <img src="https://cdn.dribbble.com/userupload/8771936/file/original-9ba3590e00cb9bd9210e207254b6afea.jpg?resize=1024x732" alt="Awesome Sunglasses" />
          </div>
          <div className="details">
            <h2>Body Lotion<br /> <span>Women's Collection</span>  </h2>
            <div className="price">12$</div>
            <label>Size</label>  <br />
            <label>Color</label>
            <a className='cart-item' href="/">Add to cart</a>
          </div>
        </div>
      </div>
      <PaginationRounded />
      <Brandsider />
    </>
  )
}

export default Card