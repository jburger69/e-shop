const initialState = {
    products: [],
    loading: false
}
const productsReducer = (state = initialState, action ) => {
    switch(action.type) {
        case "GET_PRODUCTS":
            return {
                ...state,
                products: [...action.payload]
            }
        default:
            return state
    }
}

export default productsReducer;