/** @jsxImportSource @emotion/react */
import React, { useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import { css } from '@emotion/react';
import './quill.snow.css';
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

export const SearchBar = () => {
  return (
    <div
      css={css`
        width: 120rem;
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
          <a
            href="#" // 링크 주소를 지정해주세요
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
                text-decoration: underline; // 마우스를 올렸을 때도 밑줄 유지
              }
            `}
          >
            단락 추가
          </a>
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

export const MyEditor = () => {
  const [editorHtml, setEditorHtml] = useState('');

  const modules = {
    toolbar: {
      container: [
        ['underline', 'strike', 'blockquote'],

        ['link', 'image', 'video'],
      ],
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

  const insertVideo = () => {
    const url = prompt('Enter the video URL:');
    if (url) {
      const range = this.quill.getEditor().getSelection();
      this.quill.getEditor().insertEmbed(range.index, 'video', url, 'user');
    }
  };

  return (
    <div css={css``}>
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
