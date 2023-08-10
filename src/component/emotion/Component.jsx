/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';

import { css, keyframes } from '@emotion/react';
import theme from '../../styles/theme';

/**
 * 주석 예시) '클럽 마스터 이메일 보기' 버튼을 눌렀을 때 뜨게 되는 컴포넌트
 * 컴포넌트 만드는 예시
 * 이런 식으로 컴포넌트 만들어주길 바람
 */
export const Toast = () => {
  return (
    <div
      css={css`
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 100;
        align-items: center;
        justify-content: center;
        padding: 3.3rem 8.7rem;
        overflow: auto;
        border-radius: 1.2rem;
        background: ${theme.palette.gray.white};
        box-shadow: 6px 7px 9px 5px rgba(0, 0, 0, 0.25);
      `}
    >
      <p
        css={css`
          display: block;
          font-size: ${theme.textVariants.heading5};
          color: ${theme.palette.gray[800]};
        `}
      >
        해당 클럽 마스터의 이메일이 클립보드에 복사되었어요
      </p>
    </div>
  );
};

/**
 * 1200px의 Inner 컴포넌트, 가운데 정렬 처리 됨
 * @param children 컴포넌트 안에 넣을 자식 요소
 */
export const Inner = ({ children }) => (
  <section
    css={css`
      width: 120rem;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: start;
      /* gap: 9.6rem; */
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
        width: 120rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        padding: 2.4rem 0;
      `}
    >
      <img
        src={process.env.PUBLIC_URL + './images/logo.png'}
        alt="logo"
        css={css`
          width: 10rem;
          height: 3rem;
        `}
      ></img>
      <div
        css={css`
          ${styles[type].searchBar}
        `}
      >
        <input
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
            src={process.env.PUBLIC_URL + './images/search.png'}
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
        <li>홈</li>
        <li>국가별</li>
        <li>년도별</li>
        <li>밈등록</li>
      </ul>
    </div>
  );
};

/**
 * custom selectBox
 * @param {string} type select목록 (date, country, year)
 * @returns
 */
export const SelectBox1 = ({ type }) => {
  const handleChange = (e) => {
    // event handler
    console.log(e.target.value);
  };
  const options = {
    date: [
      { value: 'week', name: '이번 주' },
      { value: 'month', name: '이번 달' },
      { value: 'year', name: '올해' },
    ],
    country: [
      { value: 'korea', name: '국내 밈' },
      { value: 'foreign', name: '해외 밈' },
      { value: 'japan', name: '일본 밈' },
    ],
    year: [
      { value: '1900', name: '2000년 이전' },
      { value: '2000', name: '2000년 대' },
      { value: '2010', name: '2010년 대' },
      { value: '2020', name: '2020년 대' },
    ],
  };
  const rotateAnimation = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(180deg);
    }
  `;
  return (
    <div
      css={css`
        position: relative;
        width: 10.3rem;
        height: 1.9rem;
      `}
    >
      <select
        onChange={handleChange}
        css={css`
          width: inherit;
          height: inherit;
          display: flex;
          align-items: center;
          gap: 1.6rem;
          color: ${theme.palette.gray[500]};
          ${theme.textVariants.body2Bold};
          justify-content: flex-end;
          appearance: none;
          border: 0 none;
          outline: 0 none;
          padding: 0 0.5rem;
          background-color: transparent;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          cursor: pointer;

          &::-ms-expand {
            display: none;
          }
        `}
      >
        {options[type].map((option) => (
          <option
            key={option.value}
            value={option.value}
            defaultValue={type.defaultValue === option.value}
            css={css`
              background: ${theme.palette.gray.white};
            `}
          >
            {option.name}
          </option>
        ))}
      </select>
      <div
        css={css`
          position: absolute;
          top: 50%;
          right: 10px;
          height: inherit;
          display: flex;
          justify-content: center;
          align-items: center;
          transform: translateY(-50%);
          transition: 0.3s;
          animation: none;
          select:focus + & {
            animation: ${rotateAnimation} 1s linear forwards;
          }
        `}
      >
        <img
          src={process.env.PUBLIC_URL + './images/selectIcon.png'}
          alt="selectIcon"
          css={css`
            height: 1rem;
            width: 1.5rem;
          `}
        />
      </div>
    </div>
  );
};

/**
 * custom selectBox
 * z-index 손봐야 할 수도 있음
 * @param {string} type select목록 (date, country, year)
 */
export const SelectBox = ({ type }) => {
  const options = {
    date: [
      { value: 'week', name: '이번 주' },
      { value: 'month', name: '이번 달' },
      { value: 'year', name: '올해' },
    ],
    country: [
      { value: 'korea', name: '국내 밈' },
      { value: 'foreign', name: '해외 밈' },
      { value: 'japan', name: '일본 밈' },
    ],
    year: [
      { value: '1900', name: '2000년 이전' },
      { value: '2000', name: '2000년 대' },
      { value: '2010', name: '2010년 대' },
      { value: '2020', name: '2020년 대' },
    ],
  };
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
  const [selectedOption, setSelectedOption] = useState(options[type][0].name);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (optionName) => {
    setSelectedOption(optionName);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setRotationDegree(isOpen ? 0 : 180);
  };

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
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
            src={process.env.PUBLIC_URL + './images/selectIcon.png'}
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
            width: inherit;
            border-radius: 0.5rem;
            background: ${theme.palette.gray.white};
            box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.05);
          `}
        >
          {options[type].map((option) => (
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
export const TextBox = ({ children }) => (
  <div
    css={css`
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    `}
  >
    {children}
  </div>
);
