import React from 'react';
import S from './Person.css'

import sj from '../img/sanjiu.jpg';
import leimu from '../img/leimu.jpg';

const img  = {
  sj,
  leimu,
}

export default (props) => {
  const { match: { params } } = props;
  return (
    <div className={S.img}>
      <img src={img[params.id]} />
    </div>
  )
}