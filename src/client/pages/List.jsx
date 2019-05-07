import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import { fetchList } from '../action/list';
import S from './List.scss';


@hot(module)
@connect((state) => ({
  list: state.list
}))
export default class List extends React.PureComponent {

  componentDidMount() {
    const { dispatch } = this.props;
    document.title='create-easy-react';
    dispatch(fetchList());
  }

  render() {
    const { list: { list } } = this.props;
    return (
      <ul className={S.wrap}>
      {
        list.map(item => (
          <li id={item.id} key={item.name}>
            <Link
              to={`/${item.url}/`}
            >
            {item.name}
            </Link>
          </li>
        ))
      }
    </ul>
    )
  }
}