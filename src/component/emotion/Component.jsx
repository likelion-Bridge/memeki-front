/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import theme from '../../styles/theme';
import { Body1Bold, Body2 } from './FontComponent';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import selectOptions from '../store/SelectOptions';

/**
 * 1200px의 Inner 컴포넌트, 가운데 정렬 처리 됨
 * @param children 컴포넌트 안에 넣을 자식 요소
 */
export const Inner = ({ children, style }) => (
  <section
    css={css`
      width: 120rem;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 9.6rem;
      // 추후 수정
      padding-bottom: 9.6rem;
      ${style};
    `}
  >
    {children}
  </section>
);

/**
 * 미미키의 헤더 메뉴바 컴포넌트
 * @param {string} type 헤더의 형태(main, search)
 */
export const Header = ({ type }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get('term') || '';
  const [scrollState, setScrollState] = useState(false);

  const navigate = useNavigate(); // useNavigate 훅 사용

  const [searchInput, setSearchInput] = useState(searchTerm);

  const handleScroll = () => {
    if (window.scrollY || document.documentElement.scrollTop > 0) {
      setScrollState(true);
    } else {
      setScrollState(false);
    }
  };

  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchInput(newSearchTerm);
  };

  const handleSearchEnter = (event) => {
    if (event.key === 'Enter') {
      navigate(`/search?term=${searchInput}`); // useNavigate로 라우팅 처리
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const styles = {
    main: {
      searchBar: css`
        display: none;
      `,
      category: css`
        width: 37.9rem;
        gap: 7.2rem;
      `,
    },
    search: {
      searchBar: css`
        display: flex;
        align-items: center;
        width: 59.5rem;
        border-radius: 0.5rem;
        border: 0.3rem solid ${theme.palette.primary[500]};
      `,
      category: css`
        width: 28.4rem;
        gap: 4rem;
      `,
    },
  };
  return (
    <div
      css={css`
        margin: 0 auto;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        padding: 2.4rem 0;
      `}
    >
      <Link to="/">
        <img
          src={process.env.PUBLIC_URL + '/images/logo.png'}
          alt="logo"
          css={css`
            width: 10rem;
            height: 3rem;
          `}
        />
      </Link>
      <div
        css={css`
          ${styles[type].searchBar}
        `}
      >
        <input
          value={searchInput}
          onChange={handleSearchChange}
          onKeyPress={handleSearchEnter}
          type="text"
          placeholder="밈을 검색해보세요"
          css={css`
            color: ${theme.palette.gray[400]};
            ${theme.textVariants.body2}
            flex: 1 0 0;
            padding: 1rem 0 1rem 1.6rem;
            background-color: transparent;
          `}
        />
        <div
          css={css`
            display: flex;
            padding: 0.8rem 1.6rem;
            justify-content: center;
          `}
        >
          <img
            src={process.env.PUBLIC_URL + '/images/search.png'}
            alt="search"
            css={css`
              width: 2rem;
              height: 2rem;
            `}
          ></img>
        </div>
      </div>
      <ul
        css={css`
          display: flex;
          align-items: center;
          justify-content: flex-end;
          color: ${theme.palette.primary[500]};
          ${theme.textVariants.body1};
          ${styles[type].category};
        `}
      >
        <Link to="/">
          <li>홈</li>
        </Link>
        <Link to="/year">
          <li>년도별</li>
        </Link>
        <Link to="/country">
          <li>국가별</li>
        </Link>
        <Link to="/upload">
          <li>밈등록</li>
        </Link>
      </ul>
    </div>
  );
};

// 검색 바 컴포넌트
export const SearchBar = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get('term') || '';

  const navigate = useNavigate(); // useNavigate 훅 사용

  const [searchInput, setSearchInput] = useState(searchTerm);

  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchInput(newSearchTerm);
  };

  const handleSearchEnter = (event) => {
    if (event.key === 'Enter') {
      navigate(`/search?term=${searchInput}`); // useNavigate로 라우팅 처리
    }
  };
  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        align-items: center;
        gap: 3.2rem;
        border-radius: 0.5rem;
        border: 0.3rem solid ${theme.palette.primary[500]};
        justify-content: space-between;
      `}
    >
      <input
        value={searchInput}
        onChange={handleSearchChange}
        onKeyPress={handleSearchEnter}
        type="text"
        placeholder="밈을 검색해보세요."
        css={css`
          display: flex;
          align-items: center;
          width: 110.4377rem;
          height: auto;
          transform: rotate(-0.068deg);
          gap: 1.6rem;
          margin: 1rem 1.6rem;
          background-color: transparent;
          color: ${theme.palette.gray[600]};
          ${theme.textVariants.body1};
        `}
      />
      <img
        src={process.env.PUBLIC_URL + '/images/search.png'}
        alt="search"
        css={css`
          margin: 0.8rem 1.6rem;
          width: 3rem;
          height: 3rem;
        `}
      ></img>
    </div>
  );
};

/**
 * custom selectBox
 * z-index 손봐야 할 수도 있음
 * @param {string} type select목록 (date, country, year)
 */
export const SelectBox = ({ type, selectClick, selectedOption }) => {
  const styles = {
    date: css`
      width: 10.3rem;
    `,
    country: css`
      width: 10.3rem;
    `,
    year: css`
      width: 13.5rem;
    `,
  };
  const [rotationDegree, setRotationDegree] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (optionName) => {
    selectClick(optionName);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setRotationDegree(isOpen ? 0 : 180);
  };

  return (
    <div
      css={css`
        position: relative; /* 부모 요소의 위치 기준으로 */
        display: flex;
        flex-direction: column;
        gap: 1.6rem;
        z-index: 10;
        ${styles[type]}
      `}
    >
      <div
        onClick={toggleDropdown}
        css={css`
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 1.6rem;
        `}
      >
        <div
          css={css`
            color: ${theme.palette.gray[500]};
            ${theme.textVariants.body2Bold};
          `}
        >
          {selectedOption}
        </div>
        <div
          css={css`
            transition: 0.3s;
            animation: none;
            transform: rotate(${rotationDegree}deg);
          `}
        >
          <img
            src={process.env.PUBLIC_URL + '/images/selectIcon.png'}
            alt="selectIcon"
            css={css`
              width: 1.5rem;
              height: 1rem;
            `}
          />
        </div>
      </div>
      {isOpen && (
        <ul
          css={css`
            position: absolute; /* 드롭다운 박스를 절대 위치로 설정 */
            top: 100%; /* 부모 요소 아래에 배치 */
            width: inherit;
            border-radius: 0.5rem;
            background: ${theme.palette.gray.white};
            box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.05);
          `}
        >
          {selectOptions[type].map((option) => (
            <li
              key={option.value}
              onClick={() => handleOptionClick(option.name)}
              css={css`
                display: flex;
                width: inherit;
                padding: 1.6rem;
                justify-content: flex-start;
                align-items: center;
                color: ${option.name === selectedOption
                  ? theme.palette.primary[500]
                  : theme.palette.gray[500]};
                ${theme.textVariants.body2Bold}
              `}
            >
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

/**
 * space-between의 배치로 되어 있는 TextBox
 * @param {ReactNode} children
 */
export const TextBox = ({ children, style }) => (
  <div
    css={css`
      width: 100%;
      display: flex;
      justify-content: space-between;
      ${style}
    `}
  >
    {children}
  </div>
);

// 썸네일이 보여지는 밈 문서
export const MemeInfoBox = ({ item }) => {
  const navigate = useNavigate();
  const BoxClick = () => {
    navigate(`/detail/${item.id}`, { state: item });
  };

  return (
    <div
      className="container"
      onClick={BoxClick}
      css={css`
        width: 37.6rem;
        height: 39.5rem;
        border-radius: 1.9rem;
        background-color: ${theme.palette.primary[500]};
        padding: 1.6rem;
        cursor: pointer;
      `}
    >
      <div
        className="imgbox"
        css={css`
          height: 22.4rem;
          border-radius: 1.9rem;
          background-color: ${theme.palette.gray.white};
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        {item.link ? (
          <img
            src={item.link}
            alt={item.name + 'img'}
            css={css`
              max-width: 100%;
              max-height: 100%;
              width: auto;
              height: auto;
              object-fit: contain;
            `}
          />
        ) : (
          <img
            src={process.env.PUBLIC_URL + '/images/logo.png'}
            alt="search"
            css={css`
              margin: 0.8rem 1.6rem;
              width: 10rem;
              height: 3rem;
            `}
          />
        )}
      </div>
      <div
        className="textbox"
        css={css`
          margin-top: 3.2rem;
          color: ${theme.palette.gray[500]};
          ${theme.textVariants.header2};
        `}
      >
        {item.name}
      </div>
      <div
        css={css`
          display: flex;
          justify-content: flex-end;
          margin-top: 4.8rem;
          color: ${theme.palette.gray[500]};
          ${theme.textVariants.body2};
        `}
      >
        <div
          css={css`
            display: flex;
            gap: 1.6rem;
            color: ${theme.palette.gray[500]};
            ${theme.textVariants.body2};
          `}
        >
          <Body2>댓글 {item.comment ? item.comment : 0}</Body2>
          <Body2>조회수 {item.view ? item.view : 0}</Body2>
        </div>
      </div>
    </div>
  );
};

