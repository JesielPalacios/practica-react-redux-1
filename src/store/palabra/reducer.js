const initialState = { palabra: "" };

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_WORD":
      return {
        ...state,
        palabra: action.payload
      };
    default:
      return state;
  }
};

export const selectActiveWord = (state) => state.palabraReducer.palabra;

// https://www.youtube.com/watch?v=k3vaufCIu2c
