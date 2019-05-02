import React from 'react';
import Loadable from 'react-loadable';
const Loading = () => (<div>...</div>);

export default [
  {
    component: Loadable({
      loader: () => import('./pages/Person'),
      loading: Loading,
    }),
    path: '/:id/'
  },
  {
    component: Loadable({
      loader: () => import('./pages/List'),
      loading: Loading,
    }),
    path: '/'
  },
  {
    component: Loadable({
      loader: () => import('./pages/NoMatch'),
      loading: Loading,
    }),
  }
]