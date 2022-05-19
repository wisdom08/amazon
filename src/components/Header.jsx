import React from 'react';
import "../styles/Header.css"
import SearchIcon from '@mui/icons-material/Search';
import {ShoppingBasket} from "@mui/icons-material";

function Header() {
    return (
        <div className="header">
            <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" className="header_logo"/>
            <div className="header_search">
                <input type="text" className="header_searchInput"/>
                <SearchIcon className="header_searchIcon"/>
            </div>
            <div className="header_nav">
                <div className="header_option">
                    <span className="header_optionLineOne">안녕하세요!</span>
                    <span className="header_optionLineTwo">로그인하기</span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">돌아가기</span>
                    <span className="header_optionLineTwo">주문내역</span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">반가워요</span>
                    <span className="header_optionLineTwo">구독과 좋아요</span>
                </div>
                <div className="header_optionBasket">
                    <ShoppingBasket/>
                    <span className="header_optionLineTwoheader_basketCount">100
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Header;
