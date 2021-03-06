import * as Type from './../constants/ActionTypes'

var initialState = [];

var findIndex= (products, id) => {
  var result = -1;
  products.forEach((product, index) => {
    if(product.id === id) {
      result = index
    }
  });
  return result
}

const products = (state= initialState, action) => {
  var index = -1;
  var { id, product } = action;
  switch (action.type) {
    case Type.FETCH_PRODUCTS: 
      state = action.products
      return  [...state]
    case Type.DELETE_PRODUCT: 
      index = findIndex(state, id)
      state.splice(index, 1)
      return [...state]
    case Type.ADD_PRODUCT:
      state.push(product)
      return [...state]
    case Type.UPDATE_PRODUCT:
      index = findIndex(state, product.id)
      state[index] = product
      return [...state]
    default: return [...state]
  }
}

export default products;