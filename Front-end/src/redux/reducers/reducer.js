const INIT_STATE = {
  carts: [],
  details:[],
};

export const cartreducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_CART":
      return {
        ...state,
        carts: [...state.carts, action.payload],
      };
    case "NEW_DATA":
      return {
        ...state,
        details: [...action.payload],
      };

    default:
      return state;
  }
};
