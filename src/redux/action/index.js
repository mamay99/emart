// add Item in the Cart
export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

// delete Item in the Cart
export const deleteCart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};
