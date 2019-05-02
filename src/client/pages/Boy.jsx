import React, { useState } from 'react';

export default (props) => {
  const { name = '小萝莉'} = props;
  const [num ,setNum] = useState(1);
  const click = () => {
    setNum(num + 1);
  }
  return (
    <div>
      <span>{name}我是llll2222</span>
      <button onClick={click}>{num}</button>
    </div>
  )
}