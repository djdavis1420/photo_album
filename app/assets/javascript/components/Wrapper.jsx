import React from 'react';
import useStore, { Store } from '../shared/Store'

import Form from './Form';
import Album from './Album';

const Wrapper = () => {
  return (
    <div className="mt-3 d-flex flex-column align-items-center">
      <Store initialState={{ albumId: '', photos: [] }}>
        <Form />
        <Album />
      </Store>
    </div>
  )
}

export default Wrapper;
