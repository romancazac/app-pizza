import React from 'react'
import { useSelector } from 'react-redux'

import { Link } from 'react-router-dom'
export const Header = () => {

   const totalCount = useSelector(({ cart }) => cart.totalCount);
   const totalPrice = useSelector(({ cart }) => cart.totalPrice);
   // console.log( totalCount)
   return (

      

      <header className="header">
         <div className="header__container">
            <div className="header__row">
               <Link to="" className="header__logo"><img src="img/logo.png" alt="logo" /></Link>
               <Link className="header__right" to="basked">
                  <span className="header__sum">{totalPrice} ₽</span>
                  <span className="header__cant">{totalCount}</span>
               </Link>
            </div>
         </div>
      </header>
   )
}
