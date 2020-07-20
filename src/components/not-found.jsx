import React from 'react';

import './not-found.scss';

const NotFound = props => {
  return (
    <div className='not-found-page-container'>
      <h1>Page Not Found</h1>
      <p>Sorry, this page does not exist</p>

      <button onClick={() => props.history.push('/')}>
        Click here to go home
      </button>
    </div>
  );
};

export default NotFound;
