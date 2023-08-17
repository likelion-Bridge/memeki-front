/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import { css } from '@emotion/react';
import './quill.snow.css';
import theme from '../../styles/theme';

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
            background-color: ${theme.palette.gray.white};
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
                color: ${theme.palette.gray[400]};
                ${theme.textVariants.header1};
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
              placeholder="소제목을 입력하세요"
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
              placeholder="소제목을 입력하세요"
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

  const insertVideo = () => {
    const url = prompt('Enter the video URL:');
    if (url) {
      const range = this.quill.getEditor().getSelection();
      this.quill.getEditor().insertEmbed(range.index, 'video', url, 'user');
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

export const MemeTitle = () => {
  return (
    <input
      type="text"
      placeholder="밈의 이름을 정의해주세요"
      css={css`
        width: 112rem;
        height: 8rem;
        border-radius: 1rem;
        align-items: center;
        display: flex;
        border: 0.2rem solid ${theme.palette.primary[500]};
        ${theme.textVariants.body1}
        color: ${theme.palette.gray[400]};
        padding: 1.6rem 3.2rem;
      `}
    />
  );
};
