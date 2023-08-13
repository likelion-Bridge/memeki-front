/** @jsxImportSource @emotion/react */
import React, { Children, useState } from 'react';
import { css } from '@emotion/react';
import { Body1, Body1Bold, Header1, Title } from '../emotion/FontComponent';
import theme from '../../styles/theme';
import { TextBox } from '../emotion/Component';

export const DocumentTitle = ({ title }) => {
  return (
    <TextBox
      style={css`
        color: ${theme.palette.primary[500]};
      `}
    >
      <Title>{title}</Title>
      <div
        css={css`
          display: inline-flex;
          align-items: flex-end;
        `}
      >
        <Body1Bold>[편집]</Body1Bold>
      </div>
    </TextBox>
  );
};

export const DocumentIndex = () => {
  const contextDummy =
    '1. 개요\n2. 영상\n3. 가사\n4. 대한민국에서의 화제\n    4.1. 이다현의 춤\n    4.2. 싸이의 춤';
  return (
    <div
      css={css`
        display: flex;
        background-color: ${theme.palette.primary[100]};
        filter: drop-shadow(0 0 2rem rgba(0, 0, 0, 0.15));
        padding: 1.6rem 3.2rem;
        flex-direction: column;
        max-width: fit-content;
        min-height: fit-content;
        border-radius: 1.6rem;
        gap: 2.4rem;
      `}
    >
      <div
        css={css`
          color: ${theme.palette.gray[500]};
          ${theme.textVariants.header1};
        `}
      >
        목차
      </div>
      <div
        css={css`
          color: ${theme.palette.gray[400]};
          ${theme.textVariants.body1Bold}
          line-height: 3rem;
          white-space: pre-wrap;
        `}
      >
        {contextDummy}
      </div>
    </div>
  );
};

export const DocumentSection = ({ subTitle, context }) => {
  return (
    <div
      css={css`
        color: ${theme.palette.gray[600]};
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: row;
          gap: 0.8rem;
          padding-bottom: 1.6rem;
          border-bottom: 1px solid ${theme.palette.gray[300]};
          margin-bottom: 1.6rem;
        `}
      >
        <div
          css={css`
            display: inline-flex;
            align-items: center;
          `}
        >
          <img src={process.env.PUBLIC_URL + '/images/selectIcon.png'} alt="icon" />
        </div>
        <Header1>{subTitle}</Header1>
      </div>
      <Body1>{context}</Body1>
    </div>
  );
};

export const DocumentWrapper = ({ children }) => {
  return (
    <div
      css={css`
        width: 100%;
        height: auto;
        border-radius: 1.6rem;
        background-color: ${theme.palette.gray.white};
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 4rem;
      `}
    >
      {children}
    </div>
  );
};

