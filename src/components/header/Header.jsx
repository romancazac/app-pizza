import React from 'react'
import { Link } from 'react-router-dom'
export const Header = () => {
   return (
      <header className="header">
         <div className="header__container">
            <div className="header__row">
               <Link to="" className="header__logo"><img src="img/logo.png" alt="logo" /></Link>
               <Link className="header__right" to="basked">
                  <span className="header__sum">520 ₽</span>
                  <span className="header__cant">3</span>
               </Link>
            </div>
         </div>
      </header>
   )
}
