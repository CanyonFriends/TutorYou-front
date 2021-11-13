import React, { useState, useEffect, useRef, useCallback } from 'react';
import * as Style from './styled';
import BlackListCard from '../../component/BlackListCard';
import { getBlackListAPI, getTeacherListAPI, changeTeacherBanStateAPI, TeacherAdminType } from '../../api/admin';

type TabType = 'teacher' | 'blacklist';

function Admin() {
  const [tab, setTab] = useState<TabType>('teacher');
  const [list, setList] = useState<TeacherAdminType[]>([]);
  const [pageNumber, setPageNumber] = useState(0);
  const loader = useRef(null);

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPageNumber(pageNumber + 1);
    }
  }, []);

  const getBlackList = async () => {
    const result = await getBlackListAPI({ pageNumber });
    if (result) {
      setList([...list, ...result.results]);
    }
  };

  const getTeacherList = async () => {
    const result = await getTeacherListAPI({ pageNumber });
    if (result) {
      setList([...list, ...result.results]);
    }
  };

  const toggleBlacklIST = async (teacherId: number) => {
    const result = await changeTeacherBanStateAPI({ teacherId });
    if (result) {
      const filteredList = list.filter((item) => item.teacherId !== teacherId);
      setList(filteredList);
    }
  };

  const changeTab = (tab: TabType) => {
    setList([]);
    setPageNumber(0);
    setTab(tab);
  };

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  useEffect(() => {
    if (tab === 'teacher') getTeacherList();
    else getBlackList();
  }, [tab, pageNumber]);

  return (
    <Style.Container>
      <Style.TitleWrapper>
        <Style.Title onClick={() => changeTab('teacher')} selected={tab === 'teacher'}>
          선생님 리스트
        </Style.Title>
        <Style.Title onClick={() => changeTab('blacklist')} selected={tab === 'blacklist'}>
          블랙 리스트
        </Style.Title>
      </Style.TitleWrapper>
      <Style.CardList>
        {tab === 'teacher' &&
          list.map((info) => (
            <Style.CardItem>
              <BlackListCard info={info} clickButton={toggleBlacklIST} />
            </Style.CardItem>
          ))}
      </Style.CardList>
      <div ref={loader} />
    </Style.Container>
  );
}

export default Admin;
