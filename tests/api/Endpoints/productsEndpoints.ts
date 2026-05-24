import { APIRequestContext } from "@playwright/test";

const baseURL = "https://automationexercise.com/api";
const productsEndpoint = "/productsList";
const searchEndPoint = "/searchProduct";

async function getAllProducts(request: APIRequestContext) {
    const response = request.get(baseURL + productsEndpoint);
    return response
}

async function searchForProducts(request: APIRequestContext) {
    const response = request.post(baseURL + searchEndPoint, {
        form: {
            search_product: 'tshirt'
        }
    });
    return response;
}
export default { getAllProducts, searchForProducts }