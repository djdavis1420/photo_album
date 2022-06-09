import React, { useState } from 'react';
import axios from 'axios';
import useStore from '../shared/Store';

const Form = () => {
  const { state, dispatch } = useStore();
  const [error, setError] = useState(null);

  const handleInput = (e) => {
    if (isNaN(e.currentTarget.value)) {
      dispatch({ type: 'SET_KEY', key: 'albumId', payload: '' })
      setError('Input Invalid');
    } else {
      setError(null);
      dispatch({ type: 'SET_KEY', key: 'albumId', payload: parseInt(e.currentTarget.value) })
    }
  }

  const handleClick = () => {
    setError(null);

    axios.get(`/albums/sync?id=${state.albumId}`)
         .then(res => dispatch({ type: 'SET_KEY', key: 'photos', payload: res.data.photos }))
         .catch(err => setError(err.response.data.error))
  }

  const handleClear = () => {
    setError(null)
    dispatch({ type: 'SET_STATE', payload: { albumId: '', photos: [] } })
  }

  return (
    <div className="d-flex justify-content-center align-items-start my-3">
      <div className="d-flex flex-column align-items-start">
        <input
          type="text"
          placeholder="Album ID"
          required
          value={state.albumId}
          onChange={handleInput}
        />

        {error && (
          <div className="text-danger small">{error}</div>
        )}
      </div>

      <button
        className="ms-2 btn btn-primary btn-sm"
        type="button"
        disabled={!state.albumId || error}
        onClick={handleClick}
      >
        Submit
      </button>

      <button
        className="ms-2 btn btn-outline-primary btn-sm"
        type="button"
        disabled={!state.albumId && state.photos.length === 0}
        onClick={handleClear}
      >
        Clear
      </button>
    </div>
  )
}

export default Form;
