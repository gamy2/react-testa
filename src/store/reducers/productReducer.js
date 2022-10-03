const INIT = {
  products: [],
};

export default function ProductsReducer(state = INIT, action) {
  if (action.type === "SET_PRODUCTS") {
    return {
      ...state,
      products: action.payload,
    };
  } else {
    return { ...state };
  }
}
