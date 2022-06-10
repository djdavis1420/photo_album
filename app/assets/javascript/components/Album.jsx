import React from 'react';
import useStore from '../shared/Store';
import Photo from './Photo';

const Album = () => {
  const { state, dispatch } = useStore();

  const renderPhotos = () => {
    if (state.photos.length > 0) {
      return state.photos.map(photo => <Photo key={photo.id} {...photo} />)
    }

    return null;
  }

  return (
    <div className="row w-75">
      {renderPhotos()}
    </div>
  );
}

export default Album;