export const Button = ({ type, onClick }) => {
  if (type === 'new') {
    return (
      <Link to="/upload">
        <div
          onClick={onClick}
          css={css`
            display: flex;
            padding: 10px 33px;
            justify-content: center;
            align-items: center;
            width: 16.9rem;
            height: 4.5rem;
            color: ${theme.palette.gray[500]};
            ${theme.textVariants.body1Bold};
            background-color: ${theme.palette.primary[400]};
            border-radius: 3rem;
          `}
        >
          새 문서 만들기
        </div>
      </Link>
    );
  } else {
    return (
      <div
        onClick={onClick}
        css={css`
          display: flex;
          padding: 1rem 3rem;
          justify-content: center;
          align-items: center;
          color: ${theme.palette.gray[500]};
          ${theme.textVariants.body1Bold};
          background-color: ${theme.palette.primary[400]};
          border-radius: 3rem;
          cursor: pointer;
        `}
      >
        등록
      </div>
    );
  }
};

/**
 * 이미지 + 카테고리 이름이 보여지는 컴포넌트
 * @param {string} type 카테고리별 타입(new, newCheck, popular, popularCheck, country, year)
 */
export const Category = ({ type }) => {
  const img = {
    new: { src: '/images/mdi_new-box.png', name: '최신' },
    newCheck: { src: '/images/mdi_new-box-check.png', name: '최신' },
    popular: { src: '/images/iconamoon_trend-up-bold.png', name: '인기' },
    popularCheck: { src: '/images/iconamoon_trend-up-bold-check.png', name: '인기' },
    country: { src: '/images/ant-design_global-outlined.png', name: '국가별' },
    year: { src: '/images/fluent-mdl2_calendar-year.png', name: '년도별' },
  };
  const styles = {
    new: css`
      /* cursor: pointer; */
    `,
    newCheck: css`
      /* cursor: pointer; */
      color: ${theme.palette.primary[500]};
    `,
    popular: css`
      /* cursor: pointer; */
    `,
    popularCheck: css`
      /* cursor: pointer; */
      color: ${theme.palette.primary[500]};
    `,
  };
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        gap: 0.8rem;
        ${styles[type]}
      `}
    >
      <img src={process.env.PUBLIC_URL + img[type].src} alt={type} />
      {img[type].name}
    </div>
  );
};

/**
 * MemeInfoBox의 프레임
 */
export const MemeInfoBoxList = ({ children }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-wrap: wrap;
        row-gap: 2.4rem;
        column-gap: 3.6rem;
      `}
    >
      {children}
    </div>
  );
};

export const Document = () => {
  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1.6rem;
        background-color: ${theme.palette.primary[200]};
        border-radius: 1rem;
        border: 0.1rem solid ${theme.palette.primary[500]};
        ${theme.textVariants.body1Bold};
      `}
    >
      &gt; 찾는 문서가 없나요?
      <Button type="new"></Button>
    </div>
  );
};

export const FindText = ({ count }) => {
  return (
    <Body1Bold>
      총{' '}
      <span
        css={css`
          color: ${theme.palette.primary[500]};
        `}
      >
        {count}개
      </span>
      의 문서를 찾았습니다.
    </Body1Bold>
  );
};

// 흰색 컴포넌트
export const DocumentWrapper = ({ children }) => {
  return (
    <div
      css={css`
        width: 100%;
        height: auto;
        border-radius: 1.6rem;
        padding: 8rem 4rem;
        background-color: ${theme.palette.gray.white};
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 8rem;
      `}
    >
      {children}
    </div>
  );
};
