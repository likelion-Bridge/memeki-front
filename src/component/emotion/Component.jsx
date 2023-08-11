/** @jsxImportSource @emotion/react */
import React, { useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import { css } from '@emotion/react';
import './quill.snow.css';
import theme from '../../styles/theme';

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

export const SearchBar = () => {
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
          color: ${theme.palette.gray[400]};
          ${theme.textVariants.body1};
        `}
      />
      <img
        src="./images/search.png"
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

export const MemeInfoBox = () => {
  const [title, setTitle] = useState('제목');
  const [date, setDate] = useState('날짜');
  const [comment, setComment] = useState('댓글');
  const [like, setLike] = useState('좋아요');

  return (
    <div>
      <div
        className="container"
        css={css`
          width: 38.4rem;
          height: 39.5rem;
          border-radius: 1.9rem;
          background-color: ${theme.palette.primary[500]};
          padding: 1.6rem;
        `}
      >
        <div
          className="imgbox"
          css={css`
            width: 35.2rem;
            height: 22.4rem;
            border-radius: 1.9rem;
            background-color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
          `}
        >
          <img
            src="./images/logo.png"
            alt="search"
            css={css`
              margin: 0.8rem 1.6rem;
              width: 10rem;
              height: 3rem;
            `}
          ></img>
        </div>
        <div
          className="textbox"
          css={css`
            margin-top: 3.2rem;
            color: ${theme.palette.gray[500]};
            ${theme.textVariants.header2};
          `}
        >
          {title}
        </div>
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            margin-top: 4.8rem;
            color: ${theme.palette.gray[500]};
            ${theme.textVariants.body2};
          `}
        >
          <div
            css={css`
              color: ${theme.palette.gray[500]};
              ${theme.textVariants.body2};
            `}
          >
            {date}
          </div>
          <div
            css={css`
              display: flex;
              gap: 1.6rem;
              color: ${theme.palette.gray[500]};
              ${theme.textVariants.body2};
            `}
          >
            <div>{comment}</div>
            <div>{like}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const UploadMeme = ({ type }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(false);
  };
  const [displayText, setDisplayText] = useState('네');

  const handleToggle = () => {
    if (displayText === '네') {
      setDisplayText('아니오');
    } else {
      setDisplayText('네');
    }
  };

  if (type === 'sub') {
    return (
      <div
        css={css`
          width: 112rem;
          height: 71.7rem;
          color: ${theme.palette.gray[400]};
        `}
      >
        <div
          css={css`
            display: flex;
            gap: 2rem;
          `}
        >
          하위단락인가요?
          <button onClick={handleToggle} style={{ textDecoration: 'underline' }}>
            {displayText}
          </button>
        </div>

        <div
          css={css`
            display: flex;
            justify-content: right;
            padding: 0rem 0.8rem;
            align-items: flex-start;
            gap: 1.6rem;
          `}
        ></div>

        <div
          css={css`
            width: 112rem;
            height: 68.2rem;
            border-radius: 1rem;
            border: 0.2rem solid ${theme.palette.primary[500]};
            background-color: white;
          `}
        >
          {isVisible && (
            <div
              css={css`
                z-index: 100;
                display: flex;
                width: 111.6rem;
                height: 67.8rem;
                position: absolute;
                background-color: rgba(240, 240, 239, 0.6);
                align-items: center;
                justify-content: center;
                color: #6b6b6a;
                font-size: 3.2rem;
                font-weight: 700;
                font-family: Inter;
                letter-spacing: -0.96px;
                text-decoration-line: underline;
                &:hover {
                  cursor: pointer; /* 마우스를 올렸을 때 커서 모양 변경 */
                  text-decoration: underline; // 마우스를 올렸을 때도 밑줄 유지
                }
              `}
              onClick={handleClick}
            >
              단락 추가
            </div>
          )}
          <div
            css={css`
              justify-content: center;
              align-items: center;
              gap: 1rem;
              height: 8rem;
              position: relative; /* 부모 요소에 상대 위치 설정 */
            `}
          >
            <div
              css={css`
                width: 94%; /* 가상 요소의 너비를 100%로 설정 */
                position: absolute; /* 절대 위치 설정 */
                bottom: 0; /* 아래쪽으로 위치 */
                left: 0; /* 왼쪽으로 위치 */
                border-bottom: solid 0.1rem ${theme.palette.primary[500]};
                margin: 0 3rem; /* 양 옆 간격 조절 */
              `}
            />
            <input
              type="none"
              placeholder='소제목을 입력하세요 (목차번호 예시. "1", or "1.1.")'
              css={css`
                margin: 3.2rem;
                width: 37.2rem;
                height: 2.2rem;
              `}
            />
            <div
              css={css`
                padding-left: 2rem;
              `}
            >
              <MyEditor></MyEditor>
            </div>
          </div>
        </div>
      </div>
    );
  } else
    return (
      <div
        css={css`
          width: 112rem;
          height: 71.7rem;
        `}
      >
        <div
          css={css`
            display: flex;
            justify-content: right;
            padding: 0rem 0.8rem;
            align-items: flex-start;
            gap: 1.6rem;
          `}
        ></div>
        <div
          css={css`
            width: 112rem;
            height: 68.2rem;
            border-radius: 1rem;
            border: 0.2rem solid ${theme.palette.primary[500]};
            background-color: white;
          `}
        >
          <div
            css={css`
              justify-content: center;
              align-items: center;
              gap: 1rem;
              height: 8rem;
              position: relative; /* 부모 요소에 상대 위치 설정 */
            `}
          >
            <div
              css={css`
                width: 94%; /* 가상 요소의 너비를 100%로 설정 */
                position: absolute; /* 절대 위치 설정 */
                bottom: 0; /* 아래쪽으로 위치 */
                left: 0; /* 왼쪽으로 위치 */
                border-bottom: solid 0.1rem ${theme.palette.primary[500]};
                margin: 0 3rem; /* 양 옆 간격 조절 */
              `}
            />
            <input
              type="text"
              placeholder='소제목을 입력하세요 (목차번호 예시. "1", or "1.1.")'
              css={css`
                margin: 3.2rem;
                width: 37.2rem;
                height: 2.2rem;
              `}
            />
          </div>
          <div
            css={css`
              padding-left: 2rem;
            `}
          >
            <MyEditor></MyEditor>
          </div>
        </div>
      </div>
    );
};

const MyEditor = () => {
  const [editorHtml, setEditorHtml] = useState('');

  const modules = {
    toolbar: {
      container: [['underline', 'strike', 'blockquote'], ['image']],
    },
  };

  const formats = [
    'header',
    'font',
    'list',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'align',
    'color',
    'background',
    'link',
    'image',
    'video',
  ];

  const handleEditorChange = (html) => {
    setEditorHtml(html);
  };

  const insertImage = () => {
    const url = prompt('Enter the image URL:');
    if (url) {
      const range = this.quill.getEditor().getSelection();
      this.quill.getEditor().insertEmbed(range.index, 'image', url, 'user');
    }
  };

  return (
    <div
      css={css`
        color: black;
      `}
    >
      <ReactQuill
        value={editorHtml}
        onChange={handleEditorChange}
        modules={modules}
        formats={formats}
        placeholder="내용을 입력하세요" // 텍스트 홀더 추가
      />
    </div>
  );
};
