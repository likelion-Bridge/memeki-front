import React from 'react';
import './Header.css';

export const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="./images/logo.png"
          alt="logo"
          style={{
            height: '1.875rem',
            width: '6.25rem',
          }}
        ></img>
      </div>
      <div className="searchBar">
        <input type="text" placeholder="밈을 검색해보세요." />
        <img
          src="./images/search.png"
          alt="search"
          style={{
            height: '1.563rem',
            width: '1.563rem',
          }}
        ></img>
      </div>
      <div className="category">
        <ul>
          <li>홈</li>
          <li>국가별</li>
          <li>년도별</li>
          <li>밈등록</li>
        </ul>
      </div>
    </div>
  );
};
