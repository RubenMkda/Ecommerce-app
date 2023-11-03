import { APIURL } from "../const/apiUrl"

export const getProducts = async() => {
    const products = await fetch(APIURL).then(data => data.json())
    return products
}

export const getProduct = async(id) => {
    const product = await fetch(APIURL + '/' + id).then(data =>  data.json())
    return product
}