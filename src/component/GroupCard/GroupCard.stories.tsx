import React from 'react';
import { action } from '@storybook/addon-actions';
import GroupCard from '.';

export default {
  title: 'GroupCard',
  component: GroupCard,
};

const starAction = action('give star');
const reportAction = action('report teacher');
const fireAction = action('fire group');
const group = {
  groupId: 0,
  teacherName: '조개소년',
  teacherId: 0,
  studentNames: ['조개소년1', '조개소년2', '조개소년3', '조개소년4', '조개소년5', '조개소년6'],
};

export const teachersCard = () => (
  <GroupCard group={group} isTeacher giveStars={starAction} reportTeacher={reportAction} fireGroup={fireAction} />
);

export const studentsCard = () => (
  <GroupCard
    group={group}
    isTeacher={false}
    giveStars={starAction}
    reportTeacher={reportAction}
    fireGroup={fireAction}
  />
);
