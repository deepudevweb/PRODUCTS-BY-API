import React, { useState } from 'react'
import { TbMenu2 } from "react-icons/tb";
import { RxCross1 } from "react-icons/rx";

function Menuitem() {
const [menu, setMenu] = useState(false)
const [animation, setAnimation] = useState(false)

const handleanimation = () => {
  setAnimation(!animation)
}

const menuClose = () => {
  setMenu(false)
}



  return (
    <div className="menuitem">
      {menu ? <RxCross1 className='cross' style={{alignItems: 'center', justifyContent: 'center', fontSize: '30px'}} onClick={menuClose}  /> : < TbMenu2 className='menu-icon' style={{alignItems: 'center', justifyContent: 'center', fontSize: '30px'}} onClick={() => setMenu(!menu)} />}
      <ul className={menu ? 'menu-open active' : 'list'}> 
        <li onClick={menuClose}>Home</li>
        <li onClick={menuClose}>All Categories
          <div className='dropdown-items'>
            <div className="dropdown-left">
              <li>Headphones</li>
              <li>Watches</li>
              <li>Books</li>
              <li>Shoes</li>
              <li>Beauty</li>
              <li>Grocery</li>
            </div>
            <hr />
            <div className="dropdown-mid">
              <li>Mens</li>
              <li>Women</li>
              <li>Toys</li>
              <li>Glasses</li>
              <li>Charger</li>
              <li>Led</li>
            </div>
            <hr />
            <div className="dropdown-right">
              <li>Smartphone</li>
              <li>Wallpaper</li>
              <li>Outfit</li>
              <li>Home collection</li>
              <li>Bag</li>
              <li>Sleepers</li>
            </div>
          </div>
        </li>
        <li onClick={menuClose}>New Arrivals</li>
        <li onClick={menuClose}>Featured Products</li>
        <li onClick={menuClose}>Electronics</li>
        <li onClick={menuClose}>Fashions</li>
        <li onClick={menuClose}>Accessories</li>
        <li onClick={menuClose}>Appliances</li>
      </ul>
    </div>
  )
}

export default Menuitem
