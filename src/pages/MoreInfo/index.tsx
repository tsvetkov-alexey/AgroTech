import React, { useEffect, useState } from 'react';

import st from './moreInfo.module.scss';

import { useParams } from 'react-router-dom';
import axios from '../../axios';
import { Loader } from '../../components/UI/Loader';
import { Startups } from '../../redux/slices/startup';

const MoreInfo: React.FC = () => {
  const { id } = useParams();
  const [info, setInfo] = useState<Startups>();

  const fetchStartUpId = async () => {
    try {
      const { data } = await axios.get(`startups/${id}`);
      setInfo(data);
    } catch (error) {
      console.log('ERROR', error);
    }
  };

  useEffect(() => {
    fetchStartUpId();
  }, []);

  if (info)
    return (
      <div className="main-block">
        <div className={st.block}>
          <img src={info.imageUrl} />
          <div className={st.info}>
            <h2>{info.title}</h2>
            <span>автор: {info.author}</span>
            <br />
            <span>создано: {info.createdAt}</span>
            <br />
            <span>описание: {info.desc}</span>
            <br />
          </div>
        </div>
      </div>
    );
  else return <Loader />;
};

export default MoreInfo;
