import {useEffect} from "react";

export const productApis = {
    async getProductsByCategory(categoryType) {
        try {
            const response = await fetch(`http://localhost:8080/products/procat/${categoryType}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }
};
