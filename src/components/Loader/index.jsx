import React from 'react';

import LoaderGif from '../../assets/loader.gif';
import './index.scss';

const Loader = () => {
  return (
    <div className='loader'>
      <img src={LoaderGif} />
    </div>
  );
};

export default Loader;
