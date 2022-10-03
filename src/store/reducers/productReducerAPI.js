const INIT = {
  apiProducts: [],
};

export default function productsReducerAPI(state = INIT, action) {
  if (action.type === "SET_PRODUCTSAPI") {
    return { ...state, apiProducts: action.payload };
  } else {
    return { ...state };
  }
}
