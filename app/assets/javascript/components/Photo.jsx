import React from 'react';

const Photo = (props) => {
  console.group(`Photo ${props.id} (Album ${props.albumId})`);;
    console.log(`Title: ${props.title}`);
  console.groupEnd();

  return (
    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 p-3 d-flex flex-column align-items-center">
      <img
        className="border rounded-3"
        src={props.thumbnailUrl}
        alt={props.title}
      />
      <div className="small text-center w-75">
        {props.title}
      </div>
    </div>
  )
}

export default Photo;
