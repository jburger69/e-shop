

export const getProducts = () => {
    //Fetch products from fake API.
    return (dispatch) => {
        fetch("https://fakestoreapi.com/products")
            .then(resp => resp.json())
            .then(products => {
                dispatch({
                    type: "GET_PRODUCTS",
                    payload: products
                })
            })
        }
}