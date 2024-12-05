import {backEndUrl} from "@/constants/index.ts";

export const productApis = {
    async getProductsByCategory(categoryType) {
        try {
            const response = await fetch(`${backEndUrl}products/procat/${categoryType}`);
            return await response.json();
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    },
    async  getProductByProductId(productId) {
        try {
            const response = await fetch(`${backEndUrl}products/${productId}`);
            // Check if the response is okay
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            // Read and parse the response body
            return await response.json();
        } catch (error) {
            console.error('Error fetching product by id:', error);
            throw error; // Re-throw the error to handle it upstream if needed
        }
    }
    ,
};
