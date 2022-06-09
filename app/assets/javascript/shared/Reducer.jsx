const Reducer = (state, action) => {
  switch (action.type) {
    case 'SET_STATE':
      return {
        ...state,
        ...action.payload,
      };
    case 'SET_KEY':
      return {
        ...state,
        [action.key]: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
