import React from 'react'

export const Header = () => {
   return (
      <header className="header">
         <div className="header__container">
            <div className="header__row">
               <a href="#" className="header__logo"><img src="img/logo.png" alt="logo" /></a>
               <div className="header__right">
                  <span className="header__sum">520 ₽</span>
                  <span className="header__cant">3</span>
               </div>
            </div>
         </div>
      </header>
   )
}
