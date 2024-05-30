import React, {useState} from 'react';
import { Link } from "react-router-dom";


const Header =() =>{

    const [activeLink, setActiveLink] = useState('nav__element--1');
    const handleOnClick=(linkId, event)=>{

        setActiveLink(linkId)

    }

    return (
        <header className="header">
            <div className="header__title">
               <h2 className='header__title--big murecho--bold'>助成物発注データベース</h2>
                </div>
                <div className="header__nav">
                    <div className="header__nav__element">
                        {/* <a href="/search" id='nav__element--1' className={`nav__element__link murecho--normal ${activeLink==='nav__element--1'? 'nav__element__link--active': ''}`} onClick={(e) => handleOnClick('nav__element--1', e)}>検索画面</a> */}
                        <Link
                        to="/search"
                        id='nav__element--1'
                        className={`nav__element__link murecho--normal ${activeLink === 'nav__element--1' ? 'nav__element__link--active' : ''}`}
                        onClick={() => handleOnClick('nav__element--1')}
                    > 検索画面
                    </Link>
                </div>
                <div className="header__nav__element">
                    {/* <a href="/pickup" id='nav__element--2' className={`nav__element__link murecho--normal ${activeLink==='nav__element--2'? 'nav__element__link--active': ''}`} onClick={(e) => handleOnClick('nav__element--2', e)}>ピックアップ画面</a> */}
                    <Link
                        to="/pickup"
                        id='nav__element--2'
                        className={`nav__element__link murecho--normal ${activeLink === 'nav__element--2' ? 'nav__element__link--active' : ''}`}
                        onClick={() => handleOnClick('nav__element--2')}
                    >ピックアップ画面</Link>
                </div>
                
                </div>
            
        </header>
    )
}

export default Header;