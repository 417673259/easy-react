import React from 'react';
import S from './Person.css'

import sj from '../img/sanjiu.jpg';
import lm from '../img/leimu.jpg';

const img  = {
  sj,
  lm,
}

export default (props) => {
  const { match: { params } } = props;
  return (
    <div className={S.img}>
      <img src={img[params.id]} />
    </div>
  )
}