export const Comment = ({ type }) => {
  const [isHidden, setIsHidden] = useState(false); // 상태 추가

  const [name, setName] = useState('김재연'); // 초기값 설정
  const [time, setTime] = useState('8시간 전'); // 초기값 설정
  const [like, setLike] = useState(0); // 초기값 설정
  const [hate, setHate] = useState(0); // 초기값 설정

  if (isHidden) {
    return null;
  }
  const handleDeleteClick = () => {
    setIsHidden(true);
  };

  const handleLikeClick = () => {
    setLike(like + 1);
  };

  const handleHateClick = () => {
    setHate(hate + 1);
  };

  if (type === 'reply') {
    return (
      <div
        css={css`
          background-color: ${theme.palette.gray.white};
          padding-left: 4rem;
          width: 112rem;
          border-bottom: 0.1rem solid #d2d2d1; /* 아래에 1px 높이의 테두리 추가 */
        `}
      >
        <div
          css={css`
            color: ${theme.palette.gray[600]};
            ${theme.textVariants.body2_bold}
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 108rem;
            height: 2.2rem;
            margin-bottom: 0.8rem;
            margin-top: 1.6rem;
          `}
        >
          <div
            className="status"
            css={css`
              display: flex;
              align-items: center;
            `}
          >
            <img
              src={process.env.PUBLIC_URL + './images/reply.png'}
              alt="reply"
              css={css`
                width: 2.4rem;
                height: 2.4rem;
                margin-right: 0.8rem;
              `}
            ></img>
            {name}&nbsp;&nbsp;·&nbsp;&nbsp;{time}
          </div>
          <div
            className="option"
            css={css`
              display: flex;
              align-items: center;
              gap: 0.4rem;
            `}
          >
            <img
              src={process.env.PUBLIC_URL + './images/like.png'}
              alt="like"
              css={css`
                width: 2.4rem;
                height: 2.4rem;
                cursor: pointer; /* 마우스를 올렸을 때 커서 모양 변경 */
              `}
              onClick={handleLikeClick} // 클릭 이벤트 추가
            ></img>{' '}
            {like}
            <img
              src={process.env.PUBLIC_URL + './images/hate.png'}
              alt="hate"
              css={css`
                width: 2.4rem;
                height: 2.4rem;
                cursor: pointer; /* 마우스를 올렸을 때 커서 모양 변경 */
              `}
              onClick={handleHateClick} // 클릭 이벤트 추가
            ></img>{' '}
            {hate}
            <div
              className="delete"
              css={css`
                cursor: pointer; /* 마우스를 올렸을 때 커서 모양 변경 */
              `}
              onClick={handleDeleteClick}
            >
              삭제
            </div>
          </div>
        </div>
        <div
          className="div"
          css={css`
            color: ${theme.palette.gray[600]};
            ${theme.textVariants.body2}
            display:flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: space-between;
            padding-left: 2.4rem;
            width: 112rem;
            height: 5.7rem;
            margin-bottom: 1.6rem;
          `}
        >
          <div className="detail">어쩌구 저쩌구 저쩌저어쩌우</div>
          <div className="reply">답글</div>
        </div>
      </div>
    );
  }
  return (
    <div
      css={css`
        background-color: ${theme.palette.gray.white};
        width: 112rem;
        border-bottom: 0.1rem solid #d2d2d1; /* 아래에 1px 높이의 테두리 추가 */
      `}
    >
      <div
        css={css`
          color: ${theme.palette.gray[600]};
          ${theme.textVariants.body2_bold}
          display: flex;
          justify-content: space-between;
          width: 112rem;
          height: 2.2rem;
          margin-bottom: 0.8rem;
          margin-top: 1.6rem;
        `}
      >
        <div className="status">
          {name}&nbsp;&nbsp;·&nbsp;&nbsp;{time}
        </div>
        <div
          className="option"
          css={css`
            display: flex;
            align-items: center;
            gap: 0.4rem;
          `}
        >
          <img
            src={process.env.PUBLIC_URL + './images/like.png'}
            alt="like"
            css={css`
              width: 2.4rem;
              height: 2.4rem;
              cursor: pointer; /* 마우스를 올렸을 때 커서 모양 변경 */
            `}
            onClick={handleLikeClick} // 클릭 이벤트 추가
          ></img>{' '}
          {like}
          <img
            src={process.env.PUBLIC_URL + './images/hate.png'}
            alt="hate"
            css={css`
              width: 2.4rem;
              height: 2.4rem;
              cursor: pointer; /* 마우스를 올렸을 때 커서 모양 변경 */
            `}
            onClick={handleHateClick} // 클릭 이벤트 추가
          ></img>{' '}
          {hate}
          <div
            className="delete"
            css={css`
              cursor: pointer; /* 마우스를 올렸을 때 커서 모양 변경 */
            `}
            onClick={handleDeleteClick}
          >
            삭제
          </div>
        </div>
      </div>
      <div
        className="div"
        css={css`
          color: ${theme.palette.gray[600]};
          ${theme.textVariants.body2}
          display:flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: space-between;
          padding-left: 2.4rem;
          width: 112rem;
          height: 5.7rem;
          margin-bottom: 1.6rem;
        `}
      >
        <div className="detail">어쩌구 저쩌구 저쩌저어쩌우</div>
        <div className="reply">답글</div>
      </div>
    </div>
  );
};

export const CommentBox = () => {
  return (
    <div
      css={css`
        color: ${theme.palette.gray[400]};
        ${theme.textVariants.body2}
      `}
    >
      <div
        className="top"
        css={css`
          display: flex;
          width: 112rem;
          height: 5.1rem;
        `}
      >
        <input
          type="text"
          className="name"
          css={css`
            padding: 1.6rem;
            display: flex;
            width: 56rem;
            border: 0.1rem solid ${theme.palette.gray[300]};
            background-color: ${theme.palette.gray.white};
          `}
          placeholder="이름"
        />
        <input
          type="password"
          className="password"
          css={css`
            padding: 1.6rem;
            display: flex;
            width: 56rem;
            border: 0.1rem solid ${theme.palette.gray[300]};
          `}
          placeholder="비밀번호"
        />
      </div>

      <div
        className="commentbox"
        css={css`
          padding: 1.6rem;
          width: 112rem;
          height: 17.1rem;
          border: 0.1rem solid ${theme.palette.gray[300]};
          background-color: ${theme.palette.gray.white};
        `}
      >
        <textarea
          className="comment-input"
          css={css`
            width: 100%;
            height: 100%;
            border: none;
            resize: none;
          `}
          placeholder="미미키에 의견을 남겨주세요"
        ></textarea>
      </div>
    </div>
  );
};
