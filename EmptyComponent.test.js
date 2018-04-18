import React from 'react';
import ReactDOM from 'react-dom';
import EmptyComponent from './EmptyComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EmptyComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
