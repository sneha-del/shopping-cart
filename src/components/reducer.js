export const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    let updatedCart = state.item.map((curEle) => {
      if (curEle.id === action.payload) {
        return { ...curEle, amount: curEle.amount + 1 };
      }
      return curEle;
    });
    return { ...state, item: updatedCart };
  }
  if (action.type === "DECREMENT") {
    const updatedCart = state.item
      .map((curEle) => {
        if (curEle.id === action.payload) {
          return { ...curEle, amount: curEle.amount - 1 };
        }
        return curEle;
      })
      .filter((curEle) => curEle.amount !== 0);
    return { ...state, item: updatedCart };
  }
  return state;
};
