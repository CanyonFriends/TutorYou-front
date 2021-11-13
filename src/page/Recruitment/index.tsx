import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useRecruitmentPostContext } from '../../context/RecruitmentPostContext';
import MarkdownViewer from '../../component/MarkdownViewer';
import mockUpData from './mockUpData';
import * as Style from './styled';

export interface RecruitmentProps {
  applicantCount: number;
  categoryName: string;
  content: string;
  createdAt: string;
  endDate: string;
  groupId: number;
  postId: number;
  postType: string;
  startDate: string;
  title: string;
  totalStudentCount: number;
  updatedAt: string;
  userName: string;
}

interface Params {
  postId: string;
}

function Recruitment() {
  const { postId } = useParams<Params>();
  const { setCurrentPost, currentPost }: any = useRecruitmentPostContext();

  useEffect(() => {
    // API 호출 및 context state 저장
    setCurrentPost(mockUpData);
    console.log('postId', postId, currentPost.content);
  }, []);

  return (
    <Style.Container>
      <Style.Title>
        {currentPost.title}
      </Style.Title>
      <Style.MidContainer>
        <Style.UserName>
          {currentPost.userName} 
        </Style.UserName>
        <Style.CreatedAt>
          {currentPost.updatedAt ? (
            <>
              {`${currentPost.updatedAt}에 수정됨`}
            </>
          ) : (
            <>
              {`${currentPost.createdAt}에 생성됨`}
            </>
          )}
        </Style.CreatedAt>
      </Style.MidContainer>

      <Style.MidContainer>
        <Style.TextChip color="primary" label={currentPost.categoryName} />
        <Style.TextChip color="primary" label={currentPost.postType} />
        <Style.TextChip
          color="primary"
          label={`${currentPost.totalStudentCount}명중 ${currentPost.applicantCount}명이 참여하고 있습니다.`}
        />
      </Style.MidContainer>
      <Style.BottomContainer>
        <Style.Date>
          {currentPost.startDate}
          <Style.DateComment>
            에서
          </Style.DateComment>
          -
          {currentPost.endDate}
          <Style.DateComment>
            까지
          </Style.DateComment>
        </Style.Date>
      </Style.BottomContainer>
      <Style.MarkdownContainer>
        <MarkdownViewer content={currentPost.content} />
      </Style.MarkdownContainer>
    </Style.Container>
  );
}

export default Recruitment;
