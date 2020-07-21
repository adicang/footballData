import React from 'react';

import './index.scss';

const NotFound = props => {
  return (
    <div className='not-found-page-container'>
      <h1>Page Not Found</h1>
      <p>Sorry, this page does not exist</p>

      <button onClick={() => props.history.push(process.env.PUBLIC_URL + '/')}>
        Click here to go home
      </button>
    </div>
  );
};

export default NotFound;
