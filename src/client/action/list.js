import {
  FETCH_LIST,
} from '../const';

import lm from '../img/leimu.jpg';
import sj from '../img/sanjiu.jpg';

export function mock() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve({
        code:200,
        list: [
          {
            name: '蕾姆酱',
            imgUrl: lm,
          },
          {
            name: '三玖',
            imgUrl: sj
          }
        ]
      })
    }, 500);
  })
}

export function fetchList() {
  return async dispatch => {
    const { list } = await mock();
    dispatch({
      type: FETCH_LIST,
      data: list
    });
  }
}