import React, { useEffect } from 'react';
import Join from '../../components/Join';
import Search from '../../components/Search';
import StartUpBlock from '../../components/StartUpBlock';

import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import { fetchStartups } from '../../redux/slices/startup';

import { Skeleton } from '../../components/Skeleton';

import st from './home.module.scss';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  const { startups, status } = useSelector((state: RootState) => state.startup);
  const { search } = useSelector((state: RootState) => state.filter);
  console.log(startups, status);

  const allStartups = () => {
    dispatch(fetchStartups({ search }));
  };

  useEffect(() => {
    allStartups();
  }, [search]);

  const skeleton = [...new Array(8)].map((_, i) => <Skeleton key={i} />);

  const totalStartups = startups.length ? (
    startups.map((obj) => <StartUpBlock key={obj.id} {...obj} />)
  ) : (
    <div>
      <h3 className={st.title}>Похоже ничего не найдено</h3>
      <img src="../assets/null.png" alt="null" className={st.image} />
    </div>
  );

  return (
    <div className="main-block">
      <Join />
      <div className="nav-block">
        <Search />
      </div>
      <div className="row">{status === 'loading' ? skeleton : totalStartups}</div>
    </div>
  );
};

export default Home;
