const initialState = {
  router: {
    location: history.location,
    action: history.action,
  },
};

export default (state = initialState, action) => {
  if (action.type === 'NAVIGATE') {
    return {
      ...state,
      router: {
        location: action.location,
        action: action.action,
      },
    };
  }

  return state;
};